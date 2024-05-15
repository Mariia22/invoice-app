import { unstable_noStore as noStore } from "next/cache";
import prisma from "../../../prisma/client";
import { Client, Invoice, Item, Status } from "./types";
import { errorMessage, textAndHeaders } from "./const";

export async function getAllInvoices (){
  noStore ();
  try {
    const data = await prisma?.invoice.findMany({
      include: {
        senderAddress:true,
        client: {
          include:{
            clientAddress: true
          }
        },
        item: true
      }
    });
    return data

  } catch (error){
    console.error(errorMessage.failedGetInvoices) ;
  }
}

export async function getInvoiceById (id:string) {
  try {
    const data = await prisma?.invoice.findUnique({
      where:{
        id: id
      },
      include: {
        senderAddress:true,
        client: {
          include:{
            clientAddress: true
          }
        },
        item: true
      }
    });

    return data
  } catch (error){
    console.error(errorMessage.failedGetInvoiceById);
  }
}

 export async function getFilteredInvoices(chosenStatus:string[]){
  noStore ();
  const search:Status[] = [];
  chosenStatus.forEach(status=>{
    if(status === Status.Draft) {
      search.push(Status.Draft)
    } else if (status === Status.Pending){
      search.push(Status.Pending)
    } else {
      search.push(Status.Paid)
    }
  })

  try {
    const data = await prisma?.invoice.findMany({
      include: {
        senderAddress:true,
        client: {
          include:{
            clientAddress: true
          }
        },
        item: true
      },
      where:{
        status:{in:[...search]}
      }
    });
    return data

  } catch (error){
    console.error(errorMessage.failedGetInvoices);
  }
 }

 export async function setInvoiceStatusToPaidDB (id:string) {
  noStore ();
  try {
    const updateInvoice =  await prisma?.invoice.update({
      where:{
        id: id
      },
      data: {
        status: Status.Paid
      }
    })
     if(!updateInvoice) { throw new Error(errorMessage.failedChangeStatusToPaid)}
  }
  catch (error) { 
    return { message: errorMessage.failedChangeStatusToPaid};
  }
 }

 export async function deleteInvoiceDB (id:string) {
  noStore ();
  try {
    const deleteInvoice =  await prisma?.invoice.delete({
      where:{
        id: id
      }
    })
     if(!deleteInvoice) {throw new Error(errorMessage.failedDeleteInvoice)}
  }
  catch (error) { 
    return { message: errorMessage.failedDeleteInvoice};
  }
 }

 export async function createInvoiceDB (invoice:Omit<Invoice, "item">, client:Client, invoiceItems:Item[]) {
  noStore ();
  const items = invoiceItems.map((item) =>({name: item.name,quantity: +item.quantity,price: +item.price,total: item.total}))
  try {
    const newClient = await prisma.client.upsert({
      where: {
        clientInfo: {clientEmail: client.clientEmail, clientName: client.clientName}
      },
      update: {
        clientName: client.clientName,
        clientEmail: client.clientEmail,
      },
      create:{
        clientName: client.clientName,
        clientEmail: client.clientEmail,
        clientAddress:{
          connectOrCreate: {
            where:{
              address: {street: client.clientAddress.street, city:client.clientAddress.city, postcode:client.clientAddress.postcode, country: client.clientAddress.country}
            },
            create: {
              street: client.clientAddress.street,
              city: client.clientAddress.city,
              postcode: client.clientAddress.postcode,
              country: client.clientAddress.country,
              }
            }
        }
      }
    })

    if(!newClient) {throw new Error(errorMessage.failedCreateInvoice)}

    const newInvoice = await prisma?.invoice.create({
      data:{
      paymentDue: invoice.paymentDue,
      paymentTerms: invoice.paymentTerms,
      description: invoice.description,
      status:invoice.status,
      total: invoice.total,
      id: invoice.id,
      client: {
        connect:{
            id: newClient.id
        }
      },
      senderAddress:{
        connectOrCreate: {
        where:{
          address: {street: invoice.senderAddress.street, city:invoice.senderAddress.city, postcode:invoice.senderAddress.postcode, country: invoice.senderAddress.country}
        },
        create: {
          street: invoice.senderAddress.street,
          city: invoice.senderAddress.city,
          postcode: invoice.senderAddress.postcode,
          country: invoice.senderAddress.country,
          }
        }
      },
      item: {
      create: [...items]
      }
    }})

     if(!newInvoice) {throw new Error(errorMessage.failedCreateInvoice)}
  }
  catch (error) { 
    return { message: errorMessage.failedCreateInvoice };
  }
 }

 export async function editInvoiceDB (invoice:Omit<Invoice, "item">, client:Client, invoiceItems:Item[]) {
  noStore ();
  try {
    const updateInvoice = await prisma.invoice.update({
      where:{ 
        id: invoice.id
      },
      data:{
        paymentDue: invoice.paymentDue,
        paymentTerms: invoice.paymentTerms,
        description: invoice.description,
        status: invoice.status,
        total: invoice.total,
        client:{
          update:{
            clientName: client.clientName,
            clientEmail: client.clientEmail,
            clientAddress: {
              update:{
                street: client.clientAddress.street,
                city: client.clientAddress.city,
                postcode: client.clientAddress.postcode,
                country: client.clientAddress.country,
              }
            }
          }
        },
        senderAddress:{
          update:{
            street: invoice.senderAddress.street,
            city: invoice.senderAddress.city,
            postcode: invoice.senderAddress.postcode,
            country: invoice.senderAddress.country
          }
        }
      }
    })

    if(!updateInvoice) {throw new Error(errorMessage.failedUpdateInvoice)}
    if(invoiceItems.length > 0){
      const updateInvoiceItems =  await prisma?.item.deleteMany({
        where:{ 
          invoiceId: invoice.id
        }
      })
      
    if(!updateInvoiceItems) {throw new Error(errorMessage.failedUpdateItem)}

    for (let item of invoiceItems) {
        const newItem = await prisma.item.create({
          data: {
            name: item.name,
            quantity: +item.quantity,
            price: +item.price,
            total: +item.total,
            invoiceId: invoice.id
          }
        })
          if(!newItem) {throw new Error(errorMessage.failedCreateItem)}
      }
    }

    return {
      status: "success",
      message: textAndHeaders.changeInvoice,
    }

  } catch (error) {
    return { message: errorMessage.failedUpdateInvoice };
  }
 }

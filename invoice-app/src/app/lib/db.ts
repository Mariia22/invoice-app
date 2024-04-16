import { unstable_noStore as noStore } from "next/cache";
import prisma from "../../../prisma/client";
import { Client, Invoice, Item, Status } from "./types";

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
    console.error('Database Error:', error)
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
    console.error('Database Error:', error)
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
    console.error('Database Error:', error)
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
     if(!updateInvoice) {return {status: "error", error: "The status wasn't changed"}}
  }
  catch (error) { 
    console.error('Database Error:', error)
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
     if(!deleteInvoice) {return {status: "error", error: "The invoice wasn't removed"}}
  }
  catch (error) { 
    console.error('Database Error:', error)
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

    if(!newClient) {return {status: "error", error: "The client and invoice weren't created"}}

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

     if(!newInvoice) {return {status: "error", error: "The invoice wasn't created"}}
  }
  catch (error) { 
    console.error('Database Error:', error)
  }
 }

 export async function editInvoiceDB (invoice:Omit<Invoice, "item"|"status">, client:Client, invoiceItems:Item[]) {
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

    if(!updateInvoice) {return {status: "error", error: "The invoice wasn't updated"}}

    for (let item of invoiceItems) {
      if(item.id){
        const updateItem = await prisma.item.update({
          where: {
            id: item.id
          },
          data: {
            name: item.name,
            quantity: +item.quantity,
            price: +item.price,
            total: +item.total
          }
        })

        if(!updateItem) {return {status: "error", error: "The invoice item wasn't updated"}}

      } else {
        const newItem = await prisma.item.create({
          data: {
            name: item.name,
            quantity: +item.quantity,
            price: +item.price,
            total: +item.total,
            invoiceId: invoice.id
          }
        })

        if(!newItem) {return {status: "error", error: "The invoice item wasn't created"}}
      }
    }

    return {
      status: "success",
      message: "The invoice was changed",
    }

  } catch (error) {
    console.error('Database Error:', error)
  }
 }

import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import prisma from "../../../prisma/client";
import { FormInput, Item, Status } from "./types";

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
     if(!updateInvoice) {return {error: "The status wasn't changed"}}
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
     if(!deleteInvoice) {return {error: "The invoice wasn't removed"}}
  }
  catch (error) { 
    console.error('Database Error:', error)
  }
 }

 export async function createInvoiceDB (id:string, formData:FormInput, items:Item[], total:number, status:Status, paymentData:Date) {
  noStore ();
  // const existingSenderAddress = await prisma.address.findFirst({ 
  //   where: {  
  //     street: formData.senderStreetAddress,
  //     city: formData.senderCity,
  //     postcode: formData.senderPostCode,
  //     country: formData.senderCountry
  //  } 
  // }) 
  try {
    // const clientAddress = await prisma.address.upsert({
    //       where: {
    //         address: {street: formData.clientStreetAddress, city:formData.clientCity,postcode:formData.clientPostCode,country: formData.clientCountry}
    //       },
    //       update:{
    //         street: formData.clientStreetAddress,
    //         city: formData.clientCity,
    //         postcode: formData.clientPostCode,
    //         country: formData.clientCountry
    //       },
    //       create: {
    //         street: formData.clientStreetAddress,
    //         city: formData.clientCity,
    //         postcode: formData.clientPostCode,
    //         country: formData.clientCountry
    //       }
    // })

    const client = await prisma.client.upsert ({
      where: {
        clientEmail: formData.clientEmail
      },
      update: {
        clientName: formData.clientName,
        clientEmail: formData.clientEmail,
      },
      create:{
        clientName: formData.clientName,
        clientEmail: formData.clientEmail,
        clientAddress:{
          connectOrCreate: {
            where:{
              address: {street: formData.clientStreetAddress, city:formData.clientCity,postcode:formData.clientPostCode,country: formData.clientCountry}
            },
            create: {
              street: formData.clientStreetAddress,
              city: formData.clientCity,
              postcode: formData.clientPostCode,
              country: formData.clientCountry,
              }
            }
        }
      }
    })

    if(!client) {return {error: "The client wasn't created"}}

    const newInvoice = await prisma?.invoice.create({
      data:{
      paymentDue: paymentData,
      paymentTerms: formData.paymentTerms,
      description: formData.description,
      status:status,
      total: total,
      id: id,
      client: {
        connect:{
            id: client.id
        }
      },
      senderAddress:{
        connectOrCreate: {
        where:{
          address: {street: formData.senderStreetAddress, city:formData.senderCity,postcode:formData.senderPostCode,country: formData.senderCountry}
        },
        create: {
          street: formData.senderStreetAddress,
          city: formData.senderCity,
          postcode: formData.senderPostCode,
          country: formData.senderCountry,
          }
        }
      },
      item: {
      create: [...items]
      }
    }})

     if(!newInvoice) {return {error: "The invoice wasn't created"}}
  }
  catch (error) { 
    console.error('Database Error:', error)
  }
 }

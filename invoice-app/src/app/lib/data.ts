import { unstable_noStore as noStore } from "next/cache";
import prisma from "../../../prisma/client";
import { Invoice } from "@prisma/client";
import { Status } from "./types";

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
 export async function fetchFilteredInvoices(chosenStatus:Array<Status>): Promise<Invoice[] | undefined>{
  noStore ();
  const search = chosenStatus.map(status => Status[status])
  console.log(search)
  try {
    const data = await prisma?.invoice.findMany({
      where:{
        status:{in:[...search]}
      }
    });
    return data

  } catch (error){
    console.error('Database Error:', error)
  }
 }

import { unstable_noStore as noStore } from "next/cache";
import prisma from "../../../prisma/client";
import { Invoice } from "@prisma/client";
import { Status } from "./types";

export async function getAllInvoices () {
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

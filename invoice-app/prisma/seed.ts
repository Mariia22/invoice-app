import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.invoice.create({
    data: {
      id: "FV2353",
      createdAt: new Date("2021-11-05"),
      paymentDue: new Date("2021-11-12"),
      description: "Logo Re-design",
      paymentTerms: 7,
      client: {
        create: {
          clientName: "Anita Wainwright",
          clientEmail: "",
          clientAddress: {
            create: {
              street: "",
              city: "",
              postcode: "",
              country: ""
            }
          }
        }
      },
      status: "Draft",
      senderAddress: {
        connect: {
          id: 1
        }
      },
      item: {
        create: [
          {
            name: "Logo Re-design",
            quantity: 1,
            price: 3102.04,
            total: 3102.04
          }
        ]
      },
      total: 3102.04
    }
  });
}

main()
  .catch((err) => {
    console.error(
      "An error occurred while attempting to seed the database:",
      err
    );
  })
  .finally(async () => await prisma.$disconnect());

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.invoice.create({
    data: {
      id: "RT3080",
      createdAt: new Date("2021-08-18"),
      paymentDue: new Date("2021-08-19"),
      description: "Re-branding",
      paymentTerms: 1,
      client: {
        create: {
          clientName: "Jensen Huang",
          clientEmail: "jensenh@mail.com"
        }
      },
      status: "Paid",
      senderAddress: {
        create: {
          street: "19 Union Terrace",
          city: "London",
          postcode: "E1 3EZ",
          country: "United Kingdom"
        }
      },
      clientAddress: {
        create: {
          street: "106 Kendell Street",
          city: "Sharrington",
          postcode: "NR24 5WQ",
          country: "United Kingdom"
        }
      },
      item: {
        create: [
          {
            name: "Brand Guidelines",
            quantity: 1,
            price: 1800.9,
            total: 1800.9
          }
        ]
      },
      total: 1800.9
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

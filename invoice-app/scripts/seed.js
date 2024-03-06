import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.invoice.create({});
}

main()
  .catch((err) => {
    console.error(
      "An error occurred while attempting to seed the database:",
      err
    );
  })
  .finally(async () => await prisma.$disconnect());

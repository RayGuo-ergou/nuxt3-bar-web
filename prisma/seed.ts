// import documents.json
import { PrismaClient } from '@prisma/client'
import { documents } from './documents'

const prisma = new PrismaClient()

async function main() {
  for (const document of documents) {
    await prisma.document.create({
      data: document,
    })
  }
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

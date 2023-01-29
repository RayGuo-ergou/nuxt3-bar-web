import * as fs from 'fs'
import * as path from 'path'
import { PrismaClient, DocumentType, document } from '@prisma/client'

// Create a new Prisma Client instance
const prisma = new PrismaClient()

const convertTimeZone = (date: Date): string => {
  return new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
}

/**
 * This function will take a document and generate a markdown file
 * @param {document} doc
 * @returns {string} markdown file
 */
const generateMD = (doc: document): string => {
  //
  const docHeaders = {
    title: doc.title,
    description: doc.description,
    draft: doc.draft,
    navigation: doc.navigation,
    date: doc.updatedAt
      ? convertTimeZone(doc.updatedAt)
      : convertTimeZone(doc.createdAt),
    author: doc.author,
  }

  const docString = JSON.stringify(docHeaders)

  const unquoted = docString
    // remove quotes from keys
    .replace(/"([^"]+)":/g, '$1:')
    // double quotes to single quotes
    .replace(/"/g, "'")
    // add \n after each comma
    .replace(/,/g, '\n')
    // remove curly braces
    .replace(/[{}]/g, '')
    // add one space after each colon
    .replace(/:/g, ': ')

  const result = `---\n${unquoted}\n---\n${doc.content}`
  return result
}

/**
 * This function will take an array of documents and generate a markdown file for each
 * @param {document[]} docs
 * @param {boolean} newDoc @default true
 * @returns {void}
 */
const generateFiles = (docs: document[], newDoc = true) => {
  const filePath = path.join(
    __dirname,
    `../content/events/${newDoc ? 'new' : 'old'}`
  )
  docs.forEach((element) => {
    const temp = generateMD(element)
    fs.writeFile(
      `${filePath}/${element.id}+${element.title}.md`,
      temp,
      (err) => {
        if (err) {
          console.error(err)
        }
      }
    )
  })
}

// const OldDoc = {
//   title: 'Old Doc',
//   description: 'This is an old document',
//   content: '# This is a document \n This is a paragraph',
//   type: DocumentType.OLD,
// }

// const NewDoc = {
//   title: 'New Doc',
//   description: 'This is an new document',
//   content: '# This is a document',
//   type: DocumentType.NEW,
// }

// const add = async () => {
//   await prisma.document.create({
//     data: OldDoc,
//   })
// }
// add()

// get all documents
async function main() {
  // add newdoc and olddoc into db
  // await prisma.document.create({
  //   data: NewDoc,
  // })
  // await prisma.document.create({
  //   data: OldDoc,
  // })

  const allDocs = await prisma.document.findMany()

  // make two array one for old and one for new
  const oldDocs = allDocs.filter((doc) => doc.type === DocumentType.OLD)
  const newDocs = allDocs.filter((doc) => doc.type === DocumentType.NEW)

  // generate files
  generateFiles(oldDocs, false)
  generateFiles(newDocs, true)
}

main()

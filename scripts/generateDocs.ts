import * as fs from 'fs'
import * as path from 'path'
import { PrismaClient, DocumentType, document } from '@prisma/client'

// Create a new Prisma Client instance
const prisma = new PrismaClient()

/**
 * This function will take a document and generate a markdown file
 * @param {document} doc
 * @returns {string} markdown file
 */
const generateMD = (doc: document): string => {
  const { content, ...docHeaders } = doc

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
    // add one space after each colon except for URL scheme
    .replace(/:(?!\/\/)/g, ': ')

  const result = `---\n${unquoted}\n---\n${content}`
  return result
}

/**
 * This function will take an array of documents and generate a markdown file for each
 * @param {document[]} docs
 * @param {string} dir
 * @returns {void}
 */
const generateFiles = (docs: document[], dir: string): void => {
  const filePath = path.join(__dirname, `../content/${dir}`)
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

// get all documents
async function main() {
  const allDocs = await prisma.document.findMany()

  // make two array one for old and one for new
  const oldDocs = allDocs.filter((doc) => doc.type === DocumentType.OLD)
  const newDocs = allDocs.filter((doc) => doc.type === DocumentType.NEW)

  // generate files
  generateFiles(oldDocs, 'events/old')
  generateFiles(newDocs, 'events/new')
}

main()

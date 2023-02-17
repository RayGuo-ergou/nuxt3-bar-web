import { DocumentType } from '@prisma/client'
export const documents = [
  {
    title: 'New Doc',
    description: 'This is an new document',
    draft: false,
    navigation: true,
    content:
      '# This is a document \n abc \n \n def \n ghi \n jkl \n mno \n pqr \n stu \n vwx \n yz \n 123 \n 456 \n 789 \n 0',
    author: 'admin',
    type: DocumentType.NEW,
    thumbnail: 'https://picsum.photos/200/300',
  },
  {
    title: 'Old Doc',
    description: 'This is an old document',
    draft: false,
    navigation: true,
    content: '# This is a document',
    author: 'admin',
    type: DocumentType.OLD,
    thumbnail: 'https://picsum.photos/200/300',
  },
  {
    title: 'New Doc',
    description: 'This is an new document',
    draft: false,
    navigation: true,
    content: '# This is a document',
    author: 'admin',
    type: DocumentType.NEW,
    thumbnail: 'https://picsum.photos/200/300',
  },
  {
    title: 'Old Doc',
    description: 'This is an old document',
    draft: false,
    navigation: true,
    content: '# This is a document',
    author: 'admin',
    type: DocumentType.OLD,
    thumbnail: 'https://picsum.photos/200/300',
  },
]

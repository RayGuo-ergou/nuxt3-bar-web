import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
// list data type
export interface CardInfo extends ParsedContent {
  description: string
  thumbnail: string
  author: string
  date: Date
  externalLink: string
}

export type CardFilter = {
  date: Date
  // TODO: should limit to only the allowed values such as 'melbourne', 'sydney'
  location: string
  // TODO: not sure what type this should be, will ask the team
  type: string
}

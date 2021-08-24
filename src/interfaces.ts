import { SubmissionType, Species, Category, Gender, Rating } from "./Enums"

export interface IAuthor {
  id: string
  name: string
  url: string
  avatar?: string
  shinies?: boolean
  stats?: {
    views: number
    submissions: number
    favs: number

    commentsEarned: number
    commentsMade: number
    journals: number
  }
}

export interface IResult {
  type: SubmissionType
  id: string
  title: string
  url: string
  rating: Rating
  thumb: {
    icon: string
    tiny: string
    small: string
    medium: string
    large: string
  }
  author: IAuthor
  getSubmission(): Promise<ISubmission | null>
}

export interface IPagingResults extends Array<IResult> {
  prevLink?: string
  nextLink?: string
  prev?: () => Promise<IPagingResults>
  next?: () => Promise<IPagingResults>
}

export interface ISubmission {
  id: string
  url: string
  title: string
  posted: number
  rating: Rating
  favLink: string
  author: IAuthor
  content: {
    category: Category
    species: Species
    gender: Gender
  }
  stats: {
    favorites: Number
    comments: Number
    views: Number
  }
  downloadUrl: string
  previewUrl?: string
  keywords: string[]
  fave(): Promise<void>
}

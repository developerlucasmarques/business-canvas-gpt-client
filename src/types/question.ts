import type { Alternative } from './alternative'

export interface Question {
  id: string
  content: string
  alternatives?: Alternative[]
  typeText?: 'text-area' | 'text'
}

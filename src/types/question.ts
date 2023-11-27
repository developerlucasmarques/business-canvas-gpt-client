import type { Alternative } from './alternative'

export interface Question {
  id: string
  content: string
  type: 'text-area' | 'text' | 'select'
  alternatives?: Alternative[]
}

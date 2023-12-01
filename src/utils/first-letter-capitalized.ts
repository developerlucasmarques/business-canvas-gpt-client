import { type ChangeEvent } from 'react'

export const capitalized = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): string => {
  return event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
}

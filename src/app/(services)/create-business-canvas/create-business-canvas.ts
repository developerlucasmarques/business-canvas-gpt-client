import { type CreateBusinessCanvas } from '@/types/api-requests/create-business-canvas'
import { type CreateBusinessCanvasApiResponse } from '@/types/api-responses/create-business-canvas-api-resposne'
import { type ErrorReponse } from '@/types/api-responses/error-response'
import { apiBaseUrl } from '@/utils/env'
import { type CreateBusinessCanvasRes } from './create-business-canvas-response'
import { left, right } from '../shared/either'

export const createBusinessCanvasService = async (accessToken: string, answers: CreateBusinessCanvas[]): Promise<CreateBusinessCanvasRes> => {
  const response = await fetch(`${apiBaseUrl}/business-canvas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    },
    body: JSON.stringify(answers)
  })
  const res: ErrorReponse | CreateBusinessCanvasApiResponse = await response.json()
  if ('error' in res) {
    return left(res)
  }
  return right(res)
}

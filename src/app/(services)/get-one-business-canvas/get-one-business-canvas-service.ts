import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type IBusinessCanvas } from '@/types/business-canvas'
import { apiBaseUrl } from '@/utils/env'
import { left, right } from '../shared/either'
import { type GetOneBusinessCanvasRes } from './get-one-business-canvas-response'

export const getOneBusinessCanvasService = async (accessToken: string, id: string): Promise<GetOneBusinessCanvasRes> => {
  const response = await fetch(`${apiBaseUrl}/business-canvas/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    }
  })
  const res: ErrorReponse | IBusinessCanvas = await response.json()
  if ('error' in res) {
    return left(res)
  }
  return right(res)
}

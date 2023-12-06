import { type BusinessCanvasSummary } from '@/types/api-responses/business-canvas-summary'
import { type ErrorReponse } from '@/types/api-responses/error-response'
import { apiBaseUrl } from '@/utils/env'
import { left, right } from '../shared/either'
import { type GetAllBusinessCanvasRes } from './get-all-business-canvas-response'

export const getAllBusinessCanvasService = async (accessToken: string): Promise<GetAllBusinessCanvasRes> => {
  const response = await fetch(`${apiBaseUrl}/business-canvas`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    }
  })
  const res: ErrorReponse | BusinessCanvasSummary[] = await response.json()
  if ('error' in res) {
    return left(res)
  }
  return right(res)
}

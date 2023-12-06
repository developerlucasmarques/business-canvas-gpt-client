import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type LoginResponse } from '@/types/api-responses/login-response'
import { type AuthData } from '@/types/auth'
import { apiBaseUrl } from '@/utils/env'
import { left, right } from '../shared/either'
import { type AccessRes } from './access-response'

export const accessService = async (authData: AuthData, url: string): Promise<AccessRes> => {
  const response = await fetch(`${apiBaseUrl}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authData)
  })
  const res: ErrorReponse | LoginResponse = await response.json()
  if ('error' in res) {
    return left(res)
  }
  return right(res)
}

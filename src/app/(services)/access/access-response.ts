import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type LoginResponse } from '@/types/api-responses/login-response'
import { type Either } from '../shared/either'

export type AccessRes = Either<ErrorReponse, LoginResponse>

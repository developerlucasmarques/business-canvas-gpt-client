import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type Either } from '../shared/either'
import { type CreateBusinessCanvasApiResponse } from '@/types/api-responses/create-business-canvas-api-resposne'

export type CreateBusinessCanvasRes = Either<ErrorReponse, CreateBusinessCanvasApiResponse>

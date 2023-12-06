import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type IBusinessCanvas } from '@/types/business-canvas'
import { type Either } from '../shared/either'

export type GetOneBusinessCanvasRes = Either<ErrorReponse, IBusinessCanvas>

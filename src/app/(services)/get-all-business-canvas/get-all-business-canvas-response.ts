import { type BusinessCanvasSummary } from '@/types/api-responses/business-canvas-summary'
import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type Either } from '../shared/either'

export type GetAllBusinessCanvasRes = Either<ErrorReponse, BusinessCanvasSummary[]>

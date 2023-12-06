import { type IBusinessCanvas } from '../business-canvas'

export interface CreateBusinessCanvasApiResponse extends IBusinessCanvas {
  userName?: string
  token?: string
}

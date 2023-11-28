import { type IBusinessCanvas } from '../business-canvas'

export interface CreateBusinessCanvasReponse extends IBusinessCanvas {
  userName?: string
  token?: string
}

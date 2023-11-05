//path src/common/repo/apiTypes.ts
import { HttpStatusCode } from './httpStatusCode'

export type ResponseSucess<T> = {
  status: HttpStatusCode
  statusMessage: String
  data: T
}

export type ResponseError = {
  status: HttpStatusCode
  statusMessage: String
}

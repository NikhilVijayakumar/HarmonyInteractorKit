//path src/common/state/appState.ts

import { HttpStatusCode } from '../repo/httpStatusCode'
import { StateType } from './stateType'

export interface AppState<T> {
  state: StateType
  isError: boolean
  isSuccess: boolean
  status: HttpStatusCode
  statusMessage: string
  data: T | undefined
}

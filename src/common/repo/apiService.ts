//path src/common/repo/apiService.ts

import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import ServerResponse from './serverResponse'
import { HttpStatusCode } from './httpStatusCode'
import { ResponseSucess, ResponseError } from './apiTypes'

enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

class ApiService {
  private static instance: ApiService

  private constructor(
    private literal: Record<string, string>,
    private BASE_URL: string,
    private authToken?: string,
  ) {}

  public static getInstance(
    literal: Record<string, string>,
    BASE_URL: string,
    authToken?: string,
  ): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService(literal, BASE_URL, authToken)
    }
    this.instance.authToken = authToken
    return ApiService.instance
  }

  private async request<T>(
    config: AxiosRequestConfig,
  ): Promise<ServerResponse<T>> {
    try {
      if (this.authToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${this.authToken}`,
        }
      }
      const response: AxiosResponse<T> = await axios(config)
      const responseSucess: ResponseSucess<T> = {
        status: response.status,
        statusMessage: response.statusText,
        data: response.data,
      }
      return ServerResponse.success<T>(responseSucess)
    } catch (error) {
      console.log(error)
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error
        const status =
          axiosError.response?.status || HttpStatusCode.INTERNAL_SERVER_ERROR
        const message =
          axiosError.message || this.literal['internal_server_error']
        const responseError: ResponseError = {
          status: status,
          statusMessage: message,
        }
        return ServerResponse.error<T>(responseError)
      } else {
        return ServerResponse.error<T>({
          status: HttpStatusCode.INTERNAL_SERVER_ERROR,
          statusMessage: this.literal['internal_server_error'],
        })
      }
    }
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ServerResponse<T>> {
    return this.request<T>({
      ...config,
      url: `${this.BASE_URL}/${url}`,
      method: HTTPMethod.GET,
    })
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ServerResponse<T>> {
    return this.request<T>({
      ...config,
      url: `${this.BASE_URL}/${url}`,
      method: HTTPMethod.POST,
      data,
    })
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ServerResponse<T>> {
    return this.request<T>({
      ...config,
      url: `${this.BASE_URL}/${url}`,
      method: HTTPMethod.PUT,
      data,
    })
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ServerResponse<T>> {
    return this.request<T>({
      ...config,
      url: `${this.BASE_URL}/${url}`,
      method: HTTPMethod.DELETE,
    })
  }
}

export default ApiService

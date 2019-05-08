import { JSONSchema4 } from 'json-schema'

export type JSONSchema = JSONSchema4

export type httpMethod = 'get' | 'post' | 'delete' | 'put'

export interface IParameter {
  name: string
  in: 'query' | 'body' | 'path'
  description: string
  required: boolean
  type: string
  items?: JSONSchema
  format?: string
}

interface IResponseSchema extends JSONSchema {
  title: string
}

export interface IRequestMethod {
  parameters?: IParameter[]
  summary: string
  operationId?: string
  produces: string[]
  tags: string[]
  responses: {
    200: {
      description: string
      schema: IResponseSchema
    }
    [key: string]: {
      description: string
      schema?: JSONSchema
    }
  }
  security?: any
  deprecated: boolean
}
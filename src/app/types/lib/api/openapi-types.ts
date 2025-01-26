/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/products": {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve a list of products
     * @description Returns a list of products with their details.
     */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description A list of products. */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            "application/json": {
              /** @example Product Item 1 */
              productName?: string
              /** @example 500 */
              price?: number
              /** @example PRD001 */
              productCode?: string
              /** @example A reliable product for everyday use. */
              caption?: string
            }[]
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: never
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export type operations = Record<string, never>

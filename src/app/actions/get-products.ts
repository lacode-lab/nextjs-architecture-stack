"use server"
// Mockデータを返すgetProducts関数
//Get Methodはlibのapiの下に移動予定
import type { paths } from "@/types/lib/api/openapi-types"

import { gql } from "@apollo/client"
import client from "@/lib/apollo-client"

// 環境変数でモックモードを制御
const isMockMode = process.env.NEXT_PUBLIC_MOCK_MODE === "true"
const mockProducts: GetProductsResponse = [
  {
    productName: "Product Item 1",
    price: 500,
    productCode: "PRD001",
    caption: "A reliable product for everyday use.",
  },
  {
    productName: "Product Item 2",
    price: 750,
    productCode: "PRD002",
    caption: "This product combines quality and value.",
  },
  {
    productName: "Product Item 3",
    price: 1200,
    productCode: "PRD003",
    caption: "Premium product with excellent reviews.",
  },
  {
    productName: "Product Item 4",
    price: 300,
    productCode: "PRD004",
    caption: "Affordable product for everyone.",
  },
]

// GraphQL クエリの定義
const GET_PRODUCTS_QUERY = gql`
  query {
    getAllProducts {
      productName
      price
      productCode
      caption
    }
  }
`

type GetProductsResponse =
  paths["/products"]["get"]["responses"]["200"]["content"]["application/json"]

export async function getProducts(): Promise<GetProductsResponse> {
  if (isMockMode) {
    // モックモードの場合はモックデータを返す
    console.log("Mock mode enabled: Returning mock products.")
    return mockProducts
  }

  try {
    console.log("Sending GraphQL request...")
    const { data } = await client.query({
      query: GET_PRODUCTS_QUERY,
      fetchPolicy: "no-cache",
    })
    if (!data) {
      throw new Error("No data returned from GraphQL query")
    }
    return data.getAllProducts
  } catch (error) {
    console.error("GraphQL query error:", error)
    return []
  }
}

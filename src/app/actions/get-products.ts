// Mockデータを返すgetProducts関数
//Get Methodはlibのapiの下に移動予定
import type { paths } from "@/types/lib/api/openapi-types"

// レスポンス型を取得
type GetProductsResponse =
  paths["/products"]["get"]["responses"]["200"]["content"]["application/json"]

export async function getProducts(): Promise<GetProductsResponse> {
  // const response = await fetch(`https://api.example.com/data`);
  // return await response.json();
  // モックデータ

  const mockData: GetProductsResponse = [
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

  // 非同期関数としてモックデータを返す
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500) // 遅延を追加（500ms）
  })
}

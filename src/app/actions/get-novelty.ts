// Mockデータを返すgetNovelties関数

import type { paths } from "@/types/lib/api/openapi-types"

// レスポンス型を取得
type GetNoveltyResponse =
  paths["/novelties"]["get"]["responses"]["200"]["content"]["application/json"]

export async function getNovelties() {
  // モックデータ
  const mockData: GetNoveltyResponse = [
    {
      productName: "Novelty Item 1",
      price: 1000,
      productCode: "NOV001",
      caption: "A great novelty item for your collection.",
    },
    {
      productName: "Novelty Item 2",
      price: 2000,
      productCode: "NOV002",
      caption: "This novelty item is perfect for gift giving.",
    },
    {
      productName: "Novelty Item 3",
      price: 1500,
      productCode: "NOV003",
      caption: "Limited edition novelty item, get yours today!",
    },
    {
      productName: "Novelty Item 4",
      price: 2500,
      productCode: "NOV004",
      caption: "Exclusive novelty item with premium quality.",
    },
  ]

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500)
  })
}

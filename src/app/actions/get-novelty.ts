// Mockデータを返すgetNovelties関数
export async function getNovelties() {
  // モックデータ
  const mockData = [
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

  // 非同期関数としてモックデータを返す
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500) // 遅延を追加（500ms）
  })
}

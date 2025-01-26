import { getNovelties } from "@/actions/get-novelty"
import { getProducts } from "@/actions/get-products"

export async function fetchTabData(tabId: string) {
  switch (tabId) {
    case "tab1":
      return await getProducts()
    case "tab2":
      return await getNovelties()
    default:
      throw new Error(`No fetch function defined for tabId: ${tabId}`)
  }
}

// 下記のように変更した。
//   tabData: Record<string, any>のanyをなくした方が良いと思っている。
// tabは２つなのですが可能？
// 現状は同じものを設定しているが、demoで設定しただけで、ここからは全く違うものを返す想定です。
// getProducts、getNoveltiesの戻り値の型を先に定義した方がわかりやすいです？

// ```
// import { getNovelties } from "@/actions/get-novelty"
// import { getProducts } from "@/actions/get-products"

// export async function fetchTabData(tabId: string) {
//   switch (tabId) {
//     case "tab1":
//       return await getProducts()
//     case "tab2":
//       return await getNovelties()
//     default:
//       throw new Error(`No fetch function defined for tabId: ${tabId}`)
//   }
// }
// "use client"
// import React, { createContext, useContext, useState, ReactNode } from "react"

// interface TabDataContextProps {
//   activeTab: string
//   tabData: Record<string, any>
//   setActiveTab: (tab: string) => void
//   setTabData: (tabId: string, data: any) => void
// }

// // Contextを作成
// const TabDataContext = createContext<TabDataContextProps | null>(null)

// // カスタムフック
// export const useTabData = () => {
//   const context = useContext(TabDataContext)
//   if (!context) {
//     throw new Error("useTabData must be used within TabDataProvider")
//   }
//   return context
// }

// // Providerコンポーネント
// export const TabDataProvider = ({
//   children,
//   initialData,
// }: {
//   children: ReactNode
//   initialData: Record<string, any>
// }) => {
//   const [activeTab, setActiveTab] = useState("tab1")
//   const [tabData, setTabDataState] = useState<Record<string, any>>(initialData)

//   const setTabData = (tabId: string, data: any) => {
//     setTabDataState((prev) => ({ ...prev, [tabId]: data }))
//   }

//   return (
//     <TabDataContext.Provider
//       value={{ activeTab, tabData, setActiveTab, setTabData }}
//     >
//       {children}
//     </TabDataContext.Provider>
//   )
// }

// "use client"
// import React, { SyntheticEvent, useState } from "react"
// import { Tabs, Tab, Box } from "@mui/material"
// import { useTabData } from "./tab-data-provider"
// import { ProductListTab } from "./product-list-tab"
// import { NoveltyListTab } from "./novelty-list-tab"

// import { fetchTabData } from "@/actions/fetch-tab-data"

// export const TabComponent = () => {
//   const { activeTab, tabData, setActiveTab, setTabData } = useTabData()

//   const handleTabChange = async (event: SyntheticEvent, tabId: string) => {
//     if (!tabData[tabId]) {
//       const data = await fetchTabData(tabId) // サーバーからデータ取得
//       setTabData(tabId, data)
//     }

//     setActiveTab(tabId) // アクティブなタブを変更
//   }
//   return (
//     <Box>
//       {/* タブの見た目 */}
//       <Tabs
//         value={activeTab}
//         onChange={handleTabChange}
//         aria-label="Tab example"
//         centered
//       >
//         <Tab label="Tab 1" value="tab1" />
//         <Tab label="Tab 2" value="tab2" />
//       </Tabs>

//       {/* タブのコンテンツ */}
//       <Box sx={{ mt: 2 }}>
//         {activeTab === "tab1" && <ProductListTab data={tabData["tab1"]} />}
//         {activeTab === "tab2" && <NoveltyListTab data={tabData["tab2"]} />}
//       </Box>
//     </Box>
//   )
// }

// const TabContent = ({ data }: { data: any }) => (
//   <Box>{JSON.stringify(data)}</Box>
// )

// // Mockデータを返すgetNovelties関数
// export async function getNovelties() {
//   // モックデータ
//   const mockData2 = [
//     {
//       productName: "Novelty Item 1",
//       price: 1000,
//       productCode: "NOV001",
//       caption: "A great novelty item for your collection.",
//     },
//     {
//       productName: "Novelty Item 2",
//       price: 2000,
//       productCode: "NOV002",
//       caption: "This novelty item is perfect for gift giving.",
//     },
//     {
//       productName: "Novelty Item 3",
//       price: 1500,
//       productCode: "NOV003",
//       caption: "Limited edition novelty item, get yours today!",
//     },
//     {
//       productName: "Novelty Item 4",
//       price: 2500,
//       productCode: "NOV004",
//       caption: "Exclusive novelty item with premium quality.",
//     },
//   ]

//   // 非同期関数としてモックデータを返す
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(mockData2), 500) // 遅延を追加（500ms）
//   })
// }
// ```

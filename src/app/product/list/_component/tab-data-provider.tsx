"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"
import type { paths } from "@/types/lib/api/openapi-types"
import { TabId } from "@/product/list/types/tab-id"
type GetProductsResponse =
  paths["/products"]["get"]["responses"]["200"]["content"]["application/json"]
type GetNoveltyResponse =
  paths["/novelties"]["get"]["responses"]["200"]["content"]["application/json"]

interface TabDataContextProps {
  activeTab: TabId
  product: GetProductsResponse
  novelty: GetNoveltyResponse
  setActiveTab: (tab: TabId) => void
  setProduct: (data: GetProductsResponse) => void
  setNovelty: (data: GetNoveltyResponse) => void
}

const TabDataContext = createContext<TabDataContextProps | null>(null)

export const useTabData = () => {
  const context = useContext(TabDataContext)
  if (!context) {
    throw new Error("useTabData must be used within TabDataProvider")
  }
  return context
}

export const TabDataProvider = ({
  children,
  initialProduct,
  initialNovelty,
}: {
  children: ReactNode
  initialProduct: GetProductsResponse
  initialNovelty: GetNoveltyResponse
}) => {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.Product)
  const [product, setProduct] = useState(initialProduct)
  const [novelty, setNovelty] = useState(initialNovelty)

  return (
    <TabDataContext.Provider
      value={{
        activeTab,
        product,
        novelty,
        setActiveTab,
        setProduct,
        setNovelty,
      }}
    >
      {children}
    </TabDataContext.Provider>
  )
}

"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"
import type { paths } from "@/types/lib/api/openapi-types"

type GetProductsResponse =
  paths["/products"]["get"]["responses"]["200"]["content"]["application/json"]
type GetNoveltyResponse =
  paths["/novelties"]["get"]["responses"]["200"]["content"]["application/json"]

interface TabDataContextProps {
  activeTab: "tab1" | "tab2"
  product: GetProductsResponse
  novelty: GetNoveltyResponse
  setActiveTab: (tab: "tab1" | "tab2") => void
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
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1")
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

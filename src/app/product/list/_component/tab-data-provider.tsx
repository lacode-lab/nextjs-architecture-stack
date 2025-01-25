"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"

interface TabDataContextProps {
  activeTab: string
  tabData: Record<string, any>
  setActiveTab: (tab: string) => void
  setTabData: (tabId: string, data: any) => void
}

// Contextを作成
const TabDataContext = createContext<TabDataContextProps | null>(null)

// カスタムフック
export const useTabData = () => {
  const context = useContext(TabDataContext)
  if (!context) {
    throw new Error("useTabData must be used within TabDataProvider")
  }
  return context
}

// Providerコンポーネント
export const TabDataProvider = ({
  children,
  initialData,
}: {
  children: ReactNode
  initialData: Record<string, any>
}) => {
  const [activeTab, setActiveTab] = useState("tab1")
  const [tabData, setTabDataState] = useState<Record<string, any>>(initialData)

  const setTabData = (tabId: string, data: any) => {
    setTabDataState((prev) => ({ ...prev, [tabId]: data }))
  }

  return (
    <TabDataContext.Provider
      value={{ activeTab, tabData, setActiveTab, setTabData }}
    >
      {children}
    </TabDataContext.Provider>
  )
}

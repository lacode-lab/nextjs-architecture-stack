"use client"

import React from "react"
import { useTabData } from "./tab-data-provider"
import { fetchTabData } from "@/actions/fetch-tab-data"

export const TabComponent = () => {
  const { activeTab, tabData, setActiveTab, setTabData } = useTabData()

  const handleTabChange = async (tabId: string) => {
    if (!tabData[tabId]) {
      const data = await fetchTabData(tabId) // Server Actionsを呼び出し
      setTabData(tabId, data)
    }
    setActiveTab(tabId)
  }

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange("tab1")}>Tab 1</button>
        <button onClick={() => handleTabChange("tab2")}>Tab 2</button>
      </div>
      <div>
        {activeTab === "tab1" && <TabContent data={tabData["tab1"]} />}
        {activeTab === "tab2" && <TabContent data={tabData["tab2"]} />}
      </div>
    </div>
  )
}

const TabContent = ({ data }: { data: any }) => (
  <div>{JSON.stringify(data)}</div>
)

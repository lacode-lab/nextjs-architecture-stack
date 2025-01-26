"use client"
import React, { SyntheticEvent, useState } from "react"
import { Tabs, Tab, Box } from "@mui/material"
import { useTabData } from "./tab-data-provider"
import { ProductListTab } from "./product-list-tab"
import { NoveltyListTab } from "./novelty-list-tab"

import { fetchTabData } from "@/actions/fetch-tab-data"

export const TabComponent = () => {
  const { activeTab, tabData, setActiveTab, setTabData } = useTabData()

  const handleTabChange = async (event: SyntheticEvent, tabId: string) => {
    if (!tabData[tabId]) {
      const data = await fetchTabData(tabId) // サーバーからデータ取得
      setTabData(tabId, data)
    }

    setActiveTab(tabId) // アクティブなタブを変更
  }
  return (
    <Box>
      {/* タブの見た目 */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="Tab example"
        centered
      >
        <Tab label="Tab 1" value="tab1" />
        <Tab label="Tab 2" value="tab2" />
      </Tabs>

      {/* タブのコンテンツ */}
      <Box sx={{ mt: 2 }}>
        {activeTab === "tab1" && <ProductListTab data={tabData["tab1"]} />}
        {activeTab === "tab2" && <NoveltyListTab data={tabData["tab2"]} />}
      </Box>
    </Box>
  )
}

const TabContent = ({ data }: { data: any }) => (
  <Box>{JSON.stringify(data)}</Box>
)

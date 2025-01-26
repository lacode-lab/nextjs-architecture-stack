"use client"
import React, { SyntheticEvent } from "react"
import { Tabs, Tab, Box } from "@mui/material"
import { useTabData } from "./tab-data-provider"
import { ProductListTab } from "./product-list-tab"
import { NoveltyListTab } from "./novelty-list-tab"
import { getNovelties } from "@/actions/get-novelty"
import { getProducts } from "@/actions/get-products"

export const TabComponent = () => {
  const { activeTab, setActiveTab, product, novelty, setProduct, setNovelty } =
    useTabData()

  const handleTabChange = async (
    event: SyntheticEvent,
    tabId: "tab1" | "tab2",
  ) => {
    if (tabId === "tab1" && !product) {
      const products = await getProducts()
      setProduct(products)
    } else if (tabId === "tab2" && !novelty) {
      const novelties = await getNovelties()
      setNovelty(novelties)
    }

    setActiveTab(tabId)
  }

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="Tab example"
        centered
      >
        <Tab label="Tab 1" value="tab1" />
        <Tab label="Tab 2" value="tab2" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {activeTab === "tab1" && <ProductListTab data={product} />}
        {activeTab === "tab2" && <NoveltyListTab data={novelty} />}
      </Box>
    </Box>
  )
}

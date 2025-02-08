"use client"
import React, { SyntheticEvent } from "react"
import { Tabs, Tab, Box } from "@mui/material"
import { TabContext, TabPanel } from "@mui/lab"
import { useTabData } from "./tab-data-provider"
import { ProductListTab } from "./product-list-tab"
import { NoveltyListTab } from "./novelty-list-tab"
import { getNovelties } from "@/actions/get-novelty"
import { getProducts } from "@/actions/get-products"
import { TabId } from "@/product/list/types/tab-id"

export const TabComponent = () => {
  const { activeTab, setActiveTab, product, novelty, setProduct, setNovelty } =
    useTabData()

  const handleTabChange = async (_: SyntheticEvent, tabId: TabId) => {
    if (tabId === TabId.Product) {
      const products = await getProducts()
      setProduct(products)
    } else if (tabId === TabId.Novelty) {
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
        <Tab label="Product" value={TabId.Product} />
        <Tab label="Novelty" value={TabId.Novelty} />
      </Tabs>
      <TabContext value={activeTab}>
        <TabPanel value={TabId.Product}>
          <ProductListTab data={product} />
        </TabPanel>
        <TabPanel value={TabId.Novelty}>
          <NoveltyListTab data={novelty} />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

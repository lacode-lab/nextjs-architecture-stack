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

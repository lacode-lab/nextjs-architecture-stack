import { TabDataProvider } from "./_component/tab-data-provider"
import { TabComponent } from "./_component/tab-component"
import { getNovelties } from "@/actions/get-novelty"
import { getProducts } from "@/actions/get-products"

export default async function Page() {
  const initialProduct = await getProducts()
  const initialNovelty = await getNovelties()

  return (
    <TabDataProvider
      initialProduct={initialProduct}
      initialNovelty={initialNovelty}
    >
      <TabComponent />
    </TabDataProvider>
  )
}

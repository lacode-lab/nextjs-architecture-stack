import { TabDataProvider } from "./_component/tab-data-provider"
import { TabComponent } from "./_component/tab-component"
import { getNovelties } from "@/actions/get-novelty"
import { getProducts } from "@/actions/get-products"

export default async function Page() {
  // 初期表示時に両方のタブのデータを取得
  const initialDataTab1 = await getProducts()
  const initialDataTab2 = await getNovelties()

  return (
    <TabDataProvider
      initialData={{ tab1: initialDataTab1, tab2: initialDataTab2 }}
    >
      <TabComponent />
    </TabDataProvider>
  )
}

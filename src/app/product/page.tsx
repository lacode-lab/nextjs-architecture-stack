import { ProductForm } from "@/product/_component/product-form"
import { getMockData } from "@/actions/product-action"

export default async function Product() {
  const response = await getMockData()
  const { data, errors } = await response.json()
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>＜Product Form＞</h1>
      <br />
      <ProductForm mockData={data} severErrors={errors} />
    </div>
  )
}

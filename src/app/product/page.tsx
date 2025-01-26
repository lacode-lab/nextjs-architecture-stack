import { ProductForm } from "@/product/_component/product-form"
import { getMockData } from "@/actions/product-action"

function formatErrors(errors: any[]): Record<string, string> {
  const formattedErrors: Record<string, string> = {}
  errors.forEach((error) => {
    const field = error.path[0] // エラーのフィールド名
    if (field) {
      formattedErrors[field] = error.message // エラーメッセージを対応するフィールドに割り当て
    }
  })
  return formattedErrors
}

export default async function Product() {
  const response = await getMockData()
  const { data, errors } = await response.json()

  // エラーをオブジェクト形式に変換
  const formattedErrors = errors ? formatErrors(errors) : null

  console.log(formattedErrors)
  return (
    //一旦商品の例だけ、項目の下に出すことも可能。
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      {formattedErrors?.productCode && (
        <p style={{ color: "red" }}>{formattedErrors.productCode}</p>
      )}
      <h1>商品情報</h1>
      <br />
      <ProductForm mockData={data} />
    </div>
  )
}

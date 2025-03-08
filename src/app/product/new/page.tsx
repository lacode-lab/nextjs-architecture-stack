import { ProductForm } from "@/product/new/_component/product-form"
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

  const defaultValues = data
    ? {
        tabType: data.tabs?.tabType ?? "typeA", // ← ここを追加
        productCode: data.productCode,
        productName: data.productName,
        caption: data.caption,
        detail: {
          category: data.detail.category,
          weight: data.detail.weight,
          size: data.detail.size,
          color: data.detail.color,
        },
        inventory: {
          stock: data.inventory.stock,
          minStock: data.inventory.minStock,
          maxPurchase: data.inventory.maxPurchase,
        },
        tabs: {
          tabType: data.tabs?.tabType ?? "typeA",
          specialCode: data.tabs?.specialCode ?? "", // 初期値を設定
          janCode: data.tabs?.janCode ?? "", // typeB の場合
        },
      }
    : {
        tabType: "typeA", // 初期値として必ず設定
        productCode: "",
        productName: "",
        caption: "",
        detail: {
          category: "",
          weight: "",
          size: "",
          color: "",
        },
        inventory: {
          stock: 0,
          minStock: 0,
          maxPurchase: 0,
        },
        tabs: {
          tabType: "typeA",
          specialCode: "", // 初期値
          janCode: "", // 初期値
        },
      }

  return (
    //一旦商品の例だけ、項目の下に出すことも可能。
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      {formattedErrors?.productCode && (
        <p style={{ color: "red" }}>{formattedErrors.productCode}</p>
      )}
      <h1>商品情報</h1>
      <br />
      <ProductForm defaultValues={defaultValues} />
    </div>
  )
}

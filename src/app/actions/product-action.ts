import { productSchema } from "@/product/types/product-scheme"
import { ZodError } from "zod"

export async function getMockData() {
  try {
    const mockdata = {
      productCode: "",
      productName: "dummy product",
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
        maxPurchase: 1,
      },
      tabs: {
        tabType: "typeA",
        specialCode: "",
      },
    }

    // zodスキーマでデータを検証
    const data = productSchema.parse(mockdata)

    return new Response(
      JSON.stringify({
        data: data,
        errors: null,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  } catch (error) {
    console.log("sever error:", error)
    if (error instanceof ZodError) {
      // エラー時の状態を返す
      return new Response(
        JSON.stringify({
          data: null,
          errors: error.issues,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      )
    }
    return new Response(
      JSON.stringify({
        data: null,
        errors: null,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}

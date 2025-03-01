import * as z from "zod"
import { isProductCode, toProductCode } from "@/types/product-code"
import { productDetailSchema } from "./product-detail-scheme"
import { inventorySchema } from "./inventory-schema"

export const productSchema = z.object({
  productCode: z
    .string()
    .min(1, "商品コードは必須項目です")
    .refine(isProductCode, {
      message: "商品コードが不正だよ",
    })
    .transform(toProductCode),
  productName: z.string().nullish(),
  caption: z.string().nullish(),
  detail: productDetailSchema,
  inventory: inventorySchema,
})

export type ProductSchemaForm = z.infer<typeof productSchema>

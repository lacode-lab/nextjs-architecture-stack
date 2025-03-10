import * as z from "zod"
import { isProductCode, toProductCode } from "@/types/product-code"
import { productDetailSchema } from "./product-detail-scheme"
import { inventorySchema } from "./inventory-schema"
import { typeASchema } from "./type-a-schema"
import { typeBSchema } from "./type-b-schema"

export const tabSchema = z.discriminatedUnion("tabType", [
  typeASchema,
  typeBSchema,
])

export const productSchema = z.object({
  tabType: z.enum(["typeA", "typeB"]),
  productCode: z.string().min(1, "商品コードは必須項目です"),
  // .refine(isProductCode, {
  //   message: "商品コードが不正だよ",
  // })
  // .transform(toProductCode),
  productName: z.string().nullish(),
  caption: z.string().nullish(),
  detail: productDetailSchema,
  inventory: inventorySchema,
  selectedItems: z.array(z.string()),
  tabs: tabSchema,
})

export type ProductSchemaForm = z.infer<typeof productSchema>

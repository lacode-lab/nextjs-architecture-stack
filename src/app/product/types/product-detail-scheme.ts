import * as z from "zod"

export const productDetailSchema = z.object({
  category: z.string().min(1, "カテゴリは必須項目です"),
  weight: z
    .string()
    .regex(/^\d+(\.\d+)?$/, "重さは数値で入力してください")
    .nullish(),
  size: z.string().nullish(),
  color: z.string().nullish(),
})

export type ProductDetailSchemaForm = z.infer<typeof productDetailSchema>

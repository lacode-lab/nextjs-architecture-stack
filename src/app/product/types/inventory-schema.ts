import * as z from "zod"

export const inventorySchema = z.object({
  stock: z.coerce
    .number()
    .int()
    .min(0, "在庫数は0以上で入力してください")
    .default(0),
  minStock: z.coerce
    .number()
    .int()
    .min(0, "最低在庫数は0以上で入力してください")
    .default(0),
  maxPurchase: z.coerce
    .number()
    .int()
    .min(1, "最大購入可能数は1以上で入力してください")
    .default(1),
})

export type InventorySchemaForm = z.infer<typeof inventorySchema>

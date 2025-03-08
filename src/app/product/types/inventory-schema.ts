import * as z from "zod"

export const inventorySchema = z.object({
  stock: z.number().int().min(0, "在庫数は0以上で入力してください").default(0),
  minStock: z
    .number()
    .int()
    .min(0, "最低在庫数は0以上で入力してください")
    .default(0),
  maxPurchase: z
    .number()
    .int()
    .min(1, "最大購入可能数は1以上で入力してください")
    .default(1),
})

export type InventorySchemaForm = z.infer<typeof inventorySchema>

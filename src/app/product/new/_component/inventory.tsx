import { TextField } from "@mui/material"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import * as z from "zod"
import { productSchema } from "@/product/types/product-scheme"
import { inventorySchema } from "../../types/inventory-schema"

type StockProps = {
  register: UseFormRegister<z.infer<typeof productSchema>>
  errors: FieldErrors<z.infer<typeof productSchema>>
}

export const StockDetail = ({ register, errors }: StockProps) => {
  return (
    <>
      {/* 在庫数 */}
      <TextField
        fullWidth
        label="在庫数"
        type="number"
        {...register("inventory.stock")}
        error={!!errors.inventory?.stock}
        helperText={errors.inventory?.stock?.message}
        margin="normal"
      />

      {/* 最低在庫数（アラート用） */}
      <TextField
        fullWidth
        label="最低在庫数（アラート）"
        type="number"
        {...register("inventory.minStock")}
        error={!!errors.inventory?.minStock}
        helperText={errors.inventory?.minStock?.message}
        margin="normal"
      />

      {/* 最大購入可能数 */}
      <TextField
        fullWidth
        label="最大購入可能数"
        type="number"
        {...register("inventory.maxPurchase")}
        error={!!errors.inventory?.maxPurchase}
        helperText={errors.inventory?.maxPurchase?.message}
        margin="normal"
      />
    </>
  )
}

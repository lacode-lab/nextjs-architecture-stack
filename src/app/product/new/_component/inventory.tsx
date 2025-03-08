import { TextField } from "@mui/material"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import * as z from "zod"
import { productSchema } from "@/product/types/product-scheme"
import { inventorySchema } from "../../types/inventory-schema"

type StockProps = {
  register: UseFormRegister<z.infer<typeof inventorySchema>>
  errors: FieldErrors<z.infer<typeof inventorySchema>>
}

export const StockDetail = ({ register, errors }: StockProps) => {
  return (
    <>
      {/* 在庫数 */}
      <TextField
        fullWidth
        label="在庫数"
        type="number"
        {...register("stock")}
        error={!!errors.stock}
        helperText={errors.stock?.message}
        margin="normal"
      />

      {/* 最低在庫数（アラート用） */}
      <TextField
        fullWidth
        label="最低在庫数（アラート）"
        type="number"
        {...register("minStock")}
        error={!!errors.minStock}
        helperText={errors.minStock?.message}
        margin="normal"
      />

      {/* 最大購入可能数 */}
      <TextField
        fullWidth
        label="最大購入可能数"
        type="number"
        {...register("maxPurchase")}
        error={!!errors.maxPurchase}
        helperText={errors.maxPurchase?.message}
        margin="normal"
      />
    </>
  )
}

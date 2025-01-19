import { ProductUseFormData } from "@/product/types/product-scheme"

export type State = {
  state: "success" | "error"
  message: string
  data: ProductUseFormData | null
} | null

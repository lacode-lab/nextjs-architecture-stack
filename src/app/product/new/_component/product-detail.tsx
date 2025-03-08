import { UseFormRegister, FieldErrors } from "react-hook-form"
import * as z from "zod"
import { productSchema } from "@/product/types/product-scheme"

type ProductDetailProps = {
  register: UseFormRegister<z.infer<typeof productSchema>>
  errors: FieldErrors<z.infer<typeof productSchema>>
}

export const ProductDetail = ({ register, errors }: ProductDetailProps) => {
  return (
    <>
      {/* Category */}
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="category"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Category:
        </label>
        <input
          type="text"
          id="category"
          {...register("detail.category")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.detail?.category && (
          <p style={{ color: "red" }}>{errors.detail.category.message}</p>
        )}
      </div>

      {/* Weight */}
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="weight"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Weight (kg):
        </label>
        <input
          type="text"
          id="weight"
          {...register("detail.weight")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.detail?.weight && (
          <p style={{ color: "red" }}>{errors.detail.weight.message}</p>
        )}
      </div>

      {/* Size */}
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="size" style={{ display: "block", marginBottom: "5px" }}>
          Size:
        </label>
        <input
          type="text"
          id="size"
          {...register("detail.size")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Color */}
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="color"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Color:
        </label>
        <input
          type="text"
          id="color"
          {...register("detail.color")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
    </>
  )
}

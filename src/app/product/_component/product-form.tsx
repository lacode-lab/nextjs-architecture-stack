"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ProductDetail } from "@/product/_component/product-detail"
import {
  ProductUseFormData,
  productSchema,
} from "@/product/types/product-scheme"
import { ZodError } from "zod"
interface ProductFormProps {
  mockData: ProductUseFormData
  severErrors: ZodError<ProductUseFormData> | null // エラー情報
}

export const ProductForm: React.FC<ProductFormProps> = ({
  mockData,
  severErrors,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductUseFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: mockData, // サーバーから渡されたデフォルトデータを適用
  })

  const onSubmit = (data: ProductUseFormData) => {
    console.log("Submitted data:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="productCode"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Product Code:
        </label>
        <input
          type="text"
          id="productCode"
          {...register("productCode")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.productCode && (
          <p style={{ color: "red" }}>{errors.productCode.message}</p>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="productName"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Product Name:
        </label>
        <input
          type="text"
          id="productName"
          {...register("productName")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="caption"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Caption:
        </label>
        <textarea
          id="caption"
          {...register("caption")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            resize: "vertical",
          }}
        ></textarea>
      </div>

      <ProductDetail register={register} errors={errors} />

      <button
        type="submit"
        style={{
          backgroundColor: "#0070f3",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  )
}

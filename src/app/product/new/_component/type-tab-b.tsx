import React from "react"
import { Controller, Control, FieldErrors } from "react-hook-form"
import { ProductSchemaForm } from "@/product/types/product-scheme"

interface TypeBTabProps {
  control: Control<ProductSchemaForm>
  errors: FieldErrors<ProductSchemaForm>
}

export const TypeBTab: React.FC<TypeBTabProps> = ({ control, errors }) => {
  return (
    <div>
      <label htmlFor="janCode">Jan Code:</label>
      <Controller
        name="tabs.janCode"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            id="janCode"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        )}
      />
      {errors.tabs?.janCode?.message && (
        <p style={{ color: "red" }}>{errors.tabs.janCode.message}</p>
      )}
    </div>
  )
}

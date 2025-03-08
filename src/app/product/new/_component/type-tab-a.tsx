import React from "react"
import { Controller, Control, FieldErrors } from "react-hook-form"
import { ProductSchemaForm } from "@/product/types/product-scheme"

interface TypeATabProps {
  control: Control<ProductSchemaForm>
  errors: FieldErrors<ProductSchemaForm>
}

export const TypeATab: React.FC<TypeATabProps> = ({ control, errors }) => {

  return (
    <div>
      <label htmlFor="specialCode">Special Code:</label>
      <Controller
        name="tabs.specialCode"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            id="specialCode"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        )}
      />
      {errors.tabs &&
        typeof errors.tabs === "object" &&
        "specialCode" in errors.tabs &&
        (errors.tabs.specialCode as { message?: string })?.message && (
          <p style={{ color: "red" }}>
            {(errors.tabs.specialCode as { message: string }).message}
          </p>
        )}
    </div>
  )
}

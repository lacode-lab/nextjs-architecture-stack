"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,FieldErrors } from "react-hook-form"
import { useState } from "react"
import { ProductDetail } from "@/product/new/_component/product-detail"
import { StockDetail } from "@/product/new/_component/inventory"
import {
  ProductSchemaForm,
  productSchema,
} from "@/product/types/product-scheme"
import { Tabs, Tab, Box } from "@mui/material"
import { TabContext, TabPanel } from "@mui/lab"

interface ProductFormProps {
  defaultValues: ProductSchemaForm
}

export const ProductForm: React.FC<ProductFormProps> = ({ defaultValues }) => {
  const [tabValue, setTabValue] = useState<"typeA" | "typeB">("typeA")

  const {
    control,
    setValue,
    clearErrors,
    resetField,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductSchemaForm>({
    resolver: zodResolver(productSchema),
    defaultValues: defaultValues,
  })

  const handleTabChange = (
    _: React.SyntheticEvent,
    newValue: "typeA" | "typeB",
  ) => {
    setTabValue(newValue)
    setValue("tabType", newValue)

    // `tabs` のエラーをクリアしつつ、値もクリア
    clearErrors("tabs")
    resetField("tabs", {
      defaultValue:
        newValue === "typeA"
          ? { tabType: "typeA", specialCode: "" }
          : { tabType: "typeB", janCode: "" },
    })
  }

  const onSubmit = (data: ProductSchemaForm) => {
    console.log("Submitted data:", data)
  }

  const onError = (errors: FieldErrors<ProductSchemaForm>) => {
    console.log("Form errors:", errors)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
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
      <StockDetail register={register} errors={errors} />

      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={(event, newValue) =>
              handleTabChange(event, newValue as "typeA" | "typeB")
            }
          >
            <Tab label="Type A" value="typeA" />
            <Tab label="Type B" value="typeB" />
          </Tabs>
        </Box>
        <TabPanel value="typeA">
          <label htmlFor="specialCode">Special Code:</label>
          <input
            type="text"
            id="specialCode"
            {...register("tabs.specialCode")}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.tabs &&
            typeof errors.tabs === "object" &&
            "specialCode" in errors.tabs && (
              <p style={{ color: "red" }}>
                {(errors.tabs as any).specialCode.message}
              </p>
            )}
        </TabPanel>
        <TabPanel value="typeB">
          <label htmlFor="janCode">Jan Code:</label>
          <input
            type="text"
            id="janCode"
            {...register("tabs.janCode")}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.tabs &&
            typeof errors.tabs === "object" &&
            "janCode" in errors.tabs && (
              <p style={{ color: "red" }}>
                {(errors.tabs as any).janCode.message}
              </p>
            )}
        </TabPanel>
      </TabContext>

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
        {" "}
        Submit
      </button>
    </form>
  )
}

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ProductDetail } from "@/product/new/_component/product-detail"
import {
  ProductSchemaForm,
  productSchema,
} from "@/product/types/product-scheme"
interface ProductFormProps {
  mockData: ProductSchemaForm
}
import { Tabs, Tab, Box } from "@mui/material"
import { TabContext, TabPanel } from "@mui/lab"

export const ProductForm: React.FC<ProductFormProps> = ({ mockData }) => {
  const [tabValue, setTabValue] = useState("typeA")

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }

  
  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductSchemaForm>({
    resolver: zodResolver(productSchema),
    defaultValues: mockData, // サーバーから渡されたデフォルトデータを適用
  })

  const onSubmit = (data: ProductSchemaForm) => {
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
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Type A" value="typeA" />
            <Tab label="Type B" value="typeB" />
          </Tabs>
        </Box>
        <TabPanel value="typeA">
          <label htmlFor="specialCode">Special Code:</label>
          <input type="text" id="specialCode" {...register("tabs.specialCode")} />
          {errors.tabs?.specialCode && (
            <p style={{ color: "red" }}>{errors.tabs.specialCode.message}</p>
          )}
        </TabPanel>
        <TabPanel value="typeB">
          <label htmlFor="janCode">Jan Code:</label>
          <input type="text" id="janCode" {...register("tabs.janCode")} />
          {errors.tabs?.janCode && (
            <p style={{ color: "red" }}>{errors.tabs.janCode.message}</p>
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
        Submit
      </button>
    </form>
  )
}

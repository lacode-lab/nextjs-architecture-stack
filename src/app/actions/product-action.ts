import {
  ProductUseFormData,
  productSchema,
} from "@/product/types/product-scheme";
import { mock } from "node:test";

export async function getMockData() {
  // モックデータを返す
  const mockdata = {
    productCode: "C0032131",
    productName: "dummy product",
    caption: "",
    category: "",
    weight: "",
    size: "",
    color: "",
  };
  // 型はzodに合わせる
  return productSchema.parse(mockdata);
}

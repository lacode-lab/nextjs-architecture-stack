import { ProductUseFormData } from "@/product/types/product-scheme";
import { ProductForm } from "@/product/_component/product-form";
import { getMockData } from "@/actions/product-action";

export default async function Product() {
  const mockData: ProductUseFormData = await getMockData();
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>＜Product Form＞</h1>
      <br />
      <ProductForm mockData={mockData} />
    </div>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useEffect } from "react";

const mockData = {
  productCode: "C0032131",
  productName: "dummy product",
  caption: "",
};
export default function ProductForm() {
  const commonSchema = z.object({});
  const productSchema = commonSchema.extend({
    productCode: z.string().min(1, "商品名は必須項目です"),
    productName: z.string().nullish(),
    caption: z.string().nullish(),
  });

  type UseFormData = z.infer<typeof productSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
    clearErrors,
    watch,
    setValue,
    reset,
  } = useForm<UseFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: UseFormData) => {
    console.log("Submitted data:", data);
  };

  // 初期値を設定
  // 出来ればuseEffectは使いたくない。。
  useEffect(() => {
    reset(mockData);
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>＜Product Form＞</h1>
      <br />
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
            name="productCode"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.productCode && (
            <p style={{ color: "red", fontSize: "0.9em" }}>
              {errors.productCode.message}
            </p>
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
            name="productName"
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
            name="caption"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              resize: "vertical",
            }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="price"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

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
    </div>
  );
}

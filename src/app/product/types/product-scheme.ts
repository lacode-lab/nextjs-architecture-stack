import * as z from "zod";
import { isProductCode, toProductCode } from "@/types/product-code";

export const productSchema = z.object({
  productCode: z
    .string()
    .min(1, "商品コードは必須項目です")
    .refine(isProductCode, {
      message: "商品コードが不正だよ",
    })
    .transform(toProductCode),
  productName: z.string().nullish(),
  caption: z.string().nullish(),
  category: z.string().min(1, "カテゴリは必須項目です"),
  weight: z
    .string()
    .regex(/^\d+(\.\d+)?$/, "重さは数値で入力してください")
    .nullish(),
  size: z.string().nullish(),
  color: z.string().nullish(),
});

export type ProductUseFormData = z.infer<typeof productSchema>;

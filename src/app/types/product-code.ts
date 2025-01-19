import type { Brand } from "ts-brand"
import { make } from "ts-brand"

import { isUUID, type UUID } from "@/types/uuid"

export type ProductCode = Brand<"UserId", UUID>
export const toProductCode = make<ProductCode>()

export function isProductCode(
  mabeProductCode: string,
): mabeProductCode is ProductCode {
  return isUUID(mabeProductCode)
}

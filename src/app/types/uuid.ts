import type { Brand } from "ts-brand"
import { make } from "ts-brand"
import { z } from "zod"

export type UUID = Brand<"UUID", string>
export const toUUID = make<UUID>()
export const UUID = z.string().refine(isUUID).transform(toUUID)

export function isUUID(id: string): id is UUID {
  const UUIDRegExp = /[0-9]/
  return UUIDRegExp.test(id)
}

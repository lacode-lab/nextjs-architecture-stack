import * as z from "zod"

export const typeASchema = z.object({
  tabType: z.literal("typeA"),
  specialCode: z.string().nonempty("Special Code を入力してください"),
})

export type typeASchemaForm = z.infer<typeof typeASchema>

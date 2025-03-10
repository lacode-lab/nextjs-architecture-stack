import * as z from "zod"

export const typeBSchema = z.object({
  tabType: z.literal("typeB"),
  janCode: z.string().nonempty("Jan Code を入力してください"),
})

export type typeBSchemaForm = z.infer<typeof typeBSchema>

import * as z from "zod"

export const typeASchema = z.object({
  tabType: z.literal("typeA"),
  specialCode: z.string().nonempty("Special Code is required"),
})

export type typeASchemaForm = z.infer<typeof typeASchema>

import * as z from "zod"

export const typeASchema = z.object({
    specialCode: z.string().nonempty("Special Code is required"),
})

export type typeASchemaForm = z.infer<typeof typeASchema>

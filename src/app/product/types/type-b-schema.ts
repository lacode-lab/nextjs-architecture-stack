import * as z from "zod"

export const typeBSchema = z.object({
    janCode: z.string().nonempty("Jan Code is required"),
})

export type typeBSchemaForm = z.infer<typeof typeBSchema>
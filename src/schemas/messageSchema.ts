import { z } from "zod"

export const messageSchema = z.object({
    message: z.string().min(30).max(400)
})
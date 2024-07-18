import { z } from "zod"

export const verifyCodeSchema = z.object({
    verifyCode: z.string().length(6, 'Verification code must be 6 digits long')
})
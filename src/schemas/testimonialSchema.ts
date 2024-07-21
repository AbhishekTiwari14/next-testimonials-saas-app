import { z } from "zod"

export const testimonialSchema = z.object({
    name: z.string().min(3,'name must be longer than 2 letters').max(30, 'name cannot be longer than 30 letters').trim(),
    message: z.string().min(40, 'Testimonial must contian atleast 40 letters').max(400, 'Testimonial cannot be longer than 400 letters').trim(),
    image: z.string().url(),
    createdAt: z.date()
})


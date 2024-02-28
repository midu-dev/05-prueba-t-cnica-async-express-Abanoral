import z from 'zod'

const itemSchema = z.object({
  content: z.string()
})

export function validateItem (input) {
  return itemSchema.safeParse(input)
}

export function validatePartialItem (input) {
  return itemSchema.partial().safeParse()
}

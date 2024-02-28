import z from 'zod'

const itemSchema = z.object({
  id: z.number().int(),
  content: z.string()
})

export function validateItem (input) {
  return itemSchema.safeParse(input)
}

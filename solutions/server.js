import express, { json } from 'express'
import { itemsRouter } from '../routes/items.js'

export const app = express()
app.use(express.json())
app.use(json())

// EJERCICO 6 aquí
app.use('/items', itemsRouter)

const PORT = process.env.PORT ?? 3000

export const server = app.listen(PORT)

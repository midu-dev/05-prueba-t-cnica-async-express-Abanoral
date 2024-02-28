import { Router } from 'express'
import { ItemController } from '../controllers/items.js'

export const itemsRouter = Router()

itemsRouter.get('/', ItemController.getAll)
itemsRouter.post('/', ItemController.create)
itemsRouter.get('/:id', ItemController.getById)
itemsRouter.patch('/:id', ItemController.update)
itemsRouter.delete('/:id', ItemController.delete)

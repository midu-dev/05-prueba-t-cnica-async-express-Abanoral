import { ItemModel } from '../models/items.js'
import { validateItem, validatePartialItem } from '../schemas/items.js'

export class ItemController {
  static async getAll (req, res) {
    const items = await ItemModel.getAll()
    res.json(items)
  }

  static async getById (req, res) {
    const { id } = req.params
    const item = await ItemModel.getById({ id })
    res.json(item)
  }

  static async create (req, res) {
    const result = validateItem(req.body)
    if (result.error) {
      return res.status(404).json({ message: JSON.parse(result.error.message) })
    }
    const newItem = await ItemModel.create({ input: result.data })
    return res.status(200).json(newItem)
  }

  static async update (req, res) {
    const result = validatePartialItem(req.body)
    if (result.error) {
      return res.status(404).json({ message: JSON.parse(result.error.message) })
    }
    const { id } = req.params
    const itemUpdated = await ItemModel.updateItem({ id, input: result.data })
    res.json(itemUpdated)
  }

  static async delete (req, res) {
    const { id } = req.params
    const result = await ItemModel.delete({ id })
    if (result === false) {
      return res.status(404).json({ error: 'Item not found' })
    }
    res.json({ message: 'Item deleted' })
  }
}

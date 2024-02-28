const items = [{
  id: 1,
  content: 'Item 1'
}]

export class ItemModel {
  static async getAll () {
    return items
  }

  static async create ({ input }) {
    const newItem = { ...input }
    items.push(newItem)
    return newItem
  }

  static async updateItem ({ input }) {
    const { id } = input
    const itemIndex = items.findIndex(item => item.id === id)
    if (itemIndex === -1) return false
    items[itemIndex] = [
      id,
      ...input
    ]
    return items[itemIndex]
  }

  static async delete ({ id }) {
    const itemIndex = items.findIndex(item => item.id === id)
    if (itemIndex === -1) return false
    items.splice(itemIndex, 1)
    return true
  }
}

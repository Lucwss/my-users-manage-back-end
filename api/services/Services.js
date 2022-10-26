const db = require('../models')

class Services {
   constructor(modelName) {
      this.modelName = modelName
   }

   async getRegisters() {
      return await db[this.modelName].findAll()
   }

   async showRegisters(id) {
      return await db[this.modelName].findOne({ where: { id: Number(id) } })
   }

   async createRegisters(data, transaction = {}) {
      return await db[this.modelName].create(data, transaction)
   }

   async updateRegisters(data, id, transaction = {}) {
      return await db[this.modelName].update(data, { where: { id: Number(id) } }, transaction)
   }

   async deleteRegisters(id, transaction = {}) {
      return await db[this.modelName].destroy({ where: { id: Number(id) } }, transaction)
   }
}

module.exports = Services
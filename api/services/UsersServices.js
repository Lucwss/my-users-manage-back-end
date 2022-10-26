const db = require('../models')
const Services = require('./Services')

class RoleServices extends Services {
   constructor() {
      super('User')
   }

   async getUsers() {
      return await db[this.modelName].findAll({
         include: [{
            model: db.Role,
            attributes: ['id', 'name']
         }]
      })
   }

   async createUser(data) {
      return await db.sequelize.transaction(async trans => {
         return await super.createRegisters(data, { transaction: trans })
      })
   }

   async updateUser(data, id) {
      return await db.sequelize.transaction(async trans => {
         return await super.updateRegisters(data, id, { transaction: trans })
      })
   }

   async deleteUser(id) {
      return await db.sequelize.transaction(async trans => {
         return await super.deleteRegisters(id, { transaction: trans })
      })
   }
}

module.exports = RoleServices
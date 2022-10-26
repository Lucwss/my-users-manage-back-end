const db = require('../models')
const Services = require('./Services')

class RoleServices extends Services {
   constructor() {
      super('UserData')
   }

   async getUserData(user_id) {
      return await db[this.modelName].findAll({ where: { user_id: Number(user_id) } })
   }

   async createUserData(data) {
      return await db.sequelize.transaction(async trans => {
         return await super.createRegisters(data, { transaction: trans })
      })
   }

   async updateUserData(data, id) {
      return await db.sequelize.transaction(async trans => {
         return await super.updateRegisters(data, id, { transaction: trans })
      })
   }

   async deleteUserData(id) {
      return await db.sequelize.transaction(async trans => {
         return await super.deleteRegisters(id, { transaction: trans })
      })
   }
}

module.exports = RoleServices
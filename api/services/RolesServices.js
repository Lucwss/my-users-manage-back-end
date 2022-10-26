const db = require('../models')
const Services = require('./Services')

class RoleServices extends Services {
   constructor() {
      super('Role')
   }

   async createRole(data) {
      return await db.sequelize.transaction(async trans => {
         return await super.createRegisters(data, { transaction: trans })
      })
   }

   async updateRole(data, id) {
      return await db.sequelize.transaction(async trans => {
         return await super.updateRegisters(data, id, { transaction: trans })
      })
   }

   async deleteRole(id) {
      return await db.sequelize.transaction(async trans => {
         return await super.deleteRegisters(id, { transaction: trans })
      })
   }
}

module.exports = RoleServices
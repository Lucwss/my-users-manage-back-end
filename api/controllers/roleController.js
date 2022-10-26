const { RoleServices } = require('../services')
const roleServices = new RoleServices()

class Role {
   static index = async (_, response) => {
      try {
         const roles = await roleServices.getRegisters()
         return response.status(200).json(roles)
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }
   static show = async (request, response) => {
      const { id } = request.params
      try {
         const role = await roleServices.showRegisters(id)
         return !role ?
            response.status(404).json({ message: `the id ${id} not found` })
            : response.status(200).json(role)
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }

   static create = async (request, response) => {
      const role = request.body
      try {
         const newRole = await roleServices.createRole(role)
         return response.status(201).json(newRole)
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }

   static update = async (request, response) => {
      const { id } = request.params
      const role = request.body
      try {
         await roleServices.updateRole(role, id)
         const updatedRole = await roleServices.showRegisters(id)
         return response.status(200).json(updatedRole)
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }

   static destroy = async (request, response) => {
      const { id } = request.params
      try {
         await roleServices.deleteRole(id)
         return response.status(200).json({ message: `the id ${id} has been successfully deleted` })
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }
}

module.exports = Role
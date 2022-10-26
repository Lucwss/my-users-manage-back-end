const { UsersDataServices } = require('../services')
const usersDataServices = new UsersDataServices()

class Role {
   static index = async (request, response) => {
      const { user_id } = request.params
      try {
         const roles = await usersDataServices.getUserData(user_id)
         return response.status(200).json(roles)
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }
   static show = async (request, response) => {
      const { id } = request.params
      try {
         const role = await usersDataServices.showRegisters(id)
         return !role ?
            response.status(404).json({ message: `the id ${id} not found` })
            : response.status(200).json(role)
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }

   static create = async (request, response) => {
      const { user_id } = request.params
      const role = { ...request.body, user_id: Number(user_id) }
      try {
         const newRole = await usersDataServices.createUserData(role)
         return response.status(201).json(newRole)
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }

   static update = async (request, response) => {
      const { id } = request.params
      const role = request.body
      try {
         await usersDataServices.updateUserData(role, id)
         const updatedRole = await usersDataServices.showRegisters(id)
         return response.status(200).json(updatedRole)
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }

   static destroy = async (request, response) => {
      const { id } = request.params
      try {
         await usersDataServices.deleteUserData(id)
         return response.status(200).json({ message: `the id ${id} has been successfully deleted` })
      } catch (error) {
         return response.status(500).json({ error: error.message })
      }
   }
}

module.exports = Role
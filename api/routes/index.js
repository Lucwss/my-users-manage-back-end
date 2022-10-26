const bodyParser = require('body-parser')
const roles = require('./rolesRoutes')
const users = require('./rolesRoutes copy')
const usersData = require('./usersDataRoutes')

const routes = (app) => {

   app.get('/', (_, response) => response.status(200).send({ message: 'welcome!' }))

   app.use(
      bodyParser.json(),
      roles,
      users,
      usersData
   )
}

module.exports = routes
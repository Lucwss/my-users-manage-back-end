const bodyParser = require('body-parser')
const roles = require('./rolesRoutes')
const users = require('./usersRoutes')

const routes = (app) => {

   app.get('/', (_, response) => response.status(200).send({ message: 'welcome!' }))

   app.use(
      bodyParser.json(),
      roles,
      users
   )
}

module.exports = routes
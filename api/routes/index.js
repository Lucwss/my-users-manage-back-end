const bodyParser = require('body-parser')

const routes = (app) => {
   app.use(
      bodyParser.json()
   )
}

module.exports = routes
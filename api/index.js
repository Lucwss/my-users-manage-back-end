const express = require('express')
const routes = require('routes')
const app = express()
const port = 4001

routes(app)


app.listen(port, () => console.log(`listening to http://localhost:${port}`))

module.exports = app

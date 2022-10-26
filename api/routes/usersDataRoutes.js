const { Router } = require('express')
const { userDataController } = require('../controllers')

const router = Router()

//get methods

router.get('/users/:user_id/users-data', userDataController.index)
router.get('/users-data/:id', userDataController.show)

//post methods

router.post('/users/:user_id/users-data', userDataController.create)

//update methods

router.put('/users-data/:id', userDataController.update)

//delete methods

router.delete('/users-data/:id', userDataController.destroy)

module.exports = router
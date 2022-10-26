const { Router } = require('express')
const { userController } = require('../controllers')

const router = Router()

//get methods

router.get('/users', userController.index)
router.get('/users/:id', userController.show)

//post methods

router.post('/users', userController.create)

//update methods

router.put('/users/:id', userController.update)

//delete methods

router.delete('/users/:id', userController.destroy)

module.exports = router
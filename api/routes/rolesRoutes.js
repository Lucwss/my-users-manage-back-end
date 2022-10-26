const { Router } = require('express')
const { roleController } = require('../controllers')

const router = Router()

//get methods

router.get('/roles', roleController.index)
router.get('/roles/:id', roleController.show)

//post methods

router.post('/roles', roleController.create)

//update methods

router.put('/roles/:id', roleController.update)

//delete methods

router.delete('/roles/:id', roleController.destroy)

module.exports = router
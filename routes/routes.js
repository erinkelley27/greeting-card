const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller.js')

// Read
router.get('/', controller.index)
router.get('/new', controller.new)
// Create
router.post('/', controller.create)

// Update
router.put('/:id', controller.update)

// Delete
router.delete('/:id', controller.delete)

module.exports = router

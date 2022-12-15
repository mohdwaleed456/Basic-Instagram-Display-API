const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController')
const authController = require('../controllers/authController')

router.get('/getData', authController.authenticate, postsController.getData)
router.post('/postData', authController.authenticate, postsController.postData)
router.post('/user', authController.login)

module.exports = router

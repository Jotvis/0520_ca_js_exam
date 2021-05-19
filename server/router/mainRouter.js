const express = require('express')
const router = express.Router()
const middle = require('../middle/middle')
const controller = require('../controller/controller')
const validate = require("../middle/validate");


router.get('/getUser/:id', controller.getUser)
router.get('/getPost/:id', controller.getPost)
router.get('/getLength', controller.getLength)
router.post('/postKey', controller.postKey)
router.post('/addText', controller.addText)
router.post('/validateThis', validate, controller.validateThis)
router.get('/getget', controller.getget)

module.exports = router
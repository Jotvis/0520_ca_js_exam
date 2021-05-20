const express = require('express')
const router = express.Router()

const mainCtrl = require('../controller/mainCtrl')
const validate = require("../middle/validate");

router.get('/getUser/:id', mainCtrl.getUser)
router.get('/getPost/:id', mainCtrl.getPost)
router.get('/getLength', mainCtrl.getLength)
router.post('/postKey', mainCtrl.postKey)
router.post('/addText', mainCtrl.addText)
router.post('/validateThis', validate, mainCtrl.validateThis)
router.get('/getget', mainCtrl.getget)

module.exports = router
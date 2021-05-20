const express = require('express')
const router = express.Router()

const mainCtrl = require('../controller/mainCtrl')
const validator = require("../middle/validator");

router.post('/addUser', validator, mainCtrl.upload)
router.post('/update', validator, mainCtrl.update)

router.get('/all', mainCtrl.all)
router.get('/find/:id', mainCtrl.find)
router.get('/delete/:id', mainCtrl.delete)

module.exports = router
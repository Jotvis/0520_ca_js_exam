const express = require('express')
const router = express.Router()

const mainCtrl = require('../controller/mainCtrl')
const validate = require("../middle/validator");

router.post('/addUser', mainCtrl.upload)
router.post('/update', mainCtrl.update)

router.get('/all', mainCtrl.all)
router.get('/find/:id', mainCtrl.find)
router.get('/delete/:id', mainCtrl.delete)



module.exports = router
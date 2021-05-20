const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const mainRouter = require('./router/mainRouter')

app.listen(3001)
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then( () => {
        console.log('Connection was successful')
    })
    .catch((e) => {
        console.log(e)
        console.log('Error while connecting to db')
    })

app.use(['/'], mainRouter)

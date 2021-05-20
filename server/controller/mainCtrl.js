const examDb = require('../schemas/examSchema')

const getAll = async () => {
    return examDb.find()
}

module.exports = {
    upload: async (req, res) => {
        const {name, age, email, password} = req.body
        const data = new examDb()
        data.name = name
        data.age = age
        data.email = email
        data.password = password
        await data.save()
        const users = await getAll()
        res.send({users})
        // res.send(examDb.find())
    },
    update: async (req, res) => {
        let {id, name, age, email, password} = req.body
        await examDb.findOneAndUpdate(
            {_id: id},
            {
                name: name,
                age: age,
                email: email,
                password: password,
        })
        const users = await getAll()
        res.send({users})
    },
    find: async (req, res) => {
        const {id} = req.params
        const entry = await examDb.findById(id)
        // console.log(entry)
        res.send(entry)
    },
    delete: async (req, res) => {
        const {id} = req.params
        await examDb.findOneAndDelete({_id: id})
        const users = await getAll()
        res.send({users})
    },
    all: async (req, res) => {
        const users = await getAll()
        res.send({users})
    }
}
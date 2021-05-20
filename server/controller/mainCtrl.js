module.exports = {

    getUser: async (req, res) => {
        let {id} = req.params
        const user = posts.filter( x => x.userId === Number(id))
        res.send(user)
    },
    getPost: async (req, res) => {
        let {id} = req.params
        const post = posts.filter( x => x.userId === Number(id))
        res.send(post)
    },

    getLength: async (req, res) => {
        let len = posts.reduce((acc, current) => {
            return acc + current.title.length
        }, 0)
        res.send({length: len})
    },

    postKey: async (req, res) => {
        // const body = JSON.parse(req.body)
        // console.log(req.body)
        const {name, value, id} = req.body
        posts[id][name] = value
        const post = posts[id]
        res.send(post)
    },

    addText: async (req, res) => {
        const {text, id} = req.body
        posts[id].title += text
        const post = posts[id]
        // console.log(posts[id])
        res.send(post)
    },

    validateThis: async (req, res) => {
        const {email} = req.body
        res.send({success: true, message: `Your email is: ${email}`})
    },
    getget: async (req, res) => {
        console.log(req)
        let asd = {ress: "asd"}
        res.send(asd)
    }

}
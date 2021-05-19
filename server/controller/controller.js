const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 2,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
]


module.exports = {
    // ctrl: (req, res) => {
    //     console.log(req.body)
    //     let mid = req.body.req
    //     res.send({msg: `server router reply! Now with ${mid}`})
    // },

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
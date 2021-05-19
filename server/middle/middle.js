// validate email from input
// validate string to have at least 3 upperLetters
// validate string to have at least one numeric symbol
// validate object to have 3 keys in it
// validate array numbers sum to be 100
// validate endpoint param to not have * in it (etc/:id <- :id neturi "*")

function pseudoValidator (req, res, next) {
    const item = req.body
    console.log(item)
    // res.send(item)
    req.body = {req: "Middle Ware!"}
    next()
}

module.exports = pseudoValidator
const validator = (req, res, next) => {
    let errmsg = []

    const {email, string} = req.body
    if (
        email.length < 3 ||
        email.length > 100 ||
        !email.includes('@') ||
        !email.includes('.')
    ) {
        errmsg.push("Invalid email")
    }

    let counter = 0
    let num = false
    for (let letter of string) {
        if (letter === letter.toUpperCase()) {
            console.log(letter)
            counter ++
        }
        if (Number(letter) == letter) {
            num = true
        }
    }
    if (counter < 3 || !num) {
        errmsg.push("Invalid string")
    }
    if (errmsg.length > 0) {
        return res.send({success: false, error: errmsg})
    }

    next()
}
module.exports = validator
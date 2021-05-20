const validator = (req, res, next) => {
    let errmsg = []

    const {name, age, email, password} = req.body
    for (let letter of name) {
        if (Number(letter) == letter) {
            errmsg.push('Number in name')
        }
    }

    if (
        email.length < 3 ||
        email.length > 100 ||
        !email.includes('@') ||
        !email.includes('.')
    ) {
        errmsg.push("Invalid email")
    }

    // if (typeof age != 'number') {
    //     errmsg.push('Age not a number')
    // }

    let pwCounter = 0
    let num = false
    for (let letter of password) {
        if (letter === letter.toUpperCase()) {
            console.log(letter)
            pwCounter ++
        }
        if (Number(letter) == letter) {
            num = true
        }
    }
    if (pwCounter < 3 || !num) {
        errmsg.push("Invalid password. Min 3 uppercase and 1 number")
    }
    if (errmsg.length > 0) {
        return res.send({success: false, error: errmsg})
    }

    next()
}
module.exports = validator
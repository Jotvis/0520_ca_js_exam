const express = require('express')
const app = express()
const cors = require('cors')
const mainRouter = require('./router/mainRouter')

app.listen(3001)
app.use(express.json())
app.use(cors())

app.use(['/'], mainRouter)

// let counter = 0
// let asd = "adsfdASD1"
// for (let ltr of asd) {
//     if (ltr === ltr.toUpperCase() && Number(ltr) != ltr) {
//         console.log(ltr)
//         counter ++
//     }
// }
// console.log(counter)

// const numbers = [0,1,2,3]
// const numbers2 = numbers
// numbers2[0] += 50
// const a = numbers[0]
// console.log(a)

// const numbers = [8,9,-6,5,2,1,4,7,51,6,77]
// numbers.sort((a,b) => b-a)
// const [a,b] = numbers
// console.log(b)
//
// const nums =[-5, 9, 6, 4]
// nums.sort()
// const [a, b] = nums
// console.log(b)

const num = 1
let num2=num
num2+=50
const a = num
console.log(a)
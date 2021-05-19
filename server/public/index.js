// CREATE ROUTES FOR THESE TASKS

// get post by user id (GET)
// get post by post id (GET)
// get length of all posts title summed up (GET)
// add new key to particular post (POST)
// add text to particular post title (POST)
//
// const btnGetUser = document.getElementById('getUser')
// const btnGetId = document.getElementById('getId')
// const btnGetLen = document.getElementById('getLength')
//
// function getter () {
//     fetch("http://localhost:3001/get")
//         .then(res => res.json())
//         .then(data => {
//             return console.log(data.msg)
//         })
// }
//
// function getUser () {
//     fetch(`http://localhost:3001/getUser/1`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }
//
// function getPost () {
//     fetch(`http://localhost:3001/getPost/2`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }
//
// function getLength () {
//     fetch(`http://localhost:3001/getLength`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }
//
// btnGetUser.onclick = getUser
// btnGetId.onclick = getPost
// btnGetLen.onclick = getLength
//
// function postKey () {
//     fetch('http://localhost:3001/postKey/2')
//         .then(req => {
//
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }
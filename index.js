const bolt = require('misfit-bolt')

const request = require('request')
const schedule = require('node-schedule')
const BOLT_ID = 'd1e516531e234bc0971ed688705aa1fa'
const BOLT_URI = `http://localhost:3000/${BOLT_ID}/`

// console.log(Date.now())

// const soon = 1506885572649
//
// const change = schedule.scheduleJob(soon, function() {
//   request.patch({
//     uri: 'http://localhost:3000/d1e516531e234bc0971ed688705aa1fa/',
//     json: {
//           "state": true,
//           "red": 0,
//           "green": 255,
//           "blue": 255
//         }
//   }, function (err, res, body) {
//     // console.log(err, res, body)
//   })
// })
//
// request.patch({
//   uri: 'http://localhost:3000/d1e516531e234bc0971ed688705aa1fa/',
//   json: {
//         "state": true,
//         "red": 255,
//         "green": 255,
//         "blue": 100
//       }
// }, function (err, res, body) {
//   // console.log(err, res, body)
// })

// request.get({
//   uri: BOLT_URI
// }, function (err, res, body) {
//   console.log(err, res, body)
// })

let r = 255
let g = 200
let b = 0

// function updateColor(r, g, b) {
//   request.patch({
//     uri: BOLT_URI,
//     json: {
//           "state": true,
//           "red": r,
//           "green": g,
//           "blue": b
//         }
//   }, function (err, res, body) {
//     // console.log(err, res, body)
//     r -= 20
//     b += 25
//   })
// }

// updateColor(0, 255, 255)

// let interval = setInterval(updateColor, 5000)

// for(let i=0; i<10; i++) {
//   request.patch({
//     uri: 'http://localhost:3000/d1e516531e234bc0971ed688705aa1fa/',
//     json: {
//           "state": true,
//           "red": r,
//           "green": g,
//           "blue": b
//         }
//   }, function (err, res, body) {
//     // console.log(err, res, body)
//     r -= 10
//     b += 25
//   })
// }


const myBolt = bolt.get(BOLT_ID)
console.log(myBolt)

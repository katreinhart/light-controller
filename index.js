const request = require('request')
const schedule = require('node-schedule')
const BOLT_URI = 'http://localhost:3000/d1e516531e234bc0971ed688705aa1fa/'

console.log(Date.now())

const soon = 1506885572649

const change = schedule.scheduleJob(soon, function() {
  request.patch({
    uri: 'http://localhost:3000/d1e516531e234bc0971ed688705aa1fa/',
    json: {
          "state": true,
          "red": 0,
          "green": 255,
          "blue": 255
        }
  }, function (err, res, body) {
    // console.log(err, res, body)
  })
})
//
// request.patch({
//   uri: 'http://localhost:3000/d1e516531e234bc0971ed688705aa1fa/',
//   json: {
//         "state": true,
//         "red": 255,
//         "green": 0,
//         "blue": 0
//       }
// }, function (err, res, body) {
//   // console.log(err, res, body)
// })
//
// request.get({
//   uri: BOLT_URI
// }, function (err, res, body) {
//   console.log(err, res, body)
// })

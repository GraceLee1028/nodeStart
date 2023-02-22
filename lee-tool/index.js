
const date = require('./date')
const html = require('./html')
console.log(date)
module.exports = {
  ...date,
  ...html
}
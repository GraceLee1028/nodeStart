
export const date = require('./date')
export const html = require('./html')
export const file = require('./file')

module.exports = {
  ...date,
  ...html,
  ...file
}
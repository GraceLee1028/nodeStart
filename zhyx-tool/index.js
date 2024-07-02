export const date = require('./date');
export const html = require('./html');
export const file = require('./file');
export const data = require('./data');
module.exports = {
  ...date,
  ...html,
  ...file,
  ...data
};

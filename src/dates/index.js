const moment = require('moment');

const today = () => {
  return moment().format('dddd');

}

const calendar = () => {
  return moment().format('MMMM D, YYYY');

}

const currentTime = () => {
  return moment().format('h:mm:ss A');

}

module.exports = {
  today,
  calendar,
  currentTime
}
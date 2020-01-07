import moment = require('moment')
const test: string = moment().startOf('day').fromNow()
console.log(test)
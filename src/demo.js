const cheerio = require('cheerio')

const $ = cheerio.load('<h1>1</h1>')

console.log(Object.prototype.toString.call($))
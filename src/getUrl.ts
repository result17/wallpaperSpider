import moment = require('moment')

enum Months {
  january,
  february,
  march,
  april,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december
}
// 01/07/2020, month begins with 0
const curData: Array<number> = moment().format('l').split('/').map(it => Number(it))
const month: number = curData[0] - 1
const curYear: number = curData[2]
const curMonth: number = curData[0]

function getUrl():string {
  const lastMonth: string = month > 0 ? (curMonth - 1).toString().padStart(2, '0') : '12', year: number = month > 0 ? curYear : curYear - 1 
  // 'https://www.smashingmagazine.com/2019/12/desktop-wallpaper-calendars-january-2020/'
  return `https://www.smashingmagazine.com/${year}/${lastMonth}/desktop-wallpaper-calendars-${Months[month]}-${curYear}` 
}

const htmlUrl: string = getUrl() 

export { curYear, curMonth, htmlUrl }
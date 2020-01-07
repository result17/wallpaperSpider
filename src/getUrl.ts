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

function getUrl():string {
  // 01/07/2020
  const curData: Array<number> = moment().format('l').split('/').map(it => Number(it))
  // month begins with 0
  const curMonth: number = curData[0] - 1, curYear: number = curData[2]
  const lastMonth: number = curMonth > 0 ? curMonth : 12, year: number = curMonth > 0 ? curYear : curYear - 1 
  // 'https://www.smashingmagazine.com/2019/12/desktop-wallpaper-calendars-january-2020/'
  return `https://www.smashingmagazine.com/${year}/${lastMonth}/desktop-wallpaper-calendars-${Months[curMonth]}-${curYear}` 
}

export default getUrl()


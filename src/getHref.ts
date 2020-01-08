import * as cheerio from 'cheerio'
import { isMatchedImgsHref } from './toolFuncs'
import { curYear, curMonth } from './getUrl'

let countUndefinedTitle: number = 0
let countHrefs: number = 0

interface hrefObj {
  [imgTitle: string]: string
}

function getImgsHref(html: string, selector: string, regexp: RegExp): hrefObj {
  const $: CheerioStatic = cheerio.load(html), result: hrefObj = {}
  $(selector).each((idx: number, ele: CheerioElement): void => {
    let href: string | undefined = $(ele).attr('href') 
    if (href && isMatchedImgsHref(regexp, href)) {
      countHrefs++
      let fileName: string = `${curYear}-${curMonth} `
      let title: string | undefined = $(ele).attr('title')
      if (!title) {
        countUndefinedTitle++
        fileName += 'wallpaper' + countUndefinedTitle
      } else {
        fileName += title
      }
      fileName += '.png'
      result[fileName] = href
    }
  })
  return result
}

export { countHrefs, hrefObj, getImgsHref }
import * as cheerio from 'cheerio'
import { isMatchedImgsHref } from './toolFuncs'

export interface hrefObj {
  [imgTitle: string]: string
}

let countHrefs: number = 0
export { countHrefs }

export function getImgsHref(html: string, selector: string, regexp: RegExp): hrefObj {
  const $: CheerioStatic = cheerio.load(html), result: hrefObj = {}
  $(selector).each((idx: number, ele: CheerioElement): void => {
    let href: string | undefined = $(ele).attr('href') 
    if (href && isMatchedImgsHref(regexp, href)) {
      countHrefs++
      let fileName: string = ''
      let title: string | undefined = $(ele).attr('title')
      if (!title) {
        fileName += 'wallpaper'
      } else {
        fileName += title
      }
      fileName += '.png'
      result[fileName] = href
    }
  })
  return result
}

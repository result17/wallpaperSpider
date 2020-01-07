import * as cheerio from 'cheerio'
import { isMatchedImgsHref } from './toolFuncs'

export interface hrefObj {
  [imgTitle: string]: string
}

export function getImgsHref(html: string, selector: string, regexp: RegExp): hrefObj {
  const $: CheerioStatic = cheerio.load(html), result: hrefObj = {}
  console.log(html.length)
  $(selector).each((idx, ele) => {
    let href: string | undefined = $(ele).attr('href') 
    if (href && isMatchedImgsHref(regexp, href)) {
      let title: string = $(ele).attr('title') + '.png'
      result[title] = href
    }
  })
  return result
}
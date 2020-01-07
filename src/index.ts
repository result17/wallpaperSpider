import url from './getUrl'
import getResponse from './getRes'
import { AxiosResponse } from 'axios'
import { buildReg } from './toolFuncs'
import {hrefObj, getImgsHref} from './getHref'

enum Resolution {
  '320x480',
  '640x480',
  '800x480',
  '800x600',
  '1024x768',
  '1024x1024',
  '1152x864',
  '1280x720',
  '1280x800',
  '1280x960',
  '1280x1024',
  '1400x1050',
  '1440x900',
  '1600x1200',
  '1680x1050',
  '1680x1200',
  '1920x1080',
  '1920x1200',
  '1920x1440',
  '2560x1440'
}

const select: string = '#main #article_content ul>li>a'
// command line
const resolutionType: number = 19
const reg: RegExp = buildReg(Resolution[resolutionType])

async function main() {
  // await return Promise.resolve() or Promise.reject()
  const res: AxiosResponse | void = await getResponse(url)
  if (!res) {
    throw new Error('url is not exist')
  }
  const imgsHrefObj: hrefObj = getImgsHref(res.data, select, reg)
  console.log(imgsHrefObj)
}
main()

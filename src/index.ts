import { htmlUrl } from './getUrl'
import getResponse from './getRes'
import { AxiosResponse } from 'axios'
import { buildReg } from './toolFuncs'
import { countHrefs, hrefObj, getImgsHref } from './getHref'
import getImgs from './saveImgs'

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

const select: string = '#main #article__content ul>li>a'
// command line
const resolutionType: number = 19
const reg: RegExp = buildReg(Resolution[resolutionType])

async function main() {
  // await return Promise.resolve() or Promise.reject()
  const res: AxiosResponse | void = await getResponse(htmlUrl)
  if (!res) {
    throw new Error('url is not exist')
  }
  const imgsHrefObj: hrefObj = getImgsHref(res.data, select, reg)
  await getImgs(imgsHrefObj).catch((): void => {
    throw new Error('imgs download error')
  })
  console.log(`imgs download commpelted, Total ${countHrefs} wallpapers!`)
}
main()

import * as path from 'path'
import * as fs from 'fs'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { hrefObj } from './getHref'

const imgsDirPath: string = path.join(__dirname, '..', 'imgs')

function getImgPath(imgName: string): string {
  return path.join(imgsDirPath, imgName)
}

export default function getImgs(targetObj: hrefObj): Promise<unknown[]> {
  const imgsEntries: Array<Array<string>> = Object.entries(targetObj)
  const tasksAry: Array<Promise<unknown>> = imgsEntries.map((item: Array<string>, idx: number): Promise<unknown> => {
    let config: AxiosRequestConfig = {
      url: item[1],
      method: 'get',
      responseType: 'stream',
      timeout: 10000,
    }
    const imgPath: string = getImgPath(item[0])
    const subP = new Promise((resolve, reject) => {
      axios(config).then((response: AxiosResponse): void => {
        response.data.pipe(fs.createWriteStream(imgPath).on('close', (): void => {
          resolve()
        }))
      }).catch((error: AxiosError): void => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
        fs.unlink(imgPath, (): void => {
          console.log('download error, delete the damaged picture!')
        })
        reject()
      })
    })
    return subP
  })
  return Promise.all(tasksAry)
}

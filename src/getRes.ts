import axios, { AxiosResponse, AxiosError } from 'axios'

const ERRORURLSTATUSCODE: number = 404

function getResponse(tarUrl: string): Promise<AxiosResponse | void> {
  return axios.get(tarUrl).catch(function (error: AxiosError): void {
    console.log(error.config)
    if (error.response) {
      // console.log(error.response.data)
      console.log(error.response.headers)
      console.log(error.response.status)
      if (error.response.status === ERRORURLSTATUSCODE) {
        throw new Error('url is wrong')
      }
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
  })
}

export default getResponse
import { SearchResponseTypes } from './types'

const axios = require('axios')

export default async function fetchCall (value:string) {
  const fetchedData: SearchResponseTypes.ResponseType = await axios.get(`https://fusion.preprod.zeta.in/api/v1/ifi/140827/individuals/${value}`, { headers: { 'x-zeta-authtoken': 'RnViZkl4cHN1TmNWQWt5OVhnc1lJSXZMM1JOcmFPYks5K0w3QmZGei9jT09lVGx5c1pHQmxoTVJZaHdTa25PUG9sNUFwazkxM0dvb25vNm80ZHZvOW44PTpBUUh1Z3ZTTkNJOEJsaXJUb2tqNmhyd05OdFVpRy9wdFhOOVFoUC9lZjU4SFFVYVJKMHliVjBhcTlwS0pZTXFRM0N4NFZVV1gxYTFuWUhDWmE1WUFkMEdGakYwL0FMRGVjUC80UWJraDRRQzRISE9nRFk0WGRCYjVSTWxhaEpjVWc4ZmNKQWYwSDhSVnB0dEJKUDFtZFdDaXVsVW9VRHI5VzgxZWFuTTY0cTgxT0txSm1jYm5OK1BtdGJ4TTBzRmpnSTN5RFE9PQ==' } })
  return fetchedData.data
}

import axios from 'axios'
import qs from 'qs'

// 全局base URL
const baseURL = process.env.VUE_APP_BASE_API
axios.defaults.timeout = 15000
axios.defaults.withCredentials = true

export const POST = (url,params) => {
    return axios.post(`${baseURL}${url}`,qs.stringify(params)).then(res => res.data)
}

export const GET = (url,params) => {
    return axios.get(`${baseURL}${url}`,{
        params
    }).then(res => res.data)
}
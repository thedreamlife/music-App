import axios from 'axios'

const http = axios.create({
    baseURL: 'http://59.110.124.156:3000'
})

export default http
import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    // : '//0.0.0.0:5000/api/'
    : '//localhost:5000/api/'

var axios = Axios.create({
    withCredentials: true
})

export const httpService = {
    get(data = null) {
        return ajax('GET', data)
    },
    post(data = null) {
        return ajax('POST', data)
    }
}

async function ajax(method, data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, with data: `, data)
        console.dir(err)
        throw err
    }
}
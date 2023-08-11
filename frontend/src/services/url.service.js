import { httpService } from './http.service.js'

export const urlService = {
    save,
    query,
    getByShortURL,
}

window.cs = urlService

async function save(url) {
    const validatedURL = (url.startsWith('http')) ? url : `http://${url}`
    const savedURL = await httpService.post({url: validatedURL})
    return savedURL
}

async function query() {
    return httpService.get()
}

function getByShortURL(url) {
    return httpService.get({url})
}


   

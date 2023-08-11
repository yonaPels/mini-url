const pgService = require('./pg.service')
const crc32 = require('crc').crc32

module.exports = {
    query,
    get,
    add
}

async function query() {
    try {
        const urls = await pgService.query()
        return urls
    } catch (err) {
        throw err
    }
}

async function get(shortURL) {
    const URLs = await pgService.get(shortURL)
    return URLs
}

async function add(longURL) {
    const shortURL = crc32(longURL).toString(16)
    const URLs = await pgService.add(shortURL, longURL)
    return URLs
}
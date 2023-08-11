const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'pg', // name of service in docker-compose.yml
  database: 'miniurl',
  password: '301161097',
})

module.exports = {
  query,
  get,
  add
}

async function query() {
  try {
    const queryText = 'SELECT DISTINCT * FROM urls;'
    const { rows } = await pool.query(queryText)
    return rows
  } catch (err) {
    throw err
  }
}

async function get(shortURL) {
  try {
    const queryText = 'SELECT * FROM urls WHERE short_url = $1;'
    const values = [shortURL];
    const { rows } = await pool.query(queryText, values)
    return rows[0]
  } catch (err) {
    throw err
  }
}

async function add(shortURL, longURL) {
  try {
    const queryText = 'INSERT INTO urls (short_url, long_url) VALUES ($1, $2) RETURNING *;'
    const values = [shortURL, longURL]
    const { rows } = await pool.query(queryText, values)
    return rows[0]
  } catch (err) {
    throw err
  }
}
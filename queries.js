const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'onijnjombokzhh',
//     host: 'ec2-34-202-88-122.compute-1.amazonaws.com',
//     database: 'd5vubft84tih4p',
//     password: '123456',
//     port: 5432
// })
// note: user is test, database is api, table in database is apitest
const pool = new Pool({
    user: 'test',
    host: 'localhost',
    database: 'api',
    password: '123456',
    port: 5432
})

// GET request 
const getFeedback = (request, response) => {
    pool.query('SELECT * FROM apitest', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
}

module.exports = {
    getFeedback,
}
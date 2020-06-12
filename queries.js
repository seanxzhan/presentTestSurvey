const Pool = require('pg').Pool

var ENV = 'prod';
var pool;

if (ENV == 'dev') {
    pool = new Pool({
        user: 'test',
        host: 'localhost',
        database: 'api',
        password: '123456',
        port: 5432
    })
} else {
    pool = new Pool({
        user: 'onijnjombokzhh',
        host: 'ec2-34-202-88-122.compute-1.amazonaws.com',
        database: 'd5vubft84tih4p',
        password: 'b71661552e670fb920ae4126dc7f798a3925675cb8fed5dd73a06df9e06d56d1',
        port: 5432
    })
}

// note: user is test, database is api, table in database is apitest

// argument for query can be viewed as psql cli input
// GET request 
const getFeedback = (request, response) => {
    pool.query('SELECT * FROM apitest', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
}

// POST request
const postFeedback = (request, response) => {
    const { userID, sliderVal } = request.body

    pool.query(
        'INSERT INTO apitest (userID, sliderVal) VALUES ($1, $2) RETURNING *', 
    [userID, sliderVal], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(
            `userID added with sliderVal: ${results.insertId}`)
    })
}

module.exports = {
    getFeedback,
    postFeedback,
}
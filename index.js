const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const { pool } = require('./config')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())

// to look for a GET request on root 
app.get('/', (request, response) => {
    // setting json
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

// gettig exported function(s) from queries.js
const db = require('./queries')

// settig http request method, endpoint URl, function:
app.get('/feedback', db.getFeedback)
app.post('/feedback', db.postFeedback)

// listen on port
app.listen(process.env.PORT || 3000, () => {
    console.log(`App running on port ${process.env.PORT}.`)
  })

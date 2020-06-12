const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

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
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

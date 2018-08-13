const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/model.js')
const GreetingCard = mongoose.model('GreetingCard')

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(bodyparser.json())
app.use(cors())

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

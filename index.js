const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('./db/model.js')
const GreetingCard = mongoose.model('GreetingCard')

const app = express()

app.set('port', process.env.PORT || 3001)
app.use(bodyparser.json())

app.use(require('./routes/routes.js'))

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

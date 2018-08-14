const GreetingCard = require('../db/model.js')

module.exports = {
  index: (req, res) => {
    GreetingCard.find()
      .then((test) => console.log(test))
  },
  new: (req, res) => {
    console.log('new')
  },
  create: (req, res) => {
    console.log('create')
  },
  update: (req, res) => {
    console.log('update')
  },
  delete: (req, res) => {
    console.log('delete')
  }
}

let express = require('express');
let router = express.Router();
let addPage = require('../views/addPage')

router.get('/', (req, res) => {
  res.send('got to GET /wiki/')
})

router.post('/', (req, res) => {
  let data = res.json(req.body)
  res.send('got to POST /wiki')
})

router.get('/add', (req, res) => {
  res.send(addPage())
})

module.exports = router;

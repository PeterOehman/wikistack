const express = require('express');
var morgan = require('morgan')
const layout = require('./views/layout')
const { db } = require('./models')
const userRouter = require('./routes/users')
const wikiRouter = require('./routes/wiki')

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static('__dirname + "/public"'))
app.use(morgan('dev'));
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

app.get('/', async (req, res) => {
  res.redirect('/wiki')
})

const PORT = 3000;

const init = async () => {
 await db.sync({force: true})

app.listen(PORT, () => {
  console.log(`App listening in port  ${PORT}`);
  });
}

init();

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {type: Sequelize.STRING,
    allowNull:false,
  defaultValue: ''},
  slug: {type: Sequelize.STRING,
    allowNull:false,
  unique: true,
validate: {
  isUrl: true,
}},
  content: {type: Sequelize.TEXT,
    allowNull:false,
    defaultValue: ''},
  status: Sequelize.ENUM('open', 'closed'),
});

const User = db.define('user', {
  name: {type: Sequelize.STRING,
    allowNull:false},
  email: {type: Sequelize.STRING,
    allowNull:false,
  unique: true,
validate: {
  isEmail: true,
}},
})


module.exports = {
  db, Page, User
}



const Sequelize = require('sequelize')
const DataBaseManager = require('./index')
let databaseManager = new DataBaseManager('mysql','example','root','spotify','localhost',3306)
let db = {

}

db.Sequelize = Sequelize;
db.sequelize = databaseManager.getConnection()
console.log(db.sequelize)
db.User = require('./model/user')(db.sequelize,db.Sequelize)

db.sequelize.sync()



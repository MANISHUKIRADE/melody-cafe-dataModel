let  Db = require('../../src/connection/connection')

let db = new Db('mysql','example','root','mysql','localhost',3306)
async function createConnection(){
    let connection =  db.createConnection()
try{
    let auth = await connection.authenticate()
    console.log(auth)
}catch(err){
    console.log(err)
}

}

createConnection()

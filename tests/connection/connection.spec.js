const Db = require('../../src/connection/connection');

const db = new Db('mysql', 'example', 'root', 'mysql', 'localhost', 3306);
async function createConnection () {
  const connection = db.createConnection();
  try {
    const auth = await connection.authenticate();
    console.log(auth);
  } catch (err) {
    console.log(err);
  }
}

createConnection();

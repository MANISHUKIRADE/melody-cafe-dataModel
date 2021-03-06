const Connection = require('./connection/connection');
const syncTable = require('./syncDb');
class DataBaseManager {
  constructor (dilect, password, username, databaseName, host, port, logger = console) {
    this.logger = logger;
    this.dilect = dilect;
    this.password = password;
    this.username = username;
    this.databaseName = databaseName;
    this.host = host;
    this.port = port;
    this.connectionInstance = new Connection(this.dilect, this.password, this.username, this.databaseName, this.host, this.port, this.logger);
    this.connection = this.connectionInstance.createConnection();
    this.models = null;
  }

  getConnection () {
    return this.connection;
  }

  async syncTable () {
    this.models = await syncTable(this.connection);
    console.log(this.models);
    return this.models;
  }
}

module.exports = DataBaseManager;

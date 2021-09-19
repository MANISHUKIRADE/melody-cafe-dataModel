const Connection = require('./connection/connection')
class DataBaseManager {
    constructor(logger,dilect,password,username,databaseName,host,port){
        this.logger = logger;
        this.dilect = dilect;
        this.password = password;
        this.username = username;
        this.databaseName = databaseName;
        this.host = host;
        this.port = port;
        this.connection = new Connection(this.dilect,this.password,this.username,this.databaseName,this.host,this.port,this.logger);
        this.connection.createConnection()
    }
}

module.exports = DataBaseManager;
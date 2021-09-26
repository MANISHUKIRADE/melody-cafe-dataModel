const Sequelize = require('sequelize')
const DataBaseManager = require('../src/index')
let databaseManager = new DataBaseManager('mysql','example','root','spotify','localhost',3306)
let db = {

}

db.Sequelize = Sequelize;
db.sequelize = databaseManager.getConnection();
console.log(db.sequelize);
db.User = require('../src/model/user')(db.sequelize,db.Sequelize);
db.AlbumType = require('../src/model/albumType')(db.sequelize,db.Sequelize);
db.Album = require('../src/model/album')(db.sequelize,db.Sequelize);
db.Track = require('../src/model/track')(db.sequelize,db.Sequelize);
db.AlbumTrack = require('../src/model/albumTrackLink')(db.sequelize,db.Sequelize);
db.UserTrackLink = require('../src/model/userTracktable')(db.sequelize,db.Sequelize);
db.Player = require('../src/model/player')(db.sequelize,db.Sequelize);
db.PlayerQueue = require('../src/model/playerQueue')(db.sequelize,db.Sequelize);
db.Notification = require('../src/model/notification')(db.sequelize,db.Sequelize);
db.Subscription = require('../src/model/subscription')(db.sequelize,db.Sequelize);
// associations

db.Album.belongsTo(db.AlbumType,{foreignKey: 'albumTypeId'});
db.AlbumType.hasMany(db.Album,{as: 'album'});
db.Album.belongsTo(db.User,{foreignKey: 'publisher'});


db.Track.belongsToMany(db.Album,{through: db.AlbumTrack});
db.User.belongsToMany(db.Track,{through: db.UserTrackLink});

db.Player.belongsTo(db.Track,{foreignKey: 'currentSong'});
db.Player.belongsToMany(db.Track,{through: db.PlayerQueue});
db.Notification.belongsTo(db.User,{foreignKey: "userId"});
db.User.belongsToMany(db.User,{through: db.Subscription, as: 'users', foreignKey: 'userId'});
db.User.belongsToMany(db.User,{through: db.Subscription, as: 'artist', foreignKey: 'artistId'});

db.sequelize.sync()

const Sequelize = require('sequelize');

async function syncTable (sequelize) {
  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.User = require('./model/user')(db.sequelize, db.Sequelize);
  db.AlbumType = require('./model/albumType')(db.sequelize, db.Sequelize);
  db.Album = require('./model/album')(db.sequelize, db.Sequelize);
  db.Track = require('./model/track')(db.sequelize, db.Sequelize);
  db.AlbumTrack = require('./model/albumTrackLink')(db.sequelize, db.Sequelize);
  db.UserTrackLink = require('./model/userTracktable')(db.sequelize, db.Sequelize);
  db.Player = require('./model/player')(db.sequelize, db.Sequelize);
  db.PlayerQueue = require('./model/playerQueue')(db.sequelize, db.Sequelize);
  db.Notification = require('./model/notification')(db.sequelize, db.Sequelize);
  db.Subscription = require('./model/subscription')(db.sequelize, db.Sequelize);
  // associations

  db.Album.belongsTo(db.AlbumType, { foreignKey: 'albumTypeId' });
  db.AlbumType.hasMany(db.Album, { as: 'album' });
  db.Album.belongsTo(db.User, { foreignKey: 'publisher' });

  db.Track.belongsToMany(db.Album, { through: db.AlbumTrack });
  db.User.belongsToMany(db.Track, { through: db.UserTrackLink });

  db.Player.belongsTo(db.Track, { foreignKey: 'currentSong' });
  db.Player.belongsToMany(db.Track, { through: db.PlayerQueue });
  db.Notification.belongsTo(db.User, { foreignKey: 'userId' });
  db.User.belongsToMany(db.User, { through: db.Subscription, as: 'users', foreignKey: 'userId' });
  db.User.belongsToMany(db.User, { through: db.Subscription, as: 'artist', foreignKey: 'artistId' });

  db.sequelize.sync();
  return db;
}

module.exports = syncTable;

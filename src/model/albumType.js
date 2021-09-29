module.exports = (sequelize, Sequelize) => {
  const AlbumType = sequelize.define('albumType', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM({
        values: ['systemAlbum', 'userAlbum']
      }),
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
  return AlbumType;
};

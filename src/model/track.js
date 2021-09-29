
module.exports = (sequelize, Sequelize) => {
  const Track = sequelize.define('track', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    filePath: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
  return Track;
};

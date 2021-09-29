module.exports = (sequelize, Sequelize) => {
  const Album = sequelize.define('album', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    updatedBy: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
  return Album;
};

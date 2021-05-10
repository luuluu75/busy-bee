const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const UserProfile = sequelize.define("userProfile", {
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i
    },
    define: {
        freezeTableName: true
    }
  });

  (async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();
// `sequelize.define` also returns the model
console.log(UserProfile === sequelize.models.UserProfile); // true

const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const UserProfile = sequelize.define("userProfile", {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    allowNull: false
},
    name: {
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
}, {
  freezeTableName: true,
  timestamps: false
}, );


// // `sequelize.define` also returns the model
// console.log(UserProfile === sequelize.models.UserProfile); // true
module.exports = UserProfile;
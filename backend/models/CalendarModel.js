const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Calendar = sequelize.define("calendar", {
    cal_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false        
    },
    cal_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false
}, );

module.exports = Calendar;



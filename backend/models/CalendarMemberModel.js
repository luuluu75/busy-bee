const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const CalendarMember = sequelize.define("calendarMember", {
    member_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cal_id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.TEXT
  },
},
  {
    freezeTableName: true,
    timestamps: false
}, );

module.exports = CalendarMember;
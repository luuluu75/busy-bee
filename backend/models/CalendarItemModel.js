const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const CalendarItem = sequelize.define("CalendarItem", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    item_cat: {
        type: DataTypes.INTEGER
    },
    item_desc: {
        type: DataTypes.TEXT
    },
    item_date: {
        type: DataTypes.DATEONLY
    },
    item_time: {
        type: DataTypes.INTEGER
    },
    cal_id: {
        type: DataTypes.INTEGER
    },
    created_by: {
        type: DataTypes.INTEGER
    },
    isPrivate: {
        type: DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
}, );

  module.exports = CalendarItem;
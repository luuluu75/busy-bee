const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

const CalendarMember = sequelize.define("calendarMember", {
    member_id: {
        type: DataTypes.INTEGER, AUTO_INCREMENT, PRIMARY_KEY,
        allowNull: false
    },
    cal_id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.TEXT
    }, 
    define: {
        freezeTableName: true
    }
  });

module.exports = CalendarMember;
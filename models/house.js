const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class House extends Model {}

House.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        homeowner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'TBD',  //is this correct?
        },
        up: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false, //is this correct?
        },
        down: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        neighborhood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        payment_type: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'house',
    }
);

module.exports = House;
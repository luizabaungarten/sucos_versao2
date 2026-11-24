const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Suco = db.define('suco', {
    codSuco: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'codUsuario',
            model: 'usuarios'
        }
    },
    sabor: {
        sabor: {
            type: DataTypes.ENUM('LARANJA', 'UVA', 'MORANGO'),
            allowNull: false
        }
    },
    volume: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
},{
    timestamps: false,
    tableName: 'sucos'
})

module.exports = Suco
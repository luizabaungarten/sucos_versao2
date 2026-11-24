const { DataTypes, DATE } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('usuario', {
    codUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(14),
        allowNull: false
    },
    cpf: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(14),
        allowNull: false
    },

},{
    timestamps: false,
    tableName: 'usuarios'
    
})

module.exports = Usuario
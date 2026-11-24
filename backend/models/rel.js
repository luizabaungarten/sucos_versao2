const Usuario = require('./Usuario')
const Suco = require('./Suco')

Usuario.hasMany(Suco, {
    foreignKey: 'idUsuario',
    as: 'sucoUsuario',
    onDelete: 'CASCADE'
})

Suco.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    as: 'usuarioSuco',
    allowNull: false
})

module.exports = { Usuario, Suco }
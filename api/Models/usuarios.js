module.exports = (sequelize,type) => {
    return sequelize.define('usuarios',{
        idUsuario:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type:type.STRING
        },
        apellidoPaterno:{
            type:type.STRING
        },
        apellidoMaterno: {
            type:type.STRING
        },
        usuario:{
            type:type.STRING
        },
        password:{
            type:type.STRING
        }

    })
}
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
        usuarioU:{
            type:type.STRING
        },
        password:{
            type:type.STRING
        },
        fotoUsuario:{
            type:type.STRING
        }

    })
}
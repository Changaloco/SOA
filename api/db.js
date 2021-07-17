const Sequelize = require('sequelize');
const UsuariosModel = require('./models/usuarios');

const sequelize = new Sequelize('bsozzjjofqmf5pzua8mh','ut2eg5szzrrpdqx4','KR9Vcjc6WXvGPM1bwOzH',{
    host: 'bsozzjjofqmf5pzua8mh-mysql.services.clever-cloud.com',
    dialect: 'mysql'
})

const User = UsuariosModel(sequelize,Sequelize);


sequelize.sync({force: false})
    .then(() =>{
        console.log('Tablas sincronizadas')
    })

module.exports = {
    User
}
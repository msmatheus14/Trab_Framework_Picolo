const {Sequelize}  = require("sequelize")    
const sequelize = new Sequelize('quinteto-adm_banco', '386281', 'quinteto_2024', {

    dialect: 'mysql',
    host: 'mysql-quinteto-adm.alwaysdata.net',
    
})

module.exports = sequelize 
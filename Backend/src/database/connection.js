const knex = require('knex') // Importação do knex

const configuration = require('../../knexfile')  ///Importa as configurações do banco de dados que esta dentro do knexfiles

const connection = knex(configuration.development) // atribui a conexão de configuração de develop do arquivo knexfile na variavel connection


module.exports = connection // export a conexão
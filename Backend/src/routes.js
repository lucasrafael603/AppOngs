
const express = require('express') /// Vincula os modulos do express a uma variavel
//const crypto = require('crypto') /// vincula o modulo de criptoria a variavel

const ongController = require('../src/controllers/OngController')
const incidentsController = require('../src/controllers/IncidentController')
const profileController = require('../src/controllers/ProfileControllers')
const sessionController = require('../src/controllers/SessionController')


//const connection = require('./database/connection') // importa a conexão com o banco de dados

//const connection = require('./database/connection')

const routes = express.Router() //// Vincula somente o modulo de rotas a variavel routes


routes.get('/ongs', ongController.index)

routes.post('/ongs',ongController.create)

routes.post('/incidents', incidentsController.create)

routes.get('/incidents', incidentsController.index)

routes.delete('/incidents/:id', incidentsController.delete)

routes.get('/profile', profileController.index)

routes.post('/sessions', sessionController.create)

module.exports = routes // Exporta a variavel do arquivo. (Neste caso a variavel routes)

//export default routes // Exemplo 2 de export
const express = require('express'); //Carrega os modulos express para variavel
const routes = require('./routes') // ./ = Pasta atual  // ../ Volta uma pasta / Quando se utiliza o nome diretamente é para referenciar pacotes
const cors = require('cors')



const app = express(); /// Passa os modulos para variavel da aplicação
/*Rota / Recurso - Identidade ou table que estamos querendo buscar recursos no bd */


app.use(cors()) ///Aplica metodologia de segurança na aplicação
                        //Deve ser declarado antes das requisições.
app.use(express.json()) //Informa ao app express que iremos utilizar o formato JSON para as Requisições /// Converte os JSONs em objetos do JS.
app.use(routes) // Define que a aplicação ira utilizar as rotas configuradas na variavel routes que vem do arquivo routes.js

app.listen(3333); //Adiciona a aplicação a porta 3333
/* Metodos HTTP: 

*GET: Buscar/Listar uma informação do back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação no back-end
*/

/* INSOMNIA - Utilizado para efetuar testes de rotas e parametros do back-end */

/* Tipos de parâmetros:

*Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros,paginação) exemplo: /users?Page=2&name=Diego&idade=25
*Route Params: Parâmetros utilizados para identificar recursos. (Para buscar um unico recurso) exemplo: config do link = /users/id:  
                                                                                                        link esperado  = /users/1
*Request body - Corpo da requisição, utilizado para criar ou alterar recursos.
*/

/*
 *Request - Guarda todos os dados que são solicitados pela requisição. 
 *Response - Envia todos os dados que são coletados pela requisição. (Retorna a resposta)
 */


 /*Opções de configurações para Banco de dados 
  * Drivers: Instala todo o banco do db.
  * Query Builders: 
  * 
 */





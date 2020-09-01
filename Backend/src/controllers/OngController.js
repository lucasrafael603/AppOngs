const crypto = require('crypto')
const connection = require('../database/connection')
module.exports = {


    async index (request, response){

        const ongs = await connection('ongs').select('*')


        return response.json(ongs)

    },


    async create(request, response){

        // const params = request.query
    //const body = request.body;  
    const { name, email, whatsapp,city, uf} = request.body
    //console.log(name)

    const id = crypto.randomBytes(4).toString('HEX')

   await connection('ongs').insert({id, name, email,whatsapp,city,uf,})

    //return response.send('Hello Wnorld')
    return response.json({id})

    }

}
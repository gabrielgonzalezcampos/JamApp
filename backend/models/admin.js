'use scrict'
/*
Esquema de la base de dades amb els camps que pot tindre cada Usuari  
 */
const mongoose = require('mongoose')
const UserBase = require('./baseUser')

const AdminSchema = UserBase.discriminator('Admin', new mongoose.Schema({
}))

module.exports= mongoose.model('Admin')

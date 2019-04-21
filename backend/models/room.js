'use scrict'
/*
Esquema de la base de dades amb els camps que pot tindre cada Usuari
 */
const mongoose = require('mongoose')
const UserBase = require('./user')

const RoomSchema = UserBase.discriminator('Room', new mongoose.Schema({
    fotoPerfil: String,
    ubicacio:String,
    coordenades:[Number],
    descripcio:String,
}))

module.exports= mongoose.model('Room')
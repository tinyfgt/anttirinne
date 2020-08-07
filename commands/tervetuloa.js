const Discord = require ('discord.js')
const bot = new Discord.Client ({disableEveryone: true})
const db = require ('quick.db')
module.exports = {
	name: 'tervetuloa',
	description: 'Ping!',
	execute(message, args) {


    
    
    let kanava = message.mentions.channels.first()
    db.set(`tervetuloa_${message.guild.id}`, kanava.id);
    message.channel.send(`${kanava} on nyt tervetuloa kanava!`)
    
   }}
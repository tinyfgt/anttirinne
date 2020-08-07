const Discord = require ('discord.js')
const bot = new Discord.Client ({disableEveryone: true})
const db = require ('quick.db')
module.exports = {
	name: 'hyvästi',
	description: 'Ping!',
	execute(message, args) {


    
    
    let kanava = message.mentions.channels.first()
    db.set(`hyvästi_${message.guild.id}`, kanava.id);
    message.channel.send(`${kanava} on nyt hyvästi kanava!`)
    
   }}
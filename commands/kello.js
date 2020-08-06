const Discord = require ('discord.js')
const moment = require ('moment')

module.exports = {
	name: 'kello',
	description: 'Ping!',
	execute(message, args) {
        moment.locale('fi')
      
       
       message.channel.send(moment().format('LT')) 
        
    }}
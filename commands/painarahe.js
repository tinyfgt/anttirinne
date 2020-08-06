const Discord = require ('discord.js')
const db = require ('quick.db')
const ms = require ('parse-ms')

module.exports = {
	name: 'painarahe',
	description: 'Ping!',
	execute(message, args) {
        let saaja = message.mentions.users.first();
        if (!saaja){
            saaja = message.author
        }
        const args2 = message.content.split(' ').slice(2);
        const argsr2 = args2.join(' ')
        const määrä =  parseInt(argsr2);
        if (!message.member.hasPermission("ADMINISTRATOR")){
        message.channel.send("Vaan adminit voi tehä tolleen"); return;
        }
        if (message.content.includes("@everyone")){

            message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
           }
           if (message.content.includes("@here")){
    
            message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
           }
        db.add(`money_${message.guild.id}_${saaja.id}`, määrä)

        message.channel.send(`Lisäsin **${saaja}** **${määrä}** Kaartin Markkaa`)
        

        
        
    }}
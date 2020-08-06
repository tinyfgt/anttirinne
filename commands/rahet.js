const Discord = require ('discord.js')
const db = require ('quick.db')

module.exports = {
	name: 'rahet',
	description: 'Ping!',
	execute(message, args) {
        let saaja = message.mentions.users.first();
        if (!saaja){
            saaja = message.author
        }
        let bal = db.fetch(`money_${message.guild.id}_${saaja.id}`);
        if (bal === null){ bal = '0';}
        if (message.content.includes("@everyone")){

            message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
           }
           if (message.content.includes("@here")){
    
            message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
           }

        message.channel.send(`${saaja} omistaa tällä hetkellä **${bal}** Kaartin Markkaa.`)
        
    }}
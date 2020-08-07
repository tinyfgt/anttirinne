const Discord = require ('discord.js')
const db = require ('quick.db')
const ms = require ('parse-ms')

module.exports = {
	name: 'siirrärahe',
	description: 'Ping!',
	execute(message, args) {
        let saaja = message.mentions.users.first();
        let antaja = message.author
        if (!saaja){
            message.channel.send("Et kertonut kelle siirrät rahaa!"); return
        }
        const args2 = message.content.split(' ').slice(2);
        const argsr2 = args2.join(' ')
        const määrä =  parseInt(argsr2);
        let bal = db.fetch(`money_${message.guild.id}_${antaja.id}`);
        if (message.content.includes("@everyone")){

            message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
           }
           if (message.content.includes("@here")){
    
            message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
           }
        if (bal < määrä){
            message.channel.send("Ei sul oo noin paljoo rahee :D"); return;
        }
        else
        db.add(`money_${message.guild.id}_${saaja.id}`, määrä)
        db.subtract(`money_${message.guild.id}_${antaja.id}`, määrä)
        

        message.channel.send(`**${antaja}** antoi ${saaja} **${määrä}** Kaartin Markkaa`)
        

        
        
    }}
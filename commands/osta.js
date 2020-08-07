const Discord = require ('discord.js')
const bot = new Discord.Client ({disableEveryone: true})
const db = require ('quick.db')
module.exports = {
	name: 'osta',
	description: 'Ping!',
	execute(message, args) {
ostaja = message.author

        const args2 = message.content.split(' ').slice(2);
        const argsr2 = args2.join(' ')
    
    if(message.content.includes ("ydinpommi")){
        let hinta = 100
        let nimi = "ydinpommi"
        let bal = db.fetch(`money_${message.guild.id}_${ostaja.id}`);
        if(bal < 100){
            message.channel.send("sul ei oo tarpeeks rahaa!"); return;
        }
        else
        db.push(`tavarat_${message.guild.id}_${ostaja.id}`, nimi)
        db.subtract(`money_${message.guild.id}_${ostaja.id}`, hinta)
message.channel.send(`ostit 1 ${nimi}`)
        
    }
    
   }}
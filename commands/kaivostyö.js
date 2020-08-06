const Discord = require ('discord.js')
const db = require ('quick.db')
const ms = require ('parse-ms')

module.exports = {
	name: 'kaivostyö',
	description: 'Ping!',
	execute(message, args) {
        let saaja = message.author
    let timeout = 1000 * 60
    let vastaukset = [
        20,
        30,
        40,
        50,
        60,
        25,
        45,
    ]
    const määrä = vastaukset[Math.floor(Math.random()*(vastaukset.length)-1)]  
    let kaivostyö = db.fetch(`kaivostyö_${message.guild.id}_${saaja.id}`);
    if(kaivostyö !== null && timeout - (Date.now()-kaivostyö)> 0){
        let time = ms (timeout - (Date.now()- kaivostyö));
        message.channel.send('Et voi tehä töitä noin usein lol. Kokeile uudestaan ' + time.minutes + ' minuutin ja ' + time.seconds + ' sekunnin päästä'); return;
    }
        else
        
        

        db.add(`money_${message.guild.id}_${saaja.id}`, määrä)

        message.channel.send(`Teit vitusti töitä **${saaja}** ja sait **${määrä}** Kaartin Markkaa`)
        

        
        
    }}
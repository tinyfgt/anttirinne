

const Discord = require ("discord.js");
const fs = require ("fs");

const bot = new Discord.Client ({disableEveryone: true})
bot.commands = new Discord.Collection();


module.exports={

name: 'click',
tietoja: 'perus ping komento',
execute (message,reaction,user){
    bot.on("message", async message => {
   

    let kontent ="reagoi piilottaaksesi"
    let viesti =await message.channel.send(kontent)
    await viesti.react('✔️')
 bot.on("messageReactionAdd",async(reaction,user)=>{
 if (reaction.partial) await reaction.fetch()
 if (reaction.message.partial) await reaction.message.fetch()
 
 if (user.bot) return; 

 })}
    )}}
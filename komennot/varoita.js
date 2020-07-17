const Discord = require ("discord.js");
const db = require ("quick.db");

const Client = new Discord.Client ({disableEveryone: true})
module.exports={

    name: 'varoita',
    tietoja: 'varoitus komento',
    execute(Client,message,args){
        
        const argsa = message.content.split(' ').slice(2);
       const argsr = argsa.join(' ')
       let syy = argsr
       let varoitukset = db.get(`varoitukset ${message.guild.id} ${user.id}`);
var user = message.mentions.users.first();
       if(varoitukset=== null){

        db.set(`varoitukset ${message.guild.id} ${user.id}`,1);
        message.channel.send("tämmönen varotus on niinku tehty syystä että "+ syy);
       }
       if(varoitukset!== null){
           db.add(`varoitukset ${message.guild.id} ${user.id}`,1)};
           message.channel.send("tämmönen varotus on niinku tehty");


    }}
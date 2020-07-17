const Discord = require ("discord.js");
const fs = require ("fs");
const { prependListener } = require("process");
const bot = new Discord.Client ({disableEveryone: true})
const db = require ("quick.db");

module.exports={

    name: 'varoita',
    tietoja: 'varoitus komento',
    execute(Client,message,args,){
        const users = Discord.users
        var user = message.mentions.users.first()
        let varoitukset = db.get(`varoitukset ${message.guild.id} ${user.id}`);
        if (varoitukset=== null) varoitukset = 0;
        message.channel.send(`tällä tyypillä on sellaset ${varoitukset} varoitusta.`)





    }}
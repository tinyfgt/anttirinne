const Discord = require ("discord.js");
const fs = require ("fs");
module.exports={

name: 'ping',
tietoja: 'perus ping komento',
execute(message,args){

message.channel.send("pong")

}


}


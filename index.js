const botconfig = require ("./botconfig.json");
const Discord = require ("discord.js");
const fs = require ("fs");
const { prependListener } = require("process");
const bot = new Discord.Client ({disableEveryone: true})
const cheerio = require ("cheerio")
const request = require ("request");
const { settings } = require("cluster");
const db = require ('quick.db')
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}



let lentokenttä = '730081550871560293';
let rikosrekisteri = '731656123450392587';
let tinynlogi = '733116132000530543';




    


    bot.on("guildMemberAdd", member =>{
        let terve = db.fetch(`tervetuloa_${member.guild.id}`);
    
        
        bot.channels.cache.get(terve).send(`tervetuloo tänne :DD ${member}! muista lukee säännöt tai tulee turpaan`);
        })
        bot.on("guildMemberRemove", member =>{
        
            let hyvästi = db.fetch(`hyvästi_${member.guild.id}`);
            
            bot.channels.cache.get(hyvästi).send(`tämmönen kapitalisti kun **${member.user.tag}** lähti pois täältä`);
            })

    bot.on("messageDelete", message =>{
        if (message.guild.id===("653240393944793088")){

            return;
        }
        if (message.author.bot) return;
        if (message.content.startsWith("antti sano")) return;
        if (message.content.startsWith("antti click")) return;

        let logembed = new Discord.MessageEmbed()
        .setTitle('Poistettu viesti')
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#0394fc')
        .setDescription(message.content)
        .addField('Lähettäjä: ', message.author.username)
        .addField('Serveriltä: ', message.guild.name)
        .addField('Kanavalta: ', message.channel.name);
        
        bot.channels.cache.get(rikosrekisteri).send(logembed);
        bot.channels.cache.get(tinynlogi).send(logembed);
        })
        bot.on("messageUpdate", async(oldMessage, newMessage) =>{
            if(oldMessage.author.bot)return;

            let logembed = new Discord.MessageEmbed()
            .setTitle('Editoitu viesti:')
            .addField('Uusi viesti:', newMessage.content)
            .setThumbnail(oldMessage.author.displayAvatarURL())
            .setColor('#0394fc')
            .setDescription(oldMessage.content)
            .addField('Lähettäjä: ', oldMessage.author.username)
            .addField('Serveriltä: ', oldMessage.guild.name)
            .addField('Kanavalta: ', oldMessage.channel.name);
            
            bot.channels.cache.get(rikosrekisteri).send(logembed);
            bot.channels.cache.get(tinynlogi).send(logembed);
            })

bot.on("ready", async () => {
    let kanava = bot.channels.cache.get(`733974899756105838`)
    console.log (`${bot.user.username} is online`);
    bot.user.setActivity("seksi on väliaikaista mutta kermisen rahat ovat ikuisia");
    kanava.send('```V̵̢̨̛͖͔̳̯̠̻͖̽̓̀͑͗͘I̵̖͔̳͖̠̯̤͚̘̾̊ͅT̵̨̡̯̥̩̣̳̫̂͑̒̚̚͜Ȗ̷̼̮͓̻̼̟̱̳͕̤T̵͕́͋̀̒̐̄̾̽͜͝͝Ṭ̵̥͎̼̬̓ͅÁ̴̘̗͍̃͌A̸̛̻̠̠͔̓͗͑͂̐͛̔́͌K̵̢̡̛̦͔͖̟͈̬͌́̉̈́͑͝Ơ̶͕̳̝͎̬̇ ̴̯͇̻̫̬̫̯̋̏͐͑̑̔̉̃͊̚J̵̥̙̠͕͓̍͊̎̄͗O̴̰̹̯͎̝͋̈́ ̷̼̟͓̫̮̻̹̤̒͐̽̃̐͗̽̌?̴͚͙̼̰̪̲͖͛́̃͐́̓̾͋¿̸̥͌̄͂͊͊ ```')
     
});

bot.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
   
    if (message.author.bot) return;


    if(message.content.startsWith("antti puhdista")){
        if (message.deletable) {
            message.delete();
            const args2 = message.content.split(' ').slice(2);
           const argsr2 = args2.join(' ')
           const määrä =  parseInt(argsr2, 10);
           if (message.author.id !== "475960989339090945" && message.member.hasPermission("MANAGE_MESSAGES")){
               message.channel.send("sul ei oo oikeuksii lololo")
           }
           message.channel.bulkDelete(määrä)
           message.channel.send(`puhdistin **${määrä}** viestiä!`).then(msg => {msg.delete({ timeout: 4000 });})
           
        }

       
    
    }

 
if (message.content.startsWith("antti bännää")){
 
   
    const bännättävä = message.mentions.users.first();
    
    if (!message.member.hasPermission("BAN_MEMBERS") && !message.member.hasPermission("ADMINISTRATOR")){
        message.channel.send("sulla ei oo oikeuksii"); return;
    }
    message.channel.send(`**${bännättävä.user.tag}** on bännätty!`)
    message.guild.members.ban(bännättävä)
   
    

}
if (message.content.startsWith("antti kick")){
   
    let bännättävä =  message.mentions.members.first()
    const bännättävä2 =  message.mentions.members.first()
    if (!message.member.hasPermission("KICK_MEMBERS") && !message.member.hasPermission("ADMINISTRATOR")){
        message.channel.send("sulla ei oo oikeuksii"); return;
    }
    message.channel.send(`**${bännättävä.user.tag}** on kickattu!`)
        
  await  bännättävä.kick()

        
    

    

}
if (message.content.startsWith("antti mute")){
    let tyyppi = message.mentions.members.first();
    
   let puoluerole = message.guild.roles.create({
        data:{

        name: "mutettu",
        position:  10,
        color: "#000001",
        
        


        }



    }).then(function(puoluerole){
puoluerole.setMentionable(true)
     tyyppi.roles.add(puoluerole)
    let channel = message.guild.channels.forEach();
         channel.overwritePermissions(puoluerole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          CONNECT: false
        });
      });
  
}
    
    if(message.content.startsWith("antti moi")){
        return message.channel.send ("tapa ittes")};

        
    if (message.content.startsWith("antti pillu")){
        let embed = new Discord.MessageEmbed()
        .setImage("https://memegenerator.net/img/instances/55866260.jpg")
        message.channel.send(embed)
    }
    if(message.content.startsWith("antti hitler")){
        let hitler = "https://c8.alamy.com/comp/FKKP0H/adolf-hitler-a-rare-image-of-the-german-wartime-leader-smiling-from-FKKP0H.jpg";
        let botembed = new Discord.MessageEmbed()
        .setDescription ("Hitler")
        .setColor ("#ff1100")
        .setImage (hitler)
        


        return message.channel.send (botembed);

        
    }
    if (message.content.startsWith(prefix + "pfp")){
        let käyttäjä = message.mentions.users.first();
        if(!käyttäjä){

            let embed2 = new Discord.MessageEmbed()
        .setTitle(message.author.username + " Profiilikuva")
        .setImage(message.author.displayAvatarURL({size: 4096, dynamic: true}));
        message.channel.send(embed2)
        }
        else{

        let embed = new Discord.MessageEmbed()
        .setTitle(käyttäjä.username + " Profiilikuva")
        .setImage(käyttäjä.displayAvatarURL({size: 4096, dynamic: true}))
        message.channel.send(embed)}

    }
    if (message.content.startsWith(prefix + "sano")){
        const uutiskanava = bot.channels.cache.get(`722794641971478568`) 
        const uutiskanava2 = bot.channels.cache.get(`725099335087423519`) 
        const uutiskanava3 = bot.channels.cache.get(`710449362999967766`) 

       const args = message.content.split(' ').slice(2);
       const argsr = args.join(' ')
       if (message.author.bot) return;
       if (message.content.includes("@everyone")){

        message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
       }
       if (message.content.includes("@here")){

        message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
       }
else message.channel.send (argsr)
    message.delete({ timeout: 1 })
    
        

    const argsf = message.content.split(' ').slice(0);
       const argsb = argsf.join(' ')
            const logi = bot.channels.cache.get('733069694025859184')
         logi.send("lähettäjä: "+ `${message.member}` + ". viesti: " + argsb)
         logi.send("serveriltä: "+ message.guild.name );return};
        
          
        
         if (message.content.startsWith(prefix + "puolue")){
            let botrole = message.guild.roles.cache.find(role => role.name === "Antti Rinne V3")
            let johtaja = message.author.username
            const args = message.content.split(' ').slice(3);
            const nimi = args.join(' ')
            let tyyppi = message.author
            tyyppi2 = message.member
             
             
           if (message.content.includes("punainen")){
               väri = "#fc0303"
           }
           if (message.content.includes("sininen")){
            väri = "#006aff"
        }
        if (message.content.includes("violetti")){
            väri = "#c800ff"
        }
        if (message.content.includes("vihreä")){
         väri = "#00b315"
     }
     if (message.content.includes("musta")){
        väri = "#000001"
    }
    if (message.content.includes("keltainen")){
     väri = "#ffc800"
 }
 if (message.content.includes("pinkki")){
    väri = "#ff0077"
}
            const puoluekanava = message.guild.channels.cache.find(channel => channel.name === "puolueet") 
        message.channel.send("Jonkun @Kaartinliiton johtaja pitää vahvistaa uuden puolueen tekeminen sanomalla 'vahvista'")
        let filter = m => !m.author.bot;
        let collector = new Discord.MessageCollector(message.channel, filter);
        collector.on('collect', (message, col)=>{
        if (message.content==="vahvista"){

collector.stop();

            if (!message.member.roles.cache.some(r => r.name === "Kaartinliiton johtaja")){

                message.reply('Et ole kaartin johtaja');
                return;
            }
            else

        
    
           

           

           message.guild.roles.create({
               data:{

               name: nimi,
               position:  botrole.position,
               color: väri,
               permissions: "VIEW_AUDIT_LOG"


               }



           }).then(function(puoluerole){
               puoluerole.setMentionable(true)

            tyyppi2.roles.add(puoluerole)

           })
let embed = new Discord.MessageEmbed()

.setTitle("Uusi Puolue")

.addField("Puoluuen nimi:", nimi)
.addField("Puolueen johtaja:",johtaja )
.setThumbnail(tyyppi.displayAvatarURL())
.setColor(väri)
message.channel.send("Uusi puolue on tehty ja se näkyy #puolueet kanavalla")

puoluekanava.send(embed)

        } }) }
        
        
        if(message.content.startsWith("antti stalin")){
        let stalin = "https://memegenerator.net/img/images/14715665.jpg";
        let botembed = new Discord.MessageEmbed()
        .setDescription ("Stalin")
        .setColor ("#ff1100")
        .setImage (stalin)
        


        return message.channel.send (botembed);

        
    }
    if (message.content.startsWith("antti luorooli")){
    
        const args = message.content.split(' ').slice(3);
        const nimi = args.join(' ')
        let userrole = message.member.roles.highest.name
        let user = message.member
        if (!message.member.hasPermission("MANAGE_ROLES") && !message.member.hasPermission("ADMINISTRATOR")){
            message.channel.send("sulla ei oo oikeuksia tehä roolia :D"); return;
        }

else 

        if (message.content.includes("punainen")){
            väri = "#fc0303"
        }
        if (message.content.includes("sininen")){
         väri = "#006aff"
     }
     if (message.content.includes("violetti")){
         väri = "#c800ff"
     }
     if (message.content.includes("vihreä")){
      väri = "#00b315"
  }
  if (message.content.includes("musta")){
     väri = "#000001"
 }
 if (message.content.includes("keltainen")){
  väri = "#ffc800"
}
if (message.content.includes("pinkki")){
 väri = "#ff0077"}


        message.guild.roles.create({
            data:{

            name: nimi,
            position:  userrole.position -1,
            color: väri,
            


            }



        }).then(function(puoluerole){
            puoluerole.setMentionable(true)

         user.roles.add(puoluerole)

        })
    
    }
    if (message.content.startsWith("antti liity")){
        let puolue =  message.mentions.roles.first()
        let liittyjä = message.member
        if(!puolue.name.includes("("||")")){
            message.channel.send("Tämä rooli ei ole puolue."); return;
        }
        else

        liittyjä.roles.add(puolue);
        message.channel.send(`Liityit puolueeseen ${puolue.name}!`)
        
    }
    if (message.content.startsWith("antti lähde")){
        let puolue =  message.mentions.roles.first()
        let liittyjä = message.member
        if(!puolue.name.includes("("||")")){
            message.channel.send("Tämä rooli ei ole puolue."); return;
        }
        else

        liittyjä.roles.remove(puolue);
        message.channel.send(`Lähdit puolueesta ${puolue.name}!`)
        
    }
    if(message.content.startsWith("antti palikka")){
        let palikka = "https://cdn.discordapp.com/attachments/476026518473015308/728346605799079976/palikka.jpg";
        let botembed = new Discord.MessageEmbed()
        .setDescription ("Suuri Palikka")
        .setColor ("#ff1100")
        .setImage (palikka)
        .addField ("Palvokaa", "johtajaa");
        
    
    
        return message.channel.send (botembed);}
        
        if(message.content.startsWith("antti komennot")){
            let iconr = ("https://images.almatalent.fi/cx114,cy0,cw1820,ch1365,570x/https://assets.almatalent.fi/image/1c122066-b293-5e93-9090-840177d53afe");
            
            let botembed = new Discord.MessageEmbed()
            .setDescription ("Botin komennot:")
            .setColor ("#ff2462")
            .addField ("antti moi", "vastaa sulle jotain mukavaa")
            .addField ("antti hitler", "Näyttää Hitlerin")
            .addField ("antti palikka", "Näyttää Johtaja Palikan")
            .addField ("antti stalin", "Näyttää Stalinin")
            .addField ("antti uutisoi", "uutisoi jotain mitä sanot kaikilla kaartin pääserverillä (vain kaartiliiton johtajille)")
            .addField ("antti kysy", "voit kysyä botilta jotain")
            .addField ("antti sano", "botti sanoo jotain")
            .addField ("antti äänestä", "aloittaa äänestyksen jostain")
            .addField ("antti diktaattori", "näyttää pahan diktaattorin")
            .addField ("antti kissa", "näyttää kissan owo")
            .addField ("antti jaahas", "kertoo mitä mieltä nuuska on jaahaksesta")
            .addField ("antti serveri", "kertoo tietoja serveristä")
            .addField ("antti kanava", "kertoo tietoja mainitsemastasi kanavasta")
            .addField("antti kick", "oikeesti kickaa tyyppei (jos sul on oikeudet)")
            .addField("antti liity", "Voit liittyä tägäämääsi puolueeseen. Esim. 'antti liity @randompuolue(rp)'")
            .addField("antti rahet", "Näyttää paljon sulla on raha")
            .addField("antti kaivostyö", "Voit tehdä kaivostyötä ja ansaita rahaa")
            .addField("antti poistarahe", "Voit poistaa rahaa itseltäsi tai muilta (Jos oot admin)")
            .addField("antti kello", "Kertoo kellon ajan")
            .addField("antti varoita", "Varoittaa jotain tyyppiä")
            .addField("antti varoitukset", "Näyttää sun tai jonkun muun varoitukset")
            .setThumbnail (iconr);
            
            let botembed2 = new Discord.MessageEmbed()
            .addField ("antti laki", "tekee uuden lain kaikille kaartin pääserverille (vain kaartiliiton johtajille)")
            .addField ("antti ruletti", "voit pelata venäläistä rulettia")
            .addField("antti kutsu", "antaa kutsun jolla voi lisätä antti rinne botin serverillesi")
            .addField("antti6v", "antti rinne bot kertoo mielipiteensä antti6v botista")
            .addField("antti koodi", "generoi random koodin")
            .addField("antti click", "Piilottaa sanomasi viestin kunnes joku reagoi siihen")
            .addField("antti ban kaikki", "Bännää serverin kaikki jäsenet")
            .addField("antti puolue", "Tekee uuden puolueen sanomallasi nimellä ja värillä. Sano ensin väri ja sitten nimi")
            .addField("antti muistuta", "Muistuttaa sua tietyn ajan päästä jostain")
            .addField("antti puhdista", "Poistaa tietyn määrän viestejä")
            .addField("antti pfp", "Näyttää sinun tai tägätyn tyypin profiilikuvan")
            .addField("antti piu", "Ampuu piupiu pyssyllä")
            .addField("antti pillu", "Näyttää quality nudei")
            .addField("antti bännää", "oikeesti bännää tyyppei (jos sul on oikeudet)")
            .addField("antti lähde", "Voit lähteä tägäämästäsi puolueesta. Esim. 'antti lähde @randompuolue(rp)'")
            .addField("antti siirrärahe", "Voit siirtää rahaa jollekkin")
            .addField("antti painarahe", "Voit Painaa lisää rahaa itsellesi tai muille (Jos oot admin)")
            .addField("antti muninfo", "Kertoo tietoja susta")
            .addField("antti hyvästi", "Tekee tägäämästäsi kanavasta hyvästi kanavan")
            .addField("antti tervetuloa", "Tekee tägäämästäsi kanavasta tervetuloa kanavan")
            .setThumbnail (iconr);
            
        
        
            message.channel.send (botembed);
            message.channel.send (botembed2);}
            if (message.content.startsWith('antti varoita')){
                bot.commands.get('varoita').execute(message,args);}
                if (message.content.startsWith('antti varoitukset')){
                    bot.commands.get('varoitukset').execute(message,args);}

            if(message.content.startsWith("antti click")){
                
                const args = message.content.split(' ').slice(2);
                const argsr = args.join(' ')
                

                
                let kontent ="spöileri. paina tota reaktiota nähdäksesi"
                if (message.content.includes("@everyone")){

                    message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
                   }
                   if (message.content.includes("@here")){

                    message.channel.send("älä koita tägää kaikkii homo, ei onnistu :D"); return;
                   }
                
                message.delete({ timeout: 1 })
                let viesti =await message.channel.send(kontent)
                
                await viesti.react('✔️')
                
             bot.on("messageReactionAdd",async(reaction,user)=>{
                 
             if (reaction.partial) await reaction.fetch()
             if (reaction.message.partial) await reaction.message.fetch()
             
             if (user.bot) return; 
             if (reaction.emoji.name === "✔️"){
                 
                
                viesti.edit(argsr)
                
             }
             
             return;
            
                
             }
             )}
            
           
             if(message.content.startsWith("antti ruletti")){

                

                
                message.channel.send("sano 'ammu' ja katso miten käy.")
        
                let filter = m => !m.author.bot;
                
                let collector = new Discord.MessageCollector(message.channel, filter);
               
                collector.on('collect', (message, col)=>{
             
                let vastaukset = [
                    "kuolit",
                    "selvisit",
                    "selvisit",
                    "selvisit",
                    "kuolit",
                    "selvisit",
                    "selvisit",
                ]
                let argsr = vastaukset[Math.floor(Math.random()*(vastaukset.length)-1)]

               
                
               
                    if (message.content==="ammu"){
                    
                    message.channel.send(`${argsr} ${message.author.username}`)
       
                    collector.stop();
                
                
                
                
                
            




             }})}
                
             
             if (message.content.startsWith(prefix + "piu")){
                let timer = 500
                let timer2 = 1000
                let timer3 = 1500
                let timer4 = 2000
                message.channel.send("piu") 
                setTimeout(function(){
            
            
                    message.channel.send(`,
                     |`).then(msg => {msg.delete({ timeout: 4000 });})
                }, (timer));
                setTimeout(function(){
            
            
                    message.channel.send(`,
                     |`).then(msg => {msg.delete({ timeout: 4500 });})
                }, (timer2));
                setTimeout(function(){
            
            
                    message.channel.send(`,
                     |`).then(msg => {msg.delete({ timeout: 5000 });})
                }, (timer3));
                setTimeout(function(){
            
                    
                    message.channel.send(`,
                      *
                      |
           *  -- PUM --  *
                      |
                      *`).then(msg => {msg.delete({ timeout: 5500 });})
                      message.channel.send(`Kuolit.`)
                    
                }, (timer4));}

                
             
         
                

    if (message.content.startsWith(prefix + "äänestä")){
  


       const args = message.content.split(' ').slice(2);
       const argsr = args.join(' ')

       let äänestysaihe = argsr

       let iconr = ("https://sites.google.com/site/communismaa12/_/rsrc/1468735946699/symbol-of-communism/Hammer_and_sickle.svg.png?height=1847&width=1776");

       let äänestysmebed = new Discord.MessageEmbed()
       .setDescription (äänestysaihe)
       .setTitle ("ÄÄNESTYS!")
       .setColor ("#fa7000")
       .addField ("äänestyksen aloittaja:", `${message.author.username}`)
       .setThumbnail (iconr)
        let viestiembed = await message.channel.send(äänestysmebed);
        await viestiembed.react('👍')
        await viestiembed.react('👎')
        
        ;}
        
       
            if (message.content.startsWith(prefix + "ban")){
                const args = message.content.split(' ').slice(2);
            const argsr = args.join(' ')
            let timer = 4000
            let timer2 = 8000
if (message.content.includes("@everyone")){
    message.channel.send("älä koita pingaa kaikkia"); return;
}
if (message.content.includes("@here")){
    message.channel.send("älä koita pingaa kaikkia"); return;
}
else
               
                message.channel.send(`Bännätään jäsentä ${argsr}...`) 
                setTimeout(function(){
            
            
                    message.channel.send(`${argsr} on bännätty!`)
                }, (timer));
                setTimeout(function(){
            
            
                    message.channel.send("lol luulitko oikeesti et toi toimis")
                }, (timer2));}
                
                
                if (message.content.startsWith("antti offline")){
                    message.channel.send("laitoin sulle offline tilan")
                if (message.mentions.members.first("475960989339090945")){
                message.channel.send("tiny ei oo paikalla")
                
                }}
                if (message.content.startsWith(prefix + "jaahas")){


                    let jaahasembed = new Discord.MessageEmbed()
                    .setImage("https://cdn.discordapp.com/attachments/498533846560669708/735401380654874674/unknown.png")
                    message.channel.send(jaahasembed)
                   }
                     
                   
        if (message.content.startsWith("antti kysy")){
  


            const args = message.content.split(' ').slice(2);
            const argsr = args.join(' ')

            

            let vastaukset = [
                "joo",
                "ei vitussa",
                "varmaan",
                "en tiiä mut tuomas on aika homo",
                "en tiiä",
                "totta helvetissä",
                "no ei",
                "en kerro lolololo"
            ]
            let vastaus = vastaukset[Math.floor(Math.random()*(vastaukset.length)-1)]
            if (!argsr) return message.channel.send("kysy jotakin"); 
            else
            message.channel.send(vastaus);

            
        
        }
        if (message.content.startsWith("antti kys")){
            if (message.content.startsWith("antti kysy")){return;}
               message.reply("joo tapoit ittes. eipä tuu ikävä")
           }
        if (message.content.startsWith("antti6v")){
  


            const args = message.content.split(' ').slice(2);
            const argsr = args.join(' ')

            

            let vastaukset = [

                "jos olet antti 6v, ammu itsesi.",
                "laskin juuri kaikki ihmiset jotka pitävät antti 6v botista. vastaus: **0**",
                "antti 6v ansaitsee kuolla",
                "tiedätkö mikä on discordin paskin botti, hmm TIETYSTI ANTTI 6V",
                "antti 6v on pelkkä halpa kopio",
                "antti 6v on paskaa"
            ]
            let vastaus = vastaukset[Math.floor(Math.random()*(vastaukset.length)-1)]
            if (!argsr){
            
            message.channel.send(vastaus);}  }

            if (message.content.startsWith("antti kutsu")){

                let linkembed = new Discord.MessageEmbed()
                .setTitle("Antti Rinne Bot Kutsu")
                .setURL('https://discord.com/oauth2/authorize?client_id=728310791648051252&scope=bot&permissions=2147483647')
                .setDescription("^ Paina Tästä ^")
                message.channel.send(linkembed)
    
                }

            if (message.content.startsWith("antti koodi")){

 
    
                let vastaukset = [
    
                    "9",
                    "2",
                    "3",
                    "8",
                    "5",
                    "1"
                ]
                let vastaus = vastaukset[Math.floor(Math.random()*(vastaukset.length))]
                let vastaus2 = vastaukset[Math.floor(Math.random()*(vastaukset.length))]
                let vastaus3 = vastaukset[Math.floor(Math.random()*(vastaukset.length))]
                let vastaus4 = vastaukset[Math.floor(Math.random()*(vastaukset.length))]
                let vastaus5 = vastaukset[Math.floor(Math.random()*(vastaukset.length))]
                let vastaus6 = vastaukset[Math.floor(Math.random()*(vastaukset.length))]
                
                let koodiembed = `${vastaus} ${vastaus2} ${vastaus4} ${vastaus3} ${vastaus6} ${vastaus5}`


                message.channel.send(koodiembed)
                }
                let vastaukset = [
    
                    "9",
                    "2",
                    "3",
                    "8",
                    "5",
                    "1"
                ]
                

                //if (message.content.includes(())){
  //message.channel.send("koodi tunnistettu")
  //console.log ("koodi tunnistettu")


                    //const args = message.content.split(' ').slice(2);
                    //const argsr = args.join(' ')
             
                    //let äänestysaihe = argsr 
                //}
        
      
        if(message.content.startsWith("antti kissa")){

            let kissat = [
                "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg",
                "https://i.pinimg.com/originals/f3/bd/84/f3bd8497e15399201b634714ec5ed390.jpg",
                "https://jimiamy.com/wp-content/uploads/2019/09/d254ec3ab776e4345aaef1ced0379e23.jpg",
                "https://i.redd.it/h960wucqdfj21.jpg",
                "https://cdn.discordapp.com/attachments/726480015562113156/733099294734680074/template_0.png",
                "https://cdn.discordapp.com/attachments/508239343580872706/732885713330372608/Screenshot_20200414_222558.jpg",
                "https://cdn.discordapp.com/attachments/508239343580872706/732885714210914314/Screenshot_20200413_144234.jpg",
                "https://data.whicdn.com/images/337304688/original.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b8/Cute_cat_%281698598876%29.jpg",
                "https://besthqwallpapers.com/Uploads/9-8-2019/100609/thumb2-cute-kitten-little-cute-cat-kitten-on-a-white-background-cute-animals-cats.jpg",
                "https://cdn140.picsart.com/300025532197201.jpg",
                "https://66.media.tumblr.com/036c3491ca544f1893a284b5ac746fd7/tumblr_pvxkrjVzhA1xb21v7o2_500.jpg"


            ]
            let kissa = kissat[Math.floor(Math.random()*(kissat.length)-1)]
            let kissamebed = new Discord.MessageEmbed()
            .setDescription ("kissa owo")
            .addField ("jos kuva ei näy paina tästä:", kissa)
            .setImage (kissa);
            message.channel.send(kissamebed);
           

            if (message.content.startsWith("antti laitanude")){
                let vauhtimursu = new Discord.MessageEmbed()
                .setImage("")
            }

        }
        if (message.content.startsWith("oon")){
  

            
            const args = message.content.split(' ').slice(1);
            const argsr = args.join(' ')
            let olet = argsr
            if (message.author === bot) return;
            if (message.content.includes("@everyone")){
                message.channel.send("luuletko et toi toimii"); return }
                if (message.content.includes("@here")){
                   message.channel.send("luuletko et toi toimii"); return }
                else
     
            
            message.channel.send("moi " + `**${(olet)}**` + ", mä oon antti")}

            if(cmd === `${prefix}host`){

               

                    let timer = 3000
                    message.channel.send("Tarkistetaan Hostia..") 
                    setTimeout(function(){
                
                
                        message.channel.send("Antti Rinne on toiminnassa, Hostataan serverillä:https://git.heroku.com/anttirinne.git ")
                    }, (timer));
                   
                }
    
    
    
    if (message.content.startsWith("olen")){
      
    
    
        const args = message.content.split(' ').slice(1);
        const argsr = args.join(' ')
    
        let olet = argsr
        message.channel.send("moi " + `**${(olet)}**` + ", mä olen antti")}

                if (message.content.startsWith(prefix + "uutisoi")){
                    const uutiskanava = bot.channels.cache.get(`722794641971478568`) 
                    const uutiskanava2 = bot.channels.cache.get(`725099335087423519`) 
                    const uutiskanava3 = bot.channels.cache.get(`710449362999967766`) 

                   const args = message.content.split(' ').slice(2);
                   const argsr = args.join(' ')
                   
                   let uutisembed = new Discord.MessageEmbed()
                   .setTitle (`Uutisissa tänään:`)
                   .setDescription (argsr)
                   .addField ("toimittaja:", message.author.username)

                   if (!message.member.roles.cache.get(`731910354497437768`) && (!message.member.roles.cache.get(`731894374132351066`)&&(!message.member.roles.cache.get(`726922411848499211` )))) return message.channel.send('vain toimittajat voi tehdä uutisia');
                   else

                   uutiskanava.send(uutisembed)
                   uutiskanava.send('@everyone').then(msg => {msg.delete();
                    message.channel.send("**Uutiset on nyt lähetetty kaikkien pääserverien uutiskanaville!**")
                   uutiskanava2.send(uutisembed)
                   uutiskanava2.send('@everyone').then(msg => {msg.delete();
                   uutiskanava3.send(uutisembed)
                   uutiskanava3.send('@everyone').then(msg => {msg.delete();
  })})})
                }

                if (message.content.startsWith(prefix + "laki")){
                    const uutiskanava = bot.channels.cache.get(`733402642734121002`) 
                    const uutiskanava2 = bot.channels.cache.get(`735185159112097792`) 
                    const uutiskanava3 = bot.channels.cache.get(`717844596716994651`) 

                   const args = message.content.split(' ').slice(2);
                   const argsr = args.join(' ')
                   
                   let uutisembed = new Discord.MessageEmbed()
                   .setTitle (`Uusi Laki:`)
                   .setDescription (argsr)
                   .addField ("Lain toimeen panija:", message.author.username)

                   if (!message.member.roles.cache.some(r => r.name === "Kaartinliiton johtaja")){

                    message.reply('Vain kaartin johtajat voivat tehdä lakeja..');
                    return;
                }
                else

                   uutiskanava.send(uutisembed)
                   uutiskanava.send('@everyone').then(msg => {msg.delete();
                    message.channel.send("**Laki on nyt julkaistu kaikkien pääserverien laki kanavilla!**")
                   uutiskanava2.send(uutisembed)
                   uutiskanava2.send('@everyone').then(msg => {msg.delete();
                   uutiskanava3.send(uutisembed)
                   uutiskanava3.send('@everyone').then(msg => {msg.delete();
  })})})
                }    
if (cmd===`antti serveri`){

let serverembed= new Discord.MessageEmbed()
.setTitle('Tämän servun tiedot:')
.setColor('#ff1100')
.setThumbnail(message.guild.iconURL())
.addField('Jäseniä:', message.guild.memberCount)
.addField('Omistaja:',message.guild.owner)
.addField('Tehty:', message.guild.createdAt)
.addField('ID:', message.guild.id)
message.channel.send(serverembed)


}

if(message.content.startsWith('antti kanava')){

let kanava = message.mentions.channels.first();

let embed = new Discord.MessageEmbed()
.setTitle('Kanavan Tiedot:')
.addField('Nimi:', kanava.name)
.addField('ID:', kanava.id)
.addField('Tehty:',kanava.createdAt)
message.channel.send(embed)
 }
 if(message.content.startsWith('antti rooli')){

    let kanava = message.mentions.roles.first();
    
    let embed = new Discord.MessageEmbed()
    .setTitle('Roolin Tiedot:')
    .addField('Nimi:', kanava.name)
    .addField('ID:', kanava.id)
    .addField('Tehty:',kanava.createdAt)
    message.channel.send(embed)
     }
     if (message.content.startsWith("antti daddy")){

        let embed = new Discord.MessageEmbed()
        .setImage("https://cdn.discordapp.com/attachments/589890829343260703/736222101941256263/unknown.png")
        message.channel.send(embed)
     }
     if(message.content.startsWith('antti munrooli')){

        let kanava = message.author
        
        let embed = new Discord.MessageEmbed()
        .setTitle('Roolin Tiedot:')
        .addField('Nimi:', kanava.name)
        .addField('ID:', kanava.id)
        .addField('Tehty:',kanava.createdAt)
        message.channel.send(embed)
         }
         if(message.content.startsWith('antti muninfo')){

            bot.commands.get('muninfo').execute(message, args);
         }
         if(message.content.startsWith('antti kello')){

            bot.commands.get('kello').execute(message, args);
         }

         if(message.content.startsWith('antti rahet')){

            bot.commands.get('rahet').execute(message, args);
         }
         
         if(message.content.startsWith('antti osta')){

            bot.commands.get('osta').execute(message, args);
         }
         if(message.content.startsWith('antti tavarat')){

            bot.commands.get('tavarat').execute(message, args);
         }
         if(message.content.startsWith('antti tervetuloa')){

            bot.commands.get('tervetuloa').execute(message, args);
         }
         if(message.content.startsWith('antti hyvästi')){

            bot.commands.get('hyvästi').execute(message, args);
         }
         if(message.content.startsWith('antti poistarahe')){

            bot.commands.get('poistarahe').execute(message, args);
         }
         if(message.content.startsWith('antti siirrärahe')){

            bot.commands.get('siirrärahe').execute(message, args);
         }
         if(message.content.startsWith('antti kaivostyö')){

            bot.commands.get('kaivostyö').execute(message, args);
         }
         

         if(message.content.startsWith('antti muistuta dm')){
            
            const args = message.content.split(' ').slice(5);
       const argsr = args.join(' ')
       


       const args2 = message.content.split(' ').slice(3);
       const argsr2 = args2.join(' ')
       const määrä =  parseInt(argsr2);
            if (message.content.includes("sec")){
                aika = määrä * 1000
            }
            if (message.content.includes("min")){
                aika = määrä * 1000 * 60
            }
            if (message.content.includes("hour")){
                aika = määrä * 1000 * 60 * 60
            }
       let timer = aika
       
            message.channel.send("Muistutus laitettu") 
            setTimeout(function(){
        
        
               message.author.send(`${message.author} Muistutus: ${argsr}`)
            }, (timer)); }

            if(message.content.startsWith('antti muistuta')){
                const args = message.content.split(' ').slice(4);
           const argsr = args.join(' ')
           
    
    
           const args2 = message.content.split(' ').slice(2);
           const argsr2 = args2.join(' ')
           const määrä =  parseInt(argsr2);
                if (message.content.includes("sec")){
                    aika = määrä * 1000
                }
                if (message.content.includes("min")){
                    aika = määrä * 1000 * 60
                }
                if (message.content.includes("hour")){
                    aika = määrä * 1000 * 60 * 60
                }
                if (message.content.includes("day")){
                    aika = määrä * 1000 * 60 * 60 * 24
                }
           let timer = aika
           
           if (message.content.startsWith("antti muistuta dm")) return;
        
           if (message.content.includes("@everyone")){
               message.channel.send("älä yritä :D"); return
           }
           if (message.content.includes("@here")){
            message.channel.send("älä yritä :D"); return
        }
        else
                message.channel.send("Muistutus laitettu") 
                setTimeout(function(){
            
            
                    message.channel.send(`${message.author} Muistutus: ${argsr}`)
                }, (timer));
    
    if (!määrä){
        message.channel.send('Tee näin: "antti muistuta (**jokin aika** sec/min/hour) (jokin asia josta haluat muistutuksen)" ')
    }
    if (!argsr){
        message.channel.send('Tee näin: "antti muistuta (**jokin aika** sec/min/hour) (jokin asia josta haluat muistutuksen)" ')
    }
    
    
    
    
    
             }
         
         if(message.content.startsWith("antti diktaattori")){
        let antti = "https://images.cdn.yle.fi/image/upload//w_1199,h_675,f_auto,fl_lossy,q_auto:eco/13-3-10679965.jpg";
        let botembed = new Discord.MessageEmbed()
        .setDescription ("Paha diktaattori")
        .setColor ("#ff1100")
        .setImage (antti)


        
        
    
    
        return message.channel.send (botembed);}



        if(cmd === `${prefix}lippu`){
            let antti = "https://media.tenor.com/images/1f8af0915dcaf3896f785fca43809b2c/tenor.gif";
            let botembed = new Discord.MessageEmbed()
            .setColor ("#ff1100")
            .setImage (antti)
    
            
            
            
        
        
            return message.channel.send (botembed);}

            if (message.content.startsWith('antti ime munaa')){
                message.reply("ime ihan ite")}

if (message.content.startsWith('antti ping')){
bot.commands.get('ping').execute(message,args);}


            if(cmd === `${prefix}apua`){
                message.reply("tapa nyt jo ittes ja sano antti komennot")
            };
            if(cmd === `${prefix}apuu`){
                message.reply("tapa nyt jo ittes ja sano antti komennot")
            };




            if (message.content.startsWith("antti")){

                
                if (message.content.includes(" ")) return;
                if (message.content.includes("6v")) return;

                message.reply("sano **antti komennot** nähdkäksesi kaikki komennot (äläkä vittu spämmi jotain antti apuu, en oo auttamassa lol)")
               
            };
           

});


bot.login(botconfig.token);


 
const botconfig = require ("./botconfig.json");
const Discord = require ("discord.js");
const fs = require ("fs");
const { prependListener } = require("process");
const bot = new Discord.Client ({disableEveryone: true})
const cheerio = require ("cheerio")
const request = require ("request")
bot.commands = new Discord.Collection();

 const komentoFiles = fs.readdirSync('./komennot/').filter(file=> file.endsWith('.js'));
for (const file of komentoFiles){

    const komento = require(`./komennot/${file}`);
    bot.commands.set(komento.name, komento);
}



let lentokenttä = '730081550871560293';
let rikosrekisteri = '731656123450392587';
let tinynlogi = '733116132000530543';
let terve = '';

bot.on("guildMemberAdd", member =>{

if (member.guild.id !== '715220802135654431') return;

bot.channels.cache.get(lentokenttä).send(`tervetuloo tänne :DD ${member}! muista lukee säännöt tai tulee turpaan`);
})
bot.on("guildMemberRemove", member =>{

    if (member.guild.id !== '715220802135654431') return;
    
    bot.channels.cache.get(lentokenttä).send(`tämmönen kapitalisti kun **${member.username}** lähti pois täältä`);
    })
    


    bot.on("guildMemberAdd", member =>{

        if (member.guild.id !== '715220802135654431') return;
        
        bot.channels.cache.get(terve).send(`tervetuloo tänne :DD ${member}! muista lukee säännöt tai tulee turpaan`);
        })
        bot.on("guildMemberRemove", member =>{
        
            if (member.guild.id !== '715220802135654431') return;
            
            bot.channels.cache.get(terve).send(`tämmönen kapitalisti kun **${member.username}** lähti pois täältä`);
            })

    bot.on("messageDelete", message =>{
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
    let kanava = bot.channels.cache.get(`726480015562113156`)
    console.log (`${bot.user.username} is online`);
    bot.user.setActivity("seksi on väliaikaista mutta kermisen rahat ovat ikuisia");
    kanava.send("vituttaako jo?")
     
});

bot.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split("  ");
    let cmd = messageArray [0];
    let args = messageArray.slice(1);

 


    if(cmd === `${prefix}moi`){
        return message.channel.send ("tapa ittes")};

        
    
    if(cmd === `${prefix}hitler`){
        let hitler = "https://c8.alamy.com/comp/FKKP0H/adolf-hitler-a-rare-image-of-the-german-wartime-leader-smiling-from-FKKP0H.jpg";
        let botembed = new Discord.MessageEmbed()
        .setDescription ("Hitler")
        .setColor ("#ff1100")
        .setImage (hitler)
        


        return message.channel.send (botembed);

        
    }
    if (message.content.startsWith(prefix + "sano")){
        const uutiskanava = bot.channels.cache.get(`722794641971478568`) 
        const uutiskanava2 = bot.channels.cache.get(`725099335087423519`) 
        const uutiskanava3 = bot.channels.cache.get(`710449362999967766`) 

       const args = message.content.split(' ').slice(2);
       const argsr = args.join(' ')
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
        
        
        
          
        
        
    if(cmd === `${prefix}stalin`){
        let stalin = "https://memegenerator.net/img/images/14715665.jpg";
        let botembed = new Discord.MessageEmbed()
        .setDescription ("Stalin")
        .setColor ("#ff1100")
        .setImage (stalin)
        


        return message.channel.send (botembed);

        
    }
    if(cmd === `${prefix}palikka`){
        let palikka = "https://cdn.discordapp.com/attachments/476026518473015308/728346605799079976/palikka.jpg";
        let botembed = new Discord.MessageEmbed()
        .setDescription ("Suuri Palikka")
        .setColor ("#ff1100")
        .setImage (palikka)
        .addField ("Palvokaa", "johtajaa");
        
    
    
        return message.channel.send (botembed);}
        
        if(cmd === `${prefix}komennot`){
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
            .addField ("antti laki", "tekee uuden lain kaikille kaartin pääserverille (vain kaartiliiton johtajille)")
            .addField ("antti ruletti", "voit pelata venäläistä rulettia")
            .addField("antti kutsu", "antaa kutsun jolla voi lisätä antti rinne botin serverillesi")
            .addField("antti6v", "antti rinne bot kertoo mielipiteensä antti6v botista")
            .addField("antti koodi", "generoi random koodin")

            
            
            .setThumbnail (iconr);
            
            
        
        
            return message.channel.send (botembed);}
            if (message.content.startsWith('antti varoita')){
                bot.commands.get('varoita').execute(message,args);}
                if (message.content.startsWith('antti varoitukset')){
                    bot.commands.get('varoitukset').execute(message,args);}

            if(message.content.startsWith("antti click")){
                const args = message.content.split(' ').slice(2);
                const argsr = args.join(' ')
                message.delete({ timeout: 1 })

                
                let kontent ="spöileri. paina tota reaktiota nähdäksesi"
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
             bot.on("messageReactionRemove",async(reaction,user)=>{
                if (reaction.partial) await reaction.fetch()
                if (reaction.message.partial) await reaction.message.fetch()
                
                if (user.bot) return; 
                if (reaction.emoji.name === "✔️"){
   
                   viesti.edit("spöileri");
                   


                }}
                
             )}
             )}
            

             
             if(cmd === `${prefix}ruletti`){

                

                
                let kontent ="reagoi nähdäksesi mitä kävi"
                let viesti =await message.channel.send(kontent)
                await viesti.react('✔️')
                
             bot.on("messageReactionAdd",async(reaction,user)=>{
                let vastaukset = [
                    "kuolit",
                    "selvisit",
                    "selvisit",
                    "selvisit",
                    "kuolit",
                    "selvisit"
                ]
                let argsr = vastaukset[Math.floor(Math.random()*(vastaukset.length)-1)]

             if (reaction.partial) await reaction.fetch()
             if (reaction.message.partial) await reaction.message.fetch()
             
             if (user.bot) return; 
             
             if (reaction.emoji.name === "✔️"){
                
                viesti.edit(`${argsr} ${message.author.username}`)
                
                return;
                
             }})
return;



             }
                
             "Field title", "Your text here: [link](http://example.com)"

             if(cmd === `${prefix}kutsu`){

             let linkembed = new Discord.MessageEmbed()
             .setTitle("Antti Rinne Bot Kutsu")
             .setURL('https://discord.com/oauth2/authorize?client_id=728310791648051252&scope=bot&permissions=2147483647')
             .setDescription("^ Paina Tästä ^")
             message.channel.send(linkembed)

             }
                

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

        if (message.content.startsWith(prefix + "kysy")){
  


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
        
      
        if(cmd === `${prefix}kissa`){

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
           



        }
        if (message.content.startsWith("oon")){
  


            const args = message.content.split(' ').slice(1);
            const argsr = args.join(' ')
     
            let olet = argsr
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
                    const uutiskanava = bot.channels.cache.get(`722778463315951717`) 
                    const uutiskanava2 = bot.channels.cache.get(`724687471371223100`) 
                    const uutiskanava3 = bot.channels.cache.get(`717844596716994651`) 

                   const args = message.content.split(' ').slice(2);
                   const argsr = args.join(' ')
                   
                   let uutisembed = new Discord.MessageEmbed()
                   .setTitle (`Uusi Laki:`)
                   .setDescription (argsr)
                   .addField ("Lain toimeen panija:", message.author.username)

                   if (!message.member.roles.cache.get(`731910354497437768`) && (!message.member.roles.cache.get(`731894374132351066`)&&(!message.member.roles.cache.get(`726922411848499211` )))) return message.channel.send('vain toimittajat voi tehdä uutisia');
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
     if(message.content.startsWith('antti munrooli')){

        let kanava = message.author
        
        let embed = new Discord.MessageEmbed()
        .setTitle('Roolin Tiedot:')
        .addField('Nimi:', kanava.name)
        .addField('ID:', kanava.id)
        .addField('Tehty:',kanava.createdAt)
        message.channel.send(embed)
         }
    if(cmd === `${prefix}diktaattori`){
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
            bot.on('message', message => {
 
                let args = message.content.substring(prefix.length).split(" ");
             
                switch (args[0]) {
                    case 'kuva':
                    image(message);
             
                    break;
                }
             
            });
            function image(message){
                const args = message.content.split(' ').slice(2);
       const argsr = args.join(' ')
 
                var options = {
                    url: "http://results.dogpile.com/serp?qc=images&q=" + argsr,
                    method: "GET",
                    headers: {
                        "Accept": "text/html",
                        "User-Agent": "Chrome"
                    }
                };
             
             
             
             
             
                request(options, function(error, response, responseBody) {
                    if (error) {
                        return;
                    }
             
             
                    $ = cheerio.load(responseBody);
             
             
                    var links = $(".image a.link");
             
                    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
                   
                    console.log(urls);
             
                    if (!urls.length) {
                       
                        return;
                    }
             
                    // Send result
                    message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
                });

}});


bot.login(botconfig.token);

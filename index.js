
 
const botconfig = require ("./botconfig.json");
const Discord = require ("discord.js");
const fs = require ("fs");
const { prependListener } = require("process");
const bot = new Discord.Client ({disableEveryone: true})
bot.commands = new Discord.Collection();

fs.readdir("./komennot/", (err, files)=>{

    if (err) console.log(err);

    let jsfile = files.filter (f => f.split(".").pop === "js")
    if (jsfile.length <= 0){
        console.log("en löyrä komentoi :(")
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require (`./komennot/${f}`);
        console.log (`${f} ladattu`);
        bot.commands.set(props.help.name, props);
    })
})



bot.on("ready", async () => {
    let kanava = bot.channels.cache.get(`726480015562113156`)
    console.log (`${bot.user.username} is online`);
    bot.user.setActivity("seksi on väliaikaista mutta kermisen rahat ovat ikuisia");
    kanava.send("en oo sillä tavalla niinkun offline")
     
});

bot.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split("  ");
    let cmd = messageArray [0];
    let args = messageArray.slice(1);

    bot.on("guildMemberAdd", member =>{


        const tervetuloa = member.guild.channels.cache.find(channel => channel.id === '733027792492429413')
        tervetuloa.send(`Tervetulloo vaan tänne ${member}`)
    })

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
            let iconr = ("https://sites.google.com/site/communismaa12/_/rsrc/1468735946699/symbol-of-communism/Hammer_and_sickle.svg.png?height=1847&width=1776");
            
            let botembed = new Discord.MessageEmbed()
            .setDescription ("Botin komennot:")
            .setColor ("#ff2462")
            .addField ("moi", "vastaa sulle jotain mukavaa")
            .addField ("hitler", "Näyttää Hitlerin")
            .addField ("palikka", "Näyttää Johtaja Palikan")
            .addField ("stalin", "Näyttää Stalinin")
            .addField ("uutisoi", "uutisoi jotain mitä sanot kaikilla kaartin pääserverillä")
            .addField ("kysy", "voit kysyä botilta jotain")
            .addField ("sano", "botti sanoo jotain")
            .addField ("äänestä", "aloittaa äänestyksen jostain")
            .addField ("diktaattori", "näyttää pahan diktaattorin")
            .addField ("kissa", "näyttää kissan owo")
            .addField ("jaahas", "kertoo mitä mieltä nuuska on jaahaksesta")
            .addField ("lippu", "heiluttaa neuvostoliiton lippua")
            
            
            .setThumbnail (iconr);
            
            
        
        
            return message.channel.send (botembed);}
            

            if(cmd === `${prefix}jaahas`){

                message.channel.send("tunge se jaahas eesterin perseeseen t.nuuska")
            }

if(cmd === `${prefix}ei`){
            
    let botembed = new Discord.MessageEmbed()
    .setDescription ("Botin komennot:")
    .setColor ("#ff2462")
    .addField ("moi", "vastaa sulle jotain mukavaa")
    .addField ("hitler", "Näyttää Hitlerin")
    .addField ("palikka", "Näyttää Johtaja Palikan")
    .addField ("stalin", "Näyttää Stalinin");
    


    return message.channel.send (botembed);}

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

                if (message.content.startsWith(prefix + "sano")){
                    const uutiskanava = bot.channels.cache.get(`722794641971478568`) 
                    const uutiskanava2 = bot.channels.cache.get(`725099335087423519`) 
                    const uutiskanava3 = bot.channels.cache.get(`710449362999967766`) 

                   const args = message.content.split(' ').slice(2);
                   const argsr = args.join(' ')
 message.channel.send (argsr)
                message.delete({ timeout: 1 })
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


bot.login(process.env.token);

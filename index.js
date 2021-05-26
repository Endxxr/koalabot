console.log("The koala woke up!")
const fs = require('fs');
const Discord = require('discord.js')
const bot = new Discord.Client();
const { token } = require("./config.json");
const { brotliCompress } = require('zlib');
const { Console } = require('console');

 
//Create an array that have inside all the command avaible 

bot.commands = new Discord.Collection(); 
console.log("Loading Commands...")
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
let cmdnames = []
for (const file of commandFiles) {
	console.log("Requiring File")
    const command = require(`./commands/${file}`);
    
    let cmdname = command.name //Creates an array with the name of all commands
    cmdnames.push('?'+ cmdname)
    

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	bot.commands.set(command.name, command);
}
console.log(bot.commands)



//Create an array that have inside all audios avaible 
console.log("Loading Audio Files...")
const AudioFiles = fs.readdirSync('./audio').filter(file => file.endsWith('.mp3'));
console.log(AudioFiles)






let message 
let cooldownarray = [];

const isNSFW = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Comando NSFW')
    .setDescription("Dato il tipo di umorismo che non puo' piacere a tutti e alcuni possono trovarlo offensivo, l'utilizzo di questo comando e' riservato ai canali NSFW.")
    .addField('Versione', 'Alpha 0.0.2')

const StartEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Bot Avviato')
    .setDescription(':white_check_mark: **BOT AVVIATO**')
    .addField('Ender', 'Alpha 0.0.2')

const StopEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Il Koala Va A Dormire')
    .setDescription(':x: **BOT STOPPATO** richiesto da un amministratore in chat.')


//Prefix

var prefix = "?"
const gods = ["ender", "Ender", "<@!835174121708978248>", "<@!503999815261356032>", "enderf5027", "leus", "koala", "etsunov", "pellicano", "leus"] //Users that cant be mentioned in offensive commands
const admins = ["503999815261356032", "504004837390942302"]

//ready

bot.on("ready", (ready) => {
    console.log("Setting Presence...")
    bot.user.setActivity("Pornhub", {
        type: "WATCHING",
        url: "https://www.twitch.tv/cekko_104"
    })
        .catch(console.error);    
    console.log("[STATUS] Bot Online")
    bot.channels.cache.get("835260489276981256").send(StartEmbed);


})


bot.on("message", (message) => {
    
    const { member } = message
    if (member == null) {
        console.log("[ERROR] Member is null! Why ? It doesn't matter btw") //idk why, but if Mee6 sends a message with an embed inside, member = null
        return
    }

    if (member.user.bot)  return //Ignore bot's messages
    
    
    let args = message.content.split(" "); //splits the message into array 
    
    let guildID = message.guild.id; 
    let userID = message.member.id;
    let command = args[0]   
    let cooldown
    let cmd = args[0] 
    
    if (cmdnames.includes(cmd)) {
        cmd = cmd.substring(1, cmd.length+1) + ".js" 
        cmdfile = require(`./commands/${cmd}`) //Require from the file the cooldown
        cooldown = cmdfile.cooldown
        cooldown = Number(cooldown) //Convert the string to a number
    }

    let cooldownstring = `${command}-${userID}-${guildID}-${cooldown}` //?command-123456789-123456789-69
    console.log(cooldownstring)
        
    if (cooldownarray.length > 0 && cooldownarray.includes(cooldownstring)) { //If the cooldownstring is in the array, prevent the execution of the commands
        message.reply(`Stai infastidendo il koala ! Aspetta prima di ripetere quel comando. Devi aspettare ${cooldown} secondi tra un comando e l'altro`)
        return
    }

    cooldownarray.push(cooldownstring) //Add a cooldown for that user
    
    //After x seconds, the cooldown of the command get deleted 
    if (cooldownarray.length > 0) { 
        setTimeout(() => {
            cooldownarray = cooldownarray.filter((string) => {
                return string !== cooldownstring 
                
            })
        }, cooldown*1000);  
} 
    
    bot.commands.get('sentences').execute(message, args, gods) 

    switch (args[0]) { 
    
        case "?clearcooldowns":
            bot.commands.get('clearcooldowns').execute(message, args, cooldownarray)
            break
        
        case "?soluzionefinale":
            bot.commands.get('soluzionefinale').execute(message, isNSFW)
            break
        case "?donna":
            bot.commands.get('donna').execute(message, args, isNSFW)
            break   
        case "?slowmode":
            bot.commands.get('slowmode').execute(message, args)
            break
        case "?userinfo":
            bot.commands.get('userinfo').execute(message, args);
            break
        
        case "?eat":  
            bot.commands.get('eat').execute(message, args);
            break
        //case "?sex":
        //    bot.commands.get('sex').execute(message, args) 
        //    break
        
        case "?cinque":
            bot.commands.get('cinque').execute(message, args);
            break
        
        case "?stop":
           bot.commands.get('stop').execute(message, args);
        break    
        
        case "?help":
            bot.commands.get('help').execute(message, args, fs);
            break


        case "?nero":
            bot.commands.get('nero').execute(message, args, isNSFW);
            break
        
        case "?gay":
            bot.commands.get('gay').execute(message, args, isNSFW);
            break
        

        case "?lavora":
            bot.commands.get('lavora').execute(message, args);
            break

        case "?ora":
            console.log("[Command] ?data " + message.author)
            var data = new Date()
            var hour = data.getHours()
            var minute = data.getMinutes()
            var second = data.getSeconds()
            message.channel.send(":alarm_clock: Attualmente sono le " + hour + ":" + minute + ":" + second)
        break

        case "?serverinfo":
            let server = message.member.guild
            let botsinserver = server.members.cache.filter(member => member.user.bot).size
            bot.commands.get('serverinfo').execute(message, server, botsinserver);
            break

        case "?audio":
            let CanaleVocale = message.member.voice.channel;
            bot.commands.get('audio').execute(message, args, CanaleVocale, AudioFiles);
            break
        case "?invite":
            bot.commands.get('invite').execute(message, args)
            break
            
    }
          
})


module.exports = { stop }; //Read stop.js

function stop() {
    bot.channels.cache.get('835260489276981256').send(StopEmbed)
    console.log("Il Koala Aiutante va a dormire :( ")
    process.exit()
}



bot.login(token)
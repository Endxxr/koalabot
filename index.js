const fs = require('fs');
const Discord = require('discord.js')
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
console.log("Loading Commands...")
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //Create an array with all the commands 
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	bot.commands.set(command.name, command);
}

const { token } = require("./config.json")
console.log(bot.commands)




let message 


const StartEmbed = new Discord.MessageEmbed() //when the bot starts, it will send a message in a specific channel
    .setColor('#0099ff')
    .setTitle('Bot Avviato')
    .setDescription(':white_check_mark: **BOT AVVIATO**')
    .addField('Versione', 'Alpha 0.0.1')

const StopEmbed = new Discord.MessageEmbed() //when the bot stops, it will send a message in a specific channel
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
        url: "https://www.twitch.tv/cekko_104"  //Twitch channel
    })
        .catch(console.error);    
    console.log("[STATUS] Bot Online")
    bot.channels.cache.get("835260489276981256").send(StartEmbed); //read line 24

})


bot.on("message", (message) => {
    
    let args = message.content.split(" "); //splits the message into array 

    switch (args[0]) {
        
        case "?stop":
           bot.commands.get('stop').execute(message, args);
        break    
        
        case "?help":
            bot.commands.get('help').execute(message, args);
            break


        case "?nero":
            bot.commands.get('nero').execute(message, args);
            break


        case "Mi":   
            if (args[1] === "dissocio") {
                message.channel.send("Anche io")
                message.react("😬")
            } else {
                break
            }
            
            break
        
        case "Ciao":  //iao = Ciao : At line 13 the script deletes the first letter of Ciao
            console.log("[Automatic] Saluto un amico debole")
            message.react("👋")
            message.reply("Ciao amico debole")

        break
        
        
        case "?gay":
            bot.commands.get('gay').execute(message, args);
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
            bot.commands.get('audio').execute(message, args, CanaleVocale);
            break
    }
})


module.exports = { stop };

function stop() {
    bot.channels.cache.get('835260489276981256').send(StopEmbed) //read line 30
    console.log("Il Koala Aiutante va a dormire :( ")
    process.exit()
}



bot.login(token) //set the token in the config
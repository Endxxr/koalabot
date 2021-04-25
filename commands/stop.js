module.exports = {
	name: 'stop',
	execute(message, args) {
		const admins = ["504004837390942302", "503999815261356032"]
        const Discord = require('discord.js')
        const stop = require('../index.js')
        bot = new Discord.Client();
        
                                         
        if (admins.includes(message.author.id)) {
            console.log("[POWER] BOT STOP PERFORMED BY: " + message.author.id)
            message.channel.send("**[STOP] Sei sicuro ?** <@!" + message.author.id + ">")
            message.react("✅")
            message.react("❌")
            var filtro = (reaction, user) => ["✅", "❌"].includes(reaction.emoji.name) && user.id == message.author.id;
            message.awaitReactions(filtro, { max: 1, time: 10000 })
                    .then(collected => {
                        var reazione = collected.first().emoji.name;
                        if (reazione == "✅") {
                            message.channel.send("Stop tra poco");
                            console.log("[POWER] Stop confirmed")
                            stop.stop()
                        }
                        if (reazione == "❌") {
                            message.channel.send("Stop annulato");
                            console.log("[POWER] Stop cancelled");
                            return
                        }

                    }).catch(collected => {
                        console.log("[POWER] Time Expire")
                        return message.channel.send("Tempo scaduto!");
                    })

            
            } else {
                message.channel.send("Birbantello, volevi far andare a dormire il koala aiutante ?")
                console.log("[DENIED] A user tried to stop the bot. Why he would do that ?")
        }
        
    }
};

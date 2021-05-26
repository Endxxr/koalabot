module.exports = {
    name: 'cinque',
    description: 'Dai il cinque alla persona menzionata | Cooldown: 1 sec | Uso: ?cinque _@menzione_',
    cooldown: '1',
    execute(message,args) {
        const Discord = require('discord.js')
        bot = new Discord.Client()
        console.log("[Command] ?cinque " + message.author)    
        mention = args[1]
        if (mention == undefined) {
            message.channel.send("Specifica una persona")
        } else {
            message.channel.send("Il Koala Aiutante da' il cinque a " + mention )
            message.react("👏")
        }  
    }
}

module.exports = {
    name: 'gay',
    description: 'Insulta la persona menzionata | Cooldown: 1 sec | Uso: ?gay _@menzione_ | NSFW',
    cooldown: '1',
    execute(message, args, isNSFW) {
        if (message.channel.nsfw == false) return message.channel.send(isNSFW)
        const Discord = require('discord.js')
        bot = new Discord.Client()
        const gods = ["ender", "Ender", "<@!835174121708978248>", "<@!503999815261356032>", "enderf5027", "leus", "koala", "etsunov", "pellicano", "leus"] //Users that cant be mentioned in offensive commands

        console.log("[Command] ?gay " + message.author)    
        mention = args[1]
        if (mention == undefined) {
            message.channel.send("Specifica una persona")
        } else if (gods.includes(mention)) {
            message.channel.send("No, tu")
        } else {
            message.channel.send(mention + " e' gay, lol XD")
        }  
    }
}


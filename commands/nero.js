module.exports = {
    name: 'nero',
    execute(message,args) {
        const Discord = require('discord.js')
        bot = new Discord.Client()
        const gods = ["ender", "Ender", "<@!835174121708978248>", "<@!503999815261356032>", "enderf5027", "leus", "koala", "etsunov", "pellicano", "leus"] //Users that cant be mentioned in offensive commands

        console.log("[Command] ?nero " + message.author)    
        mention = args[1]
        if (mention == undefined) {
            message.channel.send("Specifica una persona")
            
        } else if (gods.includes(mention)) {
            message.channel.send("No, tu")
        } else {
            message.channel.send("La pelle di " + mention + " non e' bianca, 100 % sicuro")
        }  
    }
}


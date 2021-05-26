module.exports = {
    name: 'nero',
    description: 'Insulta la persona menzionata | Cooldown: 1 sec | Uso: ?nero _@menzione_ | NSFW',
    cooldown: '1',
    execute(message, args, isNSFW) {
        if (message.channel.nsfw == false) return message.channel.send(isNSFW)
        const mention = args[1]
        const sentences = [
            `La pelle di ${mention} non e' bianca, 100 % sicuro`, 
            `${mention} e' oggetto di discriminazioni razziali per il colore della sua pelle. Che cosa triste :(`, 
            `Il VERO padre di ${mention} forse non ha la pelle bianca.`
         ]
        const Discord = require('discord.js')
        bot = new Discord.Client()
        const gods = ["ender", "Ender", "<@!835174121708978248>", "<@!503999815261356032>", "enderf5027", "leus", "koala", "etsunov", "pellicano", "leus"] //Users that cant be mentioned in offensive commands

        console.log("[Command] ?nero " + message.author)    
        if (mention == undefined) {
            message.channel.send("Specifica una persona")
            
        } else if (gods.includes(mention)) {
            message.channel.send("No, tu")
        } else {
            max = 2
            min = 0
            message.channel.send(sentences[Math.floor(Math.random() * (max - min + 1) + min)])
        }  
    }
}


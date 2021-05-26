module.exports = {
    name: 'lavora',
    description: 'Fai andare a lavorare l\'utente menzionato. | Cooldown: 1 sec | ?lavora _@menzione_ ',
    cooldown: '1',
    execute(message,args) {
        const Discord = require('discord.js')
        bot = new Discord.Client()
        const gods = ["ender", "Ender", "<@!835174121708978248>", "<@!503999815261356032>", "enderf5027", "leus", "koala", "etsunov", "pellicano", "leus"] //Users that cant be mentioned in offensive commands

        console.log("[Command] ?lavora " + message.author)    
        mention = args[1]
        if (mention == undefined) {
            message.channel.send("Specifica una persona")
        } else if (gods.includes(mention)) {
            message.channel.send("No, TU devi lavorare")
        } else {
            message.channel.send(mention + " deve tornare a lavorare!")
        }  
    }
}


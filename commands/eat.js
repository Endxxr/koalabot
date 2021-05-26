
module.exports = {
    name: 'eat',
    description: 'Mangia una persona, se si hanno i permessi, viene cambiato il nickname | Cooldown: 60 sec | Uso: ?eat _@menzione_',
    cooldown: '60',
    execute(message, args) {
        const Discord = require('discord.js')
        bot = new Discord.Client()
        const gods = ["ender", "Ender", "<@!835174121708978248>", "<@!503999815261356032>", "enderf5027", "leus", "koala", "etsunov", "pellicano", "leus", "835174121708978248", "503999815261356032"] //Users that cant be mentioned in offensive commands
        function oldNickname() {
            targetMember.setNickname(usernickname)
            message.channel.send("Il koala ha digerito")
        }

        console.log("[Command] ?eat " + message.author)    
        let targetMember = message.mentions.members.first();
        let usernickname = targetMember.nickname;
        if (!targetMember) return message.channel.send("Specifica qualcuno")
        let mention = targetMember.user.id || message.guild.members.cache.get(args[0]);
        if (gods.includes(mention)) return message.channel.send("No, e' mio amico")
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Quello non posso digerirlo! [MISSING PERMISSION]")
        message.channel.send(`<@${mention}> e' stato mangiato dal koala https://tenor.com/bq85O.gif`)
        targetMember.setNickname("Mangiato dal Koala").catch(err => console.log(err) && message.channel.send("Si e' verificato un errore!"))
        setTimeout(oldNickname, 20*1000)
    }
}
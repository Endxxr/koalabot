
module.exports = {
    name: 'serverinfo',
    execute(message, server, botsinserver) {
        const Discord = require('discord.js')


        console.log("[Command] ?serverinfo" + message.author)
        let members = server.memberCount - botsinserver

        var embedserver = new Discord.MessageEmbed()
                .setColor('#800020')
                .setTitle(server.name)
                .setDescription("Le info relative al tuo server, direttamente dai nostri koala scienziati in Australia")
                .setThumbnail(server.iconURL())
                .addField("Owner del Server", server.owner.user.username, true)
                .addField("Server ID", server.id, true)
                .addField("Regione del server", server.region, true)
                .addField("Membri Totali", server.memberCount, true)
                .addField("Livello di Boost", server.premiumTier, true)
                .addField("Data di creazione", server.createdAt.toDateString(), true)
        message.channel.send(embedserver)
    }
}
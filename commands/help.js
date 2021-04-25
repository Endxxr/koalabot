module.exports = {
	name: 'help',
	execute(message, args, server) {
		console.log("[Command] ?help " + message.author)
        const Discord = require('discord.js')
        const HelpEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Help')
            .setAuthor('Ender#7020', 'https://lh3.googleusercontent.com/a-/AOh14GiuM438pINk7zfLG4PmiKia6Vp4CP_4jeFdglmxKw=s600-k-no-rp-mo', 'https://www.youtube.com/channel/UC8prS4uKZIcjsevn7BHybaw')
            .setDescription("Il Koala Aiutante: creato da Ender#7020. Con questo bot un simpatico koala entrera' nel tuo server discord! Puoi insultare gente, avere dei tool per l'amministrazione e inoltre, alcune il volte il bot si intromettera' nelle discussioni. I COMANDI CREATI NON HANNO L'INTENZIONE DI OFFENDERE QUALCUNO. Versione: 0.0.1 by Ender")
            .addFields(
                { name: 'Fun', value: '?help fun' },
                { name: 'Amministrazione', value: '?help amministrazione' },
                { name: 'Info', value: '?help info' },
                { name: 'Audio', value: '?help audio' },
            )
            .setTimestamp()

        const listaudio = new Discord.MessageEmbed()
            .setColor('#008972')
            .setTitle("Lista Audio")
            .setDescription("Il Koala puo' riprodurre dei file audio presenti nel suo database. Ecco una lista:")
            .addFields(
                { name: 'Bruh', value: '?audio bruh' },
                { name: 'Cut G', value: '?audio cut_g' },
                { name: 'FBI Open Up', value: '?audio fbi_open_up' },
                { name: 'Bye, have a great time!', value: '?audio great_time' },
                { name: 'Hello There', value: '?audio hello_there' },
                { name: 'Bimbo che urla', value: '?audio kid_scream' },
                { name: 'Sike, this is the wrong number!', value: '?audio wrong_number' },
                { name: "That's a lot of damage!", value: '?audio alot_of_damage' },
            )

        
        if (args[1] == "info") {
            message.channel.send("Ehyyy hai trovato qualcosa che e' ancora sotto sviluppo. Ti chiedo di aspettare.")
        } else if (args[1] == "fun") {
            message.channel.send("Ehyyy hai trovato qualcosa che e' ancora sotto sviluppo. Ti chiedo di aspettare.")
        } else if (args[1] == "amministrazione") {
            message.channel.send("Ehyyy hai trovato qualcosa che e' ancora sotto sviluppo. Ti chiedo di aspettare.")
        } else if (args[1] == "audio") {
            message.channel.send( { embed: listaudio } )
        } else {
        message.channel.send( { embed: HelpEmbed })
        }
    },
};

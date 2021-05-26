module.exports = {
	name: 'help',
    description: 'Messaggio di aiuto, contiene info riguardo il koala. Tipo come un piccola glossario sui koala aiutanti o qualcosa del genere, credo. | Cooldown: 1 sec ',
    cooldown: '1',
	execute(message, args, fs) {
		let descriptions = []
        loaddescriptions(descriptions)

        console.log("[Command] ?help " + message.author)
        const Discord = require('discord.js')
      /*  const HelpEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Help')
            .setAuthor('Ender#7020', 'https://lh3.googleusercontent.com/a-/AOh14GiuM438pINk7zfLG4PmiKia6Vp4CP_4jeFdglmxKw=s600-k-no-rp-mo', 'https://www.youtube.com/channel/UC8prS4uKZIcjsevn7BHybaw')
            .setDescription("Il Koala Aiutante: creato da Ender#7020. Con questo bot un simpatico koala entrera' nel tuo server discord! Puoi insultare gente, avere dei tool per l'amministrazione e inoltre, alcune il volte il bot si intromettera' nelle discussioni. I COMANDI CREATI NON HANNO L'INTENZIONE DI OFFENDERE QUALCUNO. Versione: 0.0.2 by Ender")
            .addFields(
                { name: 'Fun', value: '?help fun' },
                { name: 'Amministrazione', value: '?help amministrazione' },
                { name: 'Info', value: '?help info' },
                { name: 'Audio', value: '?help audio' },
            )
            .setTimestamp()
*/


        const HelpEmbed = new Discord.MessageEmbed()
                .setColor('#8b8b8b')
                .setTitle('Help')
                .setAuthor('Ender', 'https://lh3.googleusercontent.com/a-/AOh14GiuM438pINk7zfLG4PmiKia6Vp4CP_4jeFdglmxKw=s600-k-no-rp-mo')
                .setDescription('Scegli un argomento:')
                .setThumbnail('https://cdn.discordapp.com/avatars/835174121708978248/f62dee995e65cdef82b4ca48521490bf.png')
                .setDescription("Il Koala Aiutante: creato da Ender#7020. Con questo bot un simpatico koala entrera' nel tuo server discord!  Puoi insultare gente, avere dei tool per l'amministrazione e inoltre, alcune il volte il bot si intromettera' nelle discussioni. I COMANDI CREATI NON HANNO L'INTENZIONE DI OFFENDERE QUALCUNO. Versione: 0.0.2 by Ender")
                .addFields(
                    {name: 'Fun', value: '?help fun'},
                    {name: 'Amministrazione', value: '?help admin'},
                    {name: 'Info', value: '?help info'},
                    {name: 'Audio', value: '?help audio'},
                )
                .setFooter('Ver. 0.0.2 Alpha by Ender#7020')

        const listaudio = new Discord.MessageEmbed()
            .setColor('#008972')
            .setTitle("Lista Audio")
            .setDescription("Il Koala puo' riprodurre dei file audio presenti nel suo database. Ecco una lista:")
            .setThumbnail('https://cdn.discordapp.com/avatars/835174121708978248/f62dee995e65cdef82b4ca48521490bf.png')
            .addFields(
                { name: 'Bruh', value: '?audio bruh' },
                { name: 'Cut G', value: '?audio cut_g' },
                { name: 'FBI Open Up', value: '?audio fbi_open_up' },
                { name: 'Bye, have a great time!', value: '?audio great_time' },
                { name: 'Hello There', value: '?audio hello_there' },
                { name: 'Bimbo che urla', value: '?audio kid_scream' },
                { name: 'Sike, this is the wrong number!', value: '?audio wrong_number' },
                { name: "That's a lot of damage!", value: '?audio alot_of_damage' },
                { name: "Leus e' Sus", value: '?audio sus_leus' },
                { name: 'A lot of damage!', value: '?audio damage'},
                { name: 'Fortnite Default Dance', value: '?audio defaultdance' },
                { name: 'Tre-biscotti', value: '?audio sucko_mode' },
                { name: 'Windows Xp Error', value: '?audio xp_error' },
                { name: 'When te imposter is sus!', value: '?auio sus_imposter' },
                
            )   
                .setFooter('Ver. 0.0.2 Alpha by Ender#7020')

        const fun = new Discord.MessageEmbed()
            .setColor('#008972')
            .setTitle("Fun")
            .setThumbnail('https://cdn.discordapp.com/avatars/835174121708978248/f62dee995e65cdef82b4ca48521490bf.png')
            .setDescription('Lista dei comandi sotto la categoria "fun"')
            .addFields(
                { name: 'Audio', value:  descriptions[0]},
                { name: 'Cinque', value: descriptions[1] },
                { name: 'Donna', value: descriptions[2] },
                { name: 'Eat', value: descriptions[3] },
                { name: 'Gay', value: descriptions[4] },
                { name: 'Lavora', value: descriptions[7] },
                { name: 'Nero', value: descriptions[8] },
                { name: 'Soluzione Finale', value: descriptions[12]}
                
            )
            .setFooter('Ver. 0.0.2 Alpha by Ender#7020')

        
        if (args[1] == "info") {
            message.channel.send("Ehyyy hai trovato qualcosa che e' ancora sotto sviluppo. Ti chiedo di aspettare.")
        } else if (args[1] == "fun") {
            message.channel.send(fun)
        } else if (args[1] == "amministrazione") {
            message.channel.send("Ehyyy hai trovato qualcosa che e' ancora sotto sviluppo. Ti chiedo di aspettare.")
        } else if (args[1] == "audio") {
            message.channel.send( { embed: listaudio } )
        } else {
        message.channel.send( { embed: HelpEmbed })
        }
        
        
        
        function loaddescriptions(descriptions) {
            const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
            
            for (const file of commandFiles) {
                let cmd = require(`./${file}`)
                let description =  cmd.description
                descriptions.push(description)

            }
        
        }
    },
};

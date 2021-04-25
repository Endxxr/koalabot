module.exports = {
    name: 'audio',
    execute(message, args, CanaleVocale) {
        let audios = ["bruh.mp3", "cut_g.mp3", "kid_scream.mp3", "great_time.mp3", "hello_there.mp3", "fbi_open_up.mp3", "wrong_number.mp3", "alot_of_damage.mp3"];
        let name = args[1] + ".mp3";
        console.log(name)
        console.log("[Command] ?audio " + message.author.id)
        if (!CanaleVocale) {
            message.channel.send("Il Koala e' confuso, non ti vede in nessun canale vocale :( ")
        } else {
            if (audios.includes(name)) {
                CanaleVocale.join()
                .then(connection => {
                    timeoutobj = setTimeout(leave, 20*1000)
                    clearTimeout(timeoutobj)
                    timeoutobj = setTimeout(leave, 20*1000)
                    connection.play(`./audio/${name}`)
                    console.log(`[Voice] Played the sound ${name} `)
                    
                })
            } else {
                message.channel.send(`L'audio ${name} non esiste!`)
                console.log(`[Voice] A user tried to play ${name} but it doesn't exist!`)
            }
            
                
            
        }
        function leave(connection) {
            CanaleVocale.leave()
            console.log("[Voice] Left")
            message.channel.send("Il Koala e' annoiato e quindi esce dalla chat vocale")
        }
    }
}
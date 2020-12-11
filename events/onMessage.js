const Discord = require('discord.js');
const constants = require('../utils/constants');

let prefix  = process.env.PREFIX;

module.exports = (message, client) => {
    const commandHasPreffix = message.content.startsWith(prefix) ? true : false;
    
    if (!commandHasPreffix) {

        if(message.guild.id != constants.server_id ) return;

        // Commands sin prefijo
        switch(message.content) {
            case 'Burroman':
                message.channel.send(`Silencio <@${msg.author.id}> <:Burroman:772335436860882967>`);
                break;
            case 'burroman':
                message.channel.send(`Silencio <@${msg.author.id}> <:Burroman:772335436860882967>`);
                break;
            case 'Ban':
                message.channel.send('<:BAN:758106286046183424><:NED:758106286297972778>');
                break;
            case 'ban':
                message.channel.send('<:BAN:758106286046183424><:NED:758106286297972778>');
                break;
            case 'churroman':
                message.channel.send('QUE NO SOY CHURROMAN! <:varelaTriste:745085384047984740> <:varelaPium:782071035125432351>')
                break;
            case 'Churroman':
                message.channel.send('QUE NO SOY CHURROMAN! <:varelaTriste:745085384047984740> <:varelaPium:782071035125432351>')
                break;
            default:
                break;
        }
    } else {
        // Commands con prefijo
        if (message.author.bot) return;

        if(message.guild.id != constants.server_id ) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandWithPrefix = args.shift().toLowerCase();
        switch(commandWithPrefix) {
            case 'twitter':
                return message.channel.send('Sigueme en mi tuister: https://twitter.com/Burroman69')
            case 'twitch':
                return message.channel.send('Sigueme en mi tuish: https://www.twitch.tv/theburroman69')
            case 'wph':
                return sendWph(message);
            case 'avatar':
                return sendAvatar(message);
            case 'help':
                return sendHelp(message);
            case 'impostor':
                return sendImpostor(message);
            case '8burro':
                if (!args) return message.reply(`Escriba una pregunta.`);
                return send8Burro(message);
            case 'gulag':
                if (!args) return message.reply(`Escriba una pregunta.`);
                return sendGulag(message);
            case 'love':
                return sendLove(message);
            case 'banned':
                return sendBanned(message);
            case 'espai':
                return message.channel.send('gei <:uff:770760152449155072> y el fundador de mi nombre');
            case 'pesca':
                return sendPesca(message);
            case 'cumple':
                return sendCumple(message);
            case 'server':
                return sendServer(message);
            case 'set':
                return sendSet(message, client);
            case 'clear':
                return sendClear(message, args);
            case 'embed':
                return sendEmbed(message);
            case 'kick':
                return sendKick(message, client, args);
            case 'cofre':
                return sendCofre(message);
            case 'invite':
                return sendInvite(message);
            default:
                break;
        }
    }
}

const sendAvatar = (message) => {
    const miembro = message.mentions.users.first()
    let embed;
    if (!miembro) {
        embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag}`)
            .setDescription("Este es tu Avatar")
            .setImage(`${message.author.displayAvatarURL({dynamic: true, size : 1024})}`)
            .setColor(0x9c98f8)
    } else {
        embed = new Discord.MessageEmbed()
            .setTitle(`${miembro.tag}'`)
            .setDescription(`${message.author} Este es el Avatar de ${miembro.tag}.`)
            .setImage(miembro.displayAvatarURL({dynamic: true, size : 1024}))
            .setColor(0x9c98f8)        
    };
    message.channel.send(embed);
}

const sendHelp = (message) => {
    message.delete();
    const embed = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL({dynamic: true}))   
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle('Hola soy Burroman, el bot del canal que solo echa desmadre')
        .setDescription('Aca abajo estan todos los comandos actuales que existen, y que puedes usar, con forme pase el tiempo iremos actualizando comandos y agregando nuevas cosas')
        .addField('!avatar', 'Muestra el avatar de un usuario', true)
        .addField('burroman', 'burroman responde', true)
        .addField('ban', 'emote Banned', true)
        .addField('!twitch', 'Muestra Twitch de burroman', true)
        .addField('!twitter', 'Muestra Twitter de burroman', true)
        .addField('!impostor', 'Muestra si tu eres impostor u otro user', true)
        .addField('!8burro', 'Hazle preguntas y respondera con afirmacion o negacion', true)
        .addField('!love', 'Muestra el amor entre dos personas', true)
        .addField('!banned', 'Muestra gif al azar de banneos', true)
        .addField('!espai', 'Te dice quien es espai', true)
        .addField('!pesca', 'Mini juego donde te dice que pescaste', true)
        .addField('!gulag', 'Te sientes con suerte y no le temes a la muerte? entonces usalo', true)
        .addField('!invite', 'link de invitacion al server', true)
        .addField('!cofre', 'Informacion sobre cofres para subs', true)
        .addField('!cumple', 'Informacion para agregar tu cumpleaños', true)
        .addField('!server', 'Informacion del servidor', true)
        .addField('churroman', 'Solo no le digas asi', true)
        .addField('!clear (ADMI)', 'Borra un # de mensajes de la sala', true)
        .addField('!kick (ADMI)', 'kickea a un usuario', true)
        .addField('!set (ADMI)', 'Cambia status del bot', true)
        .setColor(0xff6b9f)
        .setImage('https://cdn.discordapp.com/attachments/289829636391567370/774401280458227782/varelaLove.png')
        .setFooter('Hecho por moderadores ', 'https://cdn.discordapp.com/attachments/289829636391567370/774397423014903818/745085348387881010.png');
    message.author.send(embed);
}

const sendImpostor = (message) => {
    const mencionado = message.mentions.members.first() //Definimos mencionado
        
    let random = [
        "No era el impostor",
        "Era el impostor"
    ] //Hacemos frases para ver si es o no
    
    let messageToSend = '';
    if (!mencionado) {
        messageToSend = `. 　　　。　　　　•　 　ﾟ　　。 　　.
    
        　　　.　　　 　　.　　　　　。　　 。　. 　
        
        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
        
        　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
        
        　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
        
        　　ﾟ　　　.　　　. ,　　　　.　 .`
    } else {
        messageToSend = `. 　　　。　　　　•　 　ﾟ　　。 　　.
    
        　　　.　　　 　　.　　　　　。　　 。　. 　
        
        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
        
        　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
        
        　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
        
        　　ﾟ　　　.　　　. ,　　　　.　 .`
    }
    message.channel.send(messageToSend);
}

const send8Burro = (message) => {
    let rpts = ["Sí", "No", "Tal vez", "No sé", "¡Claro!", "pregunta mas tarde, Estoy tomando jugo <:varelaJuguito:745085367065247794>","No sé bro, no me importa <:Burroman:772335436860882967>","Solo se que tienes problemas <:monkaW:760206755304701974>","Me dejaste pensando <:monkaHmm:760206749486678107>","Regresa luego toy mimido <:varelaWarm:759776554418438166>", "Quedé asi mira <:varelaClown:766118254938554408> " ]
    message.channel.send(' **El gran __Burroman__ dice:** '+ rpts[Math.floor(Math.random() * rpts.length)]+'');
}

const sendGulag = (message) => {
    let rpts = ["Sí te iras al gulag <a:elmoFire:786646623282790411>","No te iras al gulag <:Burroman:772335436860882967>","Andas de suerte, no iras al gulag <:sadKEK:761281532035596349>", "Es Día de promo! <:happypog:772323350471114814> vete al gulag con un amigo! <:happypog:772323350471114814> ", "Al parecer haz escogido el camino de la MUERTE :smiling_imp: vete al gulag", "directo al gulag", "Hoy no es dia de Gulag <:peepoShy:774102554992312371> "]
    message.channel.send(' **El gran __Burroman__ dice que** '+ rpts[Math.floor(Math.random() * rpts.length)]+'');
}

const sendLove = (message) => {
    let users = message.mentions.users.map(m => m.username).join(' y ');
    if(!users) return message.channel.send('Etiqueta a dos usuarios para calcular su amor');
    const random = Math.floor(Math.random() * 100);
    let heard = '';
    if(random < 50){
        heard = ':broken_heart:';
    } else if(random < 80){
        heard = ':sparkling_heart: ';
    } else if(random < 101){
        heard = ':heart:';
    }
    const embed = new Discord.MessageEmbed()
        .setAuthor('El porcentaje de amor de '+users+' es:')
        .setDescription(heard+' **'+random+' %**'+' '+heard)
        .setColor(0xff69e9)
    message.channel.send(embed);
}

const sendBanned = (message) => {
    let thumb = ["https://cdn.discordapp.com/attachments/773783284920221696/774350991306391592/O3DHIA5.gif", "https://i.imgur.com/pgAybBd.gif", "https://i.imgur.com/r42VJvZ.gif", "https://i.imgur.com/bfOSpyg.gif"]
    var enlace = thumb[Math.floor(Math.random() * thumb.length)]
    const embed = new Discord.MessageEmbed()
    
        .setColor(0xff0700)
        .setImage(enlace)
    
    message.channel.send({ embed });
}

const sendPesca = (message) => {
    const rollFish = Math.floor(Math.random() * 20) + 1;
    switch (rollFish) {
        case 1: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :tropical_fish:');
        case 2: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :fish:');
        case 3: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :shopping_cart:');
        case 4: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :radio:');
        case 5: 
            return message.channel.send('Vaya, ' + message.author.username + ' parece que hoy no es tu dia de suerte :pensive: ');
        case 6: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :minidisc:');
        case 7: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :squid:');
        case 8: 
            return message.channel.send('Vaya, ' + message.author.username + ' parece que hoy no es tu dia de suerte :pensive: ');
        case 9: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :crab:');
        case 10: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :roll_of_paper:');
        case 11: 
            return message.channel.send('Vaya, ' + message.author.username + ' parece que hoy no es tu dia de suerte :pensive: ');
        case 12: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :roll_of_paper:');
        case 13: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :crab:');
        case 14: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :tropical_fish:');
        case 15: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :dolphin:');
        case 16: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :lobster:');
        case 17: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :shark:');
        case 18: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :whale:');
        case 19: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :lobster:');
        case 20: 
            return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :shark:');
        default:
            return message.channel.send('Vaya, ' + message.author.username + ' parece que hoy no es tu dia de suerte :pensive: ');
    }
}

const sendCumple = (message) => {
    message.delete() //para borrar el mensaje del comando
    message.channel.send('Amigos, metimos un Bot para recordar su cumpleaños y así poder felicitarlos! :birthday:\n'+
        'el Bot es sencillo solo tienen que poner lo siguiente:\n'+
        ' ``bday set <zona horaria> dd/mm o mm/dd`` (según zona horaria es el formato) de cualquier forma les pide confirmación con la fecha según escribieron\n'+
        'para ver zona horaria: <https://kevinnovak.github.io/Time-Zone-Picker/>\n'+
        '__Ejemplo:__\n'+
        '``bday set America/Chihuahua 18/05``\n'+
        'Si confirmaron por error pongan ``bday purge`` para borrar su fecha\n'+
        '     \n'+
        `Cualquier duda pueden preguntarle a <@&772185854336303184> \n`
    );
}
const sendCofre = (message) => {
    message.delete()
    message.channel.send(
        'Acabamos de integrar los cofrecitos de streamloots, todos los subs tienen derecho a reclamar un cofre por mes (cada resub)\n'+
        'solo pasen el nick de su cuenta de streamloots, si no cuentan con una pueden crearla en el siguiente link\n'+
        '<https://www.streamloots.com/varelabere>\n'+ 
        'para asi reclamar su cofre\n'+
        'una vez entregado notaran un :white_check_mark: en su comentario\n'

    )
}

const sendServer = (message) => {
    const server = message.guild;
    const embed = new Discord.MessageEmbed()
        .setThumbnail(server.iconURL({dynamic: true}))
        .setAuthor(server.name, server.iconURL({dynamic: true}))
        .addField('ID', server.id, true)
        .addField('Región', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño del Servidor', `${server.owner}` , true)
        .addField('Miembros', server.memberCount, true)
        .addField('Emotes' , server.emojis.cache.size, true)
        .addField('Roles', server.roles.cache.size, true)
        .addField('Canales', server.channels.cache.size, true)
        .setColor(0x9c98f8)
    message.channel.send(embed);
}

const sendSet = async(message, client) => {
    message.delete()
    if (!message.member.roles.cache.find(r => r.name === "Admi")) {
        const tmpMessage = await message.channel.send(`Perdon <@${message.author.id}>, no tienes permiso para cambiar el status del bot <:sadKEK:761281532035596349>`);
        tmpMessage.delete({ timeout: 5000 });
    } else {
        const content = message.content.replace(prefix + `set`, '')
        message.delete() //para borrar el mensaje del comando
        client.user.setPresence({
            activity: {
                name: content,
                url: "https://www.twitch.tv/theburroman69",
                type: "STREAMING"
            },
        })
    }
}

const sendClear = async(message, args) => {
    if (!message.guild.me.permissions.has('VarelaClown')) {
        return message.channel.send("No tengo permisos para borrar mensajes.")
    }
    if (!message.member.roles.cache.find(r => r.name === "mod")) {
        return message.channel.send(`Perdon <@${message.author.id}>, pero no tienes el permiso para borrar mensajes <:sadKEK:761281532035596349>`)
        .then(e => e.delete({
            timeout: 4000
        }))
    }

    if (!args[0]) {
        return message.channel.send(" :no_entry_sign: Nesecitas colocar el __numero__ de mensajes que quieres eliminar no mayor de 100.")
        .then(e => e.delete({
            timeout: 4000
        }))
    }

    if (isNaN(parseInt(args[0]))) {
        return message.channel.send(" :no_entry_sign:  Nesecitas colocar un __numero__, no letras ni simbolos.")
        .then(e => e.delete({
            timeout: 4000
        }))
    }

    const number = parseInt(args[0])
    if (number >= 100 || number <= 0) {
        return message.channel.send(' :no_entry_sign: El valor es Invalido.')
        .then(e => e.delete({
            timeout: 4000
        }))
    }

    try {
        await message.channel.bulkDelete(number + 1);
        const tmpMessage = await message.channel.send(` :white_check_mark:  Se eliminaron **${number}** mensajes del Chat.`);
        tmpMessage.delete({ timeout: 4000 });
    } catch (error) {
        const tmpMessage = await message.channel.send(`:x: Ocurrio un error: **${error.message}**`);
        tmpMessage.delete({ timeout: 4000 });
    }

}

const sendKick = async(message, client, args) => {
    message.delete()
   
        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');

        let tmpMessage;
        if (!message.member.roles.cache.find(r => r.name === "mod")) {
            tmpMessage = await message.channel.send(`Perdon <@${message.author.id}>, pero no tienes el permiso para usar el comando <:sadKEK:761281532035596349>`);
            return tmpMessage.delete({ timeout: 5000 });
        }

        if (message.mentions.users.size < 1) {
            tmpMessage = await message.reply('Debe mencionar a alguien.');
            return tmpMessage.delete({ timeout: 5000 });
        }

        if (!razon) { 
            tmpMessage = await message.channel.send('Escriba una razón, `!kick @username [razón]`');
            return tmpMessage.delete({ timeout: 5000 });
        }

        if (!message.guild.member(user).kickable) {
            const tmpMessage = await message.reply('No puedo patear al usuario mencionado.');
            return tmpMessage.delete({ timeout: 5000 });
        }
        
        message.guild.member(user).kick(razon);

        const embed = new Discord.MessageEmbed()
            .setTitle('Alguien ha sido Expulsado!')
            .addFields(
                { name: 'Usuario:', value: `${user.username}`},
                { name: 'Razón:', value: `${razon}`},
                { name: 'Admi/Mod:', value: `${message.author.tag}`}
                        )
            .setThumbnail('https://cdn.discordapp.com/attachments/261204184307728384/785071418383138826/783888309989408818.png')
            .setTimestamp()
            .setColor("RED");
       
        const channel = client.channels.cache.get(constants.channel_kick)
        channel.send(embed);
}

const sendInvite = (message) => {
    message.channel.send('https://discord.gg/hvD7RWsESP')
}

const sendWph = (message) => {
    message.delete()
    message.channel.send('<:whp1:786677945682755597><:whp2:786677928623996928><:whp3:786677908697382962><:whp4:786677876996702288>')
}

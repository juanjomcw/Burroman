const Discord = require('discord.js');
const config = require("../config.json");
const constants = require('../utils/constants');
const { splitMessage } = require('discord.js');
const prefix  = config.prefix;

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
                return message.channel.send('gei <a:SALAMI:786643915909890078> y el fundador de mi nombre');
            case 'clear':
                return sendClear(message, args);
            case 'kick':
                return sendKick(message, args, client);
            case 'ban':
                return sendBan(message, args, client);
            case 'banlist':
                return sendBanlist(message);
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
        .addField('!8burro', 'Hazle preguntas y respondera con afirmacion o negacion', true)
        .addField('!love', 'Muestra el amor entre dos personas', true)
        .addField('!banned', 'Muestra gif al azar de banneos', true)
        .addField('!espai', 'Te dice quien es espai', true)
        .addField('!gulag', 'Te sientes con suerte y no le temes a la muerte? entonces usalo', true)
        .addField('!invite', 'link de invitacion al server', true)
        .addField('churroman', 'Solo no le digas asi', true)
        .addField('!clear (ADMIN)', 'Borra un # de mensajes de la sala', true)
        .addField('!kick (ADMIN)', 'kickea a un usuario', true)
        .addField('!ban (ADMIN)', 'ban a un usuario', true)
        .addField('!banlist (ADMIN)', 'lista de usuarios baneados', true)
        .setColor(0xff6b9f)
        .setImage('https://cdn.discordapp.com/attachments/289829636391567370/774401280458227782/varelaLove.png')
        .setFooter('Hecho por moderadores ', 'https://cdn.discordapp.com/attachments/289829636391567370/774397423014903818/745085348387881010.png');
    message.author.send(embed);
}


const send8Burro = (message) => {
    let rpts = ["Sí", "No", "Tal vez", "No sé", "¡Claro!", "pregunta mas tarde, Estoy tomando jugo <:varelaJuguito:745085367065247794>","No sé bro, no me importa <:Burroman:772335436860882967>","Solo se que tienes problemas <:monkaW:760206755304701974>","Me dejaste pensando <:monkaHmm:760206749486678107>","Regresa luego toy mimido <:varelaWarm:759776554418438166>", "Quedé asi mira <:varelaClown:766118254938554408> " ]
    message.channel.send(' **El gran __Burroman__ dice:** '+ rpts[Math.floor(Math.random() * rpts.length)]+'');
}

const sendGulag = (message) => {
    let rpts = ["Sí te iras al gulag <a:elmoFire:786646623282790411>","No te iras al gulag <:Burroman:772335436860882967>","Andas de suerte, no iras al gulag <:sadKEK:761281532035596349>", "Es Día de promo! <:happypog:772323350471114814> vete al gulag con un amigo! <:happypog:772323350471114814> ", "Al parecer haz escogido el camino de la MUERTE :smiling_imp: vete al gulag", "directo al gulag", "Hoy no es dia de Gulag <:peepoShy:776574982054346762> "]
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
const sendClear = async(message, args) => {
    if (!message.guild.me.permissions.has('Burroman')) {
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

const sendKick = async(message, args, client) => {
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
            const tmpMessage = await message.reply('No puedo kickear al usuario mencionado.');
            return tmpMessage.delete({ timeout: 5000 });
        }
        
        message.guild.member(user).kick(razon);

        const embed = new Discord.MessageEmbed()
            .setTitle('Alguien ha sido Expulsado!')
            .addFields(
                { name: 'Usuario:', value: `${user}`},
                { name: 'Razón:', value: `${razon}`},
                { name: 'Admi/Mod:', value: `${message.author.tag}`}
                        )
            .setThumbnail('https://cdn.discordapp.com/attachments/261204184307728384/785071418383138826/783888309989408818.png')
            .setTimestamp()
            .setColor("RED");
       
        const channel = client.channels.cache.get(constants.channel_kick)
        channel.send(embed);
}

const sendBan = async(message, args, client) => {
    message.delete()
    
    let user = message.mentions.members.first() || 
            message.guild.members.resolve(args[0])
    let razon = args.slice(1).join(' ');
   
    let tmpMessage;
    if (!message.member.roles.cache.find(r => r.name === "mod")) {
        tmpMessage = await message.channel.send(`Perdon <@${message.author.id}>, pero no tienes el permiso para usar el comando <:sadKEK:761281532035596349>`);
        return tmpMessage.delete({ timeout: 5000 });
        }
      
    
      
      if (!user) {
        return message.channel.send('Debe mencionar a alguien para banear')
      } else if(!user.bannable){
        return message.channel.send('No puedo banear a esta persona')
      }
      
      if (!razon) { 
        tmpMessage = await message.channel.send('Escriba una razón, `!ban @username [razón]`');
        return tmpMessage.delete({ timeout: 5000 });
    }
        razon += ` || Baneado por ${message.author.tag}`
            
            message.guild.members.ban(user, {
                reason: razon
            })
            const embed = new Discord.MessageEmbed()
            .setTitle('Alguien ha sido Baneado!')
            .addFields(
                { name: 'Usuario:', value: `${user}`},
                { name: 'Razón:', value: `${razon}`}
                        )
            .setThumbnail('https://cdn.discordapp.com/attachments/261204184307728384/785071418383138826/783888309989408818.png')
            .setTimestamp()
            .setColor("RED");
       
        const channel = client.channels.cache.get(constants.channel_kick)
        channel.send(embed);

}

const sendBanlist = async(message) => {
    
    message.delete()
        let tmpMessage;
        if (!message.member.roles.cache.find(r => r.name === "mod")) {
                tmpMessage = await message.channel.send(`Perdon <@${message.author.id}>, pero no tienes el permiso para usar el comando <:sadKEK:761281532035596349>`);
                return tmpMessage.delete({ timeout: 5000 });
            }
            var blist = await message.guild.fetchBans();
            if(blist.size <= 0) return message.channel.send("No hay baneos en el servidor.")
            var bansID = blist.map(b => '**→ '+b.user.username +'** | **ID:** '+ b.user.id).join('\n') 
            const description = '**📌 Usuario y ID:** \n'+bansID

            let embed = new Discord.MessageEmbed()
                            .setColor("RED")
                            .setTitle('Lista de __Baneados__ de **'+message.guild.name+'**')
                            .setDescription(description)
                            .setFooter('Pedido por: '+message.author.username, message.author.displayAvatarURL())
                            .setTimestamp()
                            .setThumbnail(message.guild.iconURL({dynamic: true, size: 1024}))

            const splitDescription = splitMessage(description, {
                maxLength: 2048,
                char: "\n",
                prepend: "",
                append: ""
            });

                splitDescription.forEach(async (m) => {
                    embed.setDescription(m);
                    message.channel.send(embed)
    });

}

const sendInvite = (message) => {
    message.channel.send('https://discord.gg/hvD7RWsESP')
}

const sendWph = (message) => {
    message.delete()
    message.channel.send('<:whp1:786677945682755597><:whp2:786677928623996928><:whp3:786677908697382962><:whp4:786677876996702288>')
}


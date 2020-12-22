const Discord = require('discord.js');
const constants = require('../utils/constants');
const { splitMessage } = require('discord.js');

let prefix  = process.env.PREFIX;

module.exports = (message, client) => {
    const commandHasPreffix = message.content.startsWith(prefix) ? true : false;
    
    if (!commandHasPreffix) {

        if(message.guild.id != constants.server_id ) return;

        // Commands sin prefijo
        switch(message.content) {
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
            case 'user':
                return sendUser(message);
            default:
                break;
        }
    }
}

const sendUser = async(message) => {
    message.delete() 
    let tmpMessage;
    if (!message.member.roles.cache.find(r => r.name === "mod")) {
            tmpMessage = await message.channel.send(`Perdon <@${message.author.id}>, pero no tienes el permiso para usar el comando <:sadKEK:761281532035596349>`);
            return tmpMessage.delete({ timeout: 5000 });
        }

    
        let estados = {
            "online": "🟢 En Línea",
            "idle": "🌙 Ausente",
            "dnd": "🔴 No molestar",
            "offline": "⚪ Desconectado"
          };
    
          const member = message.mentions.members.first() || message.member
    
            
    
          function formatDate (template, date) {
            var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
            date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
            return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
              return template.split(specs[i]).join(item)
            }, template)
          }
    
    
          let badges1 = {
         
            'DISCORD_PARTNER': '<:partner:790483011610869831> ',
            'HOUSE_BRAVERY': '<:bravery:790483010696511517> ',
            'HOUSE_BRILLIANCE': '<:Brilliance:790483011056566313>  ',
            'HOUSE_BALANCE': '<:BALANCE:790483010394128404> ',
    
    
           
          }
    
          let obj = {
            "HOUSE_BRAVERY" : "Bravery" , "HOUSE_BRILLIANCE" : "Brilliance" , "DISCORD_PARTNER" : "Socio de discord"
            }
    
    
            const embed = new Discord.MessageEmbed() 
            .setDescription(`**${message.author.username} está es la información del usuario:**`)
            .setColor(0x9c98f8)
            .addFields(
                {
                   name:"**🎫 Nombre**:",
                   value: "**" + `${member.user.tag}` + "**",
                   inline: true
                },
                {
                    name:"**🎟 ID**:",
                   value: `${member.user.id}`,
                   inline: true
                },
                {
                    name: "**📌 Estado**:",
                    value: member.user.presence.activities[0] ? member.user.presence.activities[0].state : "Sin estado",
                    inline: true// En linea: SI
                },
                {
                    name:"**🛎 Fecha de Ingreso al Servidor:**",
                    value: formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt),
                    inline: true
    
                },
                {
                    name: "**📥 Cuenta Creada:**",
                    value: formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt),
                    inline: true
    
                },
                {
                    name:"**🏳️ Insignias:**",
                    value: member.user.flags.toArray().length ? member.user.flags.toArray().map(badge => badges1[badge]).join(' ') : "No tiene insignias",
                    inline: true
    
                },
                {
                    name: "**🌐 Actividad**:",
                    value: "" + estados[member.user.presence.status] + "",
                    inline: true
                    
                },
                {
                    name:"**🚀 ¿Boostea?**:",
                    value: member.premiumSince ? '**Está boosteando '+message.guild.name+' <:boost:790483016509030411> **' : '**No Boostea '+message.guild.name+' <:SadCat:790484033993441281> **',
                    inline: true
                    
                },
                {
                    name: "**🎖 Roles**:",
                    value: member.roles.cache.map(roles => `\`${roles.name}\``).join(', '),
                    inline: true
    
                }
                )
                .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))//y el avatar del usuario
                .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)//nombre y avatar del usuario en el footer
                .setTimestamp()
                
                const channel = message.guild.channels.cache.get(constants.channel_userinfo)
                channel.send(embed)
    
        
    }
    

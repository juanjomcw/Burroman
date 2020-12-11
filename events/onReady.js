const Discord = require('discord.js');
const constants = require('../utils/constants');

module.exports = (client) => {
    console.log(`Estoy listo en ${client.user.tag}!`)
    const channelId = constants.on_ready_broadcast_channel_id; ///Id del canal
    const channel = client.channels.cache.get(channelId); ///Esto obtiene el canal
    const embed = new Discord.MessageEmbed() ///Crea embed
        .setTitle("ESTOY LISTO!") ///Nombre
        .setColor(0x9c98f8) //Color
        .setDescription(
                    '• Se han generado cambios!\n'+
                    `• Burroman esta disponible en ${client.guilds.cache.size} Servidores!\n`) //Descripcion
        .setThumbnail('https://cdn.discordapp.com/attachments/261204184307728384/784341867999002624/772335436860882967.png') //URL De imagen nwn
        .setFooter('Hecho por Juanjomcw#6778' , 'https://cdn.discordapp.com/attachments/261204184307728384/784341520274161674/d0f5cf5fb791ea9e332c8d8e3a1631ac_preview_rev_1_2.png')
        .setTimestamp()
    channel.send(embed)
  
    client.user.setPresence({
        status: "online",
        activity: {
            name: "Burroman en stream",
            url: "https://www.twitch.tv/theburroman69",
            type: "STREAMING"
        }
    });

}

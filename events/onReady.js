const Discord = require('discord.js');
const constants = require('../utils/constants');

module.exports = (client) => {
    console.log(`Estoy listo en ${client.user.tag}!`)
    const channelId = constants.on_ready_broadcast_channel_id; ///Id del canal
    const channel = client.channels.cache.get(channelId); ///Esto obtiene el canal
    const embed = new Discord.MessageEmbed() ///Crea embed
        .setTitle("ESTOY LISTO!") ///Nombre
        .setColor(0x9c98f8) //Color
        .setDescription(`Burroman esta disponible en ${client.guilds.cache.size} Servidores! `) //Descripcion
        .setThumbnail('https://cdn.discordapp.com/attachments/261204184307728384/784492246941827092/varelaClown.png') //URL De imagen nwn
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
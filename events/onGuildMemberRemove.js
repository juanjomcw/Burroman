const constants = require('../utils/constants');

module.exports = (member) => {
    console.log(member)

    if(member.guild.id != constants.server_id ) return;

    const message = `${member.user.username} salio corriendo de __Varelandia__! te extrañaremos <:sadKEK:761281532035596349> `

    const channel = member.guild.channels.cache.get(constants.channel_welcome)
    channel.send(message)
}
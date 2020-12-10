const constants = require('../utils/constants');

module.exports = (member) => {
    console.log(member)

    if(member.guild.id != constants.server_id ) return;

    const message = `Bievenido <@${member.id}> a __Varelandia__! <:varelaHeart:745085348387881010>  Porfavor revisa las ${member.guild.channels.cache
        .get(constants.reglas_id)
        .toString()} que tenemos para ti!`

    const channel = member.guild.channels.cache.get(constants.channel_welcome)
    channel.send(message)
}
const Discord = require('discord.js');
const client = new Discord.Client();


/* Events */
const onReady = require('./events/onReady');
const onGuildMemberAdd = require('./events/onGuildMemberAdd');
const onMessage = require('./events/onMessage');
const onGuildMemberRemove = require('./events/onGuildMemberRemove');
const Userinfo = require('./events/Userinfo');


client.on("ready", () => onReady(client));
client.on('guildMemberAdd', onGuildMemberAdd);
client.on('guildMemberRemove', onGuildMemberRemove);
client.on('message', (message) => onMessage(message, client));
client.on('message', (message) => Userinfo(message, client));







client.login(process.env.TOKEN);

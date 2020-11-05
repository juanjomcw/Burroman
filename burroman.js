const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setGame('https://www.twitch.tv/burroman');

});


let prefix = process.env.PREFIX;

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

 
 if(message.content.startsWith(prefix + 'avatar')){
   let img = message.mentions.users.first()
   if (!img) {

       const embed = new Discord.RichEmbed()
       .setImage(`${message.author.avatarURL}`)
       .setColor(10371071)
       .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
       message.channel.send({ embed });

   } else if (img.avatarURL === null) {

       message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

   } else {
       
       const embed = new Discord.RichEmbed()
       .setImage(`${img.avatarURL}`)
       .setColor(10371071)
       .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
       message.channel.send({ embed });
       }
 }else
    if(message.content.startsWith(prefix + 'gulag')){

       var rpts = ["Sí <:pepePoint:772187071095242803> ", "No <:Burroman:772241066757455882> ", "Tal vez <:uff:772187078096060508> ", "No sé <:pepeg:772187051666964541>  ", "Definitivamente NO <:Burroman:772241066757455882> ", "Definitivamente SI <:KEKW:772187081665413180> ", "Sí <:pepePoint:772187071095242803> " ];
       if (!arguments) return message.reply(`Escriba una pregunta.`);
       message.channel.send(message.member.user+' Mi respuesta es: '+ rpts[Math.floor(Math.random() * rpts.length)]+'');
   
  }else
    if (message.content.startsWith(prefix + "banned")){
      message.channel.send(":BAN::NED:", {file:"https://cdn.discordapp.com/attachments/421867754480599050/468529032494055454/O3DHIA5.gif"});
       
}else 
    if(message.content.startsWith(prefix + 'love')){
        let users = message.mentions.users.map(m => m.username).join(' y ');
     if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
    
     const random = Math.floor(Math.random() * 100);
     let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            
      const embed = new Discord.RichEmbed()
          .setAuthor('El porcentaje de amor de '+users+' es:')
          .setDescription(heard+' **'+random+' %**'+' '+heard)
          .setColor(16716947)

        message.channel.send({embed});
    }
});
client.login(process.env.TOKEN);

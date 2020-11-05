const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setGame('www.twitch.tv/theburroman69');

});
client.on("guildMemberAdd", (member) => 
 {
     messageToSend = "Bienvenido " + member.user + " a la Varelandia! <:varelaLove:773963271308443648>", {file:"https://cdn.discordapp.com/attachments/758404276727840768/773963806035410974/a9ee685e855123d0e66b26f506d501b9.gif"};
     client.channels.get('763131516783034371').sendMessage(messageToSend);
 });
 
 client.on("guildMemberRemove", (member) => 
 {
     messageToSend = member.user.username + " Salio de Varelandia <:sadKEK:773965912637571124>";
     client.channels.get('763131516783034371').sendMessage(messageToSend);
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

       var rpts = ["Sí <:pepePoint:761701490766643260>", "No <:Burroman:772335436860882967>", "Tal vez <:uff:770760152449155072>", "Definitivamente NO <:Burroman:772335436860882967> ", "Primero dios si :pray_tone3: ", "Hoy no, mañana si <:uff:770760152449155072>", "Dios mediante no :pray_tone3: "];
       if (!arguments) return message.reply(`Escriba una pregunta.`);
       message.channel.send(message.member.user+' Burroman <:Burroman:772335436860882967> dice que '+ rpts[Math.floor(Math.random() * rpts.length)]+' te iras al Gulag');
   
  }else
    if (message.content.startsWith(prefix + "banned")){
      message.channel.send("<:BAN:758106286046183424><:NED:758106286297972778>", {file:"https://cdn.discordapp.com/attachments/421867754480599050/468529032494055454/O3DHIA5.gif"});
       
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

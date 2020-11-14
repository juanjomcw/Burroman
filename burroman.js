const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
  console.log(`Estoy listo en ${client.user.tag}!`);

  client.user.setPresence({
    status: "online",
    activity: {
        name: "Burroman en stream",
        url: "https://www.twitch.tv/theburroman69",
        type: "STREAMING"
    }
    });


});

//bienvenida 

client.on("guildMemberAdd", async (member) => {
    let guild = client.guilds.cache.get("763131515974451220")   //server id 
    let channel = client.channels.cache.get("773783284920221696");   //channel id
    if (guild != member.guild) {
        return console.log(`entro al grupo, ${member.user}`)
    } else {
        let embed = new MessageEmbed()
        .setColor("GREEN")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setImage('https://media.giphy.com/media/TKv4j0jA2IUfcLFCKl/giphy.gif')
        .setTitle(`Bienvenido a ${guild.name}`)
        .setDescription(`${member.user} Diviertete En El Servidor !`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024 }))
        .setFooter("ahora Somos :", message.guild.memberCount)
        await channel.send(embed)
    }
});
//Despedida
client.on("guildMemberRemove", async (member) => {
    
    let guild = client.guilds.cache.get("763131515974451220")    //serveroID   
    let channel = client.channels.cache.get("773783284920221696"); //cannel ID
  
   
  if (guild != member.guild) {
    return console.log(`Salio Del Grupo, ${member.user}`)
  } else {
     let embed = new MessageEmbed()
   .setColor("GREEN")
   .setAuthor(member.user.tag, member.user.displayAvatarURL()) 
   .setImage('https://media.giphy.com/media/3og0IG0skAiznZQLde/giphy.gif')
   .setTitle(`${guild.name}`)
   .setDescription(`${member.user} , Te Extrañaremos`)
   .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024 }))
   .setFooter("ahora Somos :", message.guild.memberCount)
  
   await channel.send(embed)
  
  } 

});

//comandos sin prefix
client.on('message', msg => {
  if(msg.content === 'burroman'){
    msg.channel.send(`Silencio <:Burroman:772335436860882967> ${msg.author}`)

  }
  if(msg.content === 'ban'){
    msg.channel.send('<:BAN:758106286046183424><:NED:758106286297972778>')

  }
  if(msg.content === 'Burroman'){
    msg.channel.send(`Silencio <:Burroman:772335436860882967> ${msg.author}`)
  
  }
    if(msg.content === 'Ban'){
    msg.channel.send('<:BAN:758106286046183424><:NED:758106286297972778>')

  }
   if(msg.content === 'churroman'){
    msg.channel.send('QUE NO SOY CHURROMAN! <:varelaTriste:745085384047984740> <:varelaPiumPium:759776664435294239>')

  }
  if(msg.content === 'Churroman'){
    msg.channel.send('QUE NO SOY CHURROMAN! <:varelaTriste:745085384047984740> <:varelaPiumPium:759776664435294239>')

  }

});



//comandos
let prefix  = process.env.PREFIX;

client.on('message', (message) => {

if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;

//condicion para poner prefix
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    console.log(args);

    if(command === 'twitter'){
        message.channel.send('Sigueme en mi tuister: https://twitter.com/Burroman69')
    }
    if(command === 'twitch'){
        message.channel.send('Sigueme en mi tuish: https://www.twitch.tv/theburroman69')
    }
    

  //seguir con ejemplo para comandos
    if(command === 'avatar'){
            const miembro = message.mentions.users.first()
        if (!miembro) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.tag}`)
                .setDescription("Este es tu Avatar")
                .setImage(`${message.author.displayAvatarURL({dynamic: true, size : 1024})}`)
                .setColor(0x39ffd6)
                return message.channel.send(embed);
        
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle(`${miembro.tag}'`)
                .setDescription(`${message.author} Este es el Avatar de ${miembro.tag}.`)
                .setImage(miembro.displayAvatarURL({dynamic: true, size : 1024}))
                .setColor(0x39ffd6)
                return message.channel.send(embed);
        
        };
    }
    if(command === 'serverinfo'){
        var server = message.guild;
  
        const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField('Nombre', message.guild.name, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño', message.guild.owner.user.username, true)
    .addField('Miembros', message.guild.memberCount, true)
    .setColor(0x66b3ff)
    
        message.channel.send(embed);
    }    //////////////////////////////////////////////////////////////////
    if(command === 'help'){


     const embed = new Discord.MessageEmbed()
     .setThumbnail(message.guild.iconURL({dynamic: true}))   
     .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
     .setTitle('Hola soy Burroman, el bot del canal que solo echa desmadre')
     .setDescription('Aca abajo estan todos los comandos actuales que existen, y que puedes usar, con forme pase el tiempo iremos actualizando comandos y agregando nuevas cosas')
    .addField('!avatar', 'Muestra el avatar de un usuario', true)
    .addField('!serverinfo', 'Muestra información de un servidor', true)
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
    .addField('churroman', 'Solo no le digas asi', true)
    .addField('voto', 'Solo dice si o no', true)
    .addField('**Invitacion**', '[Link de invitacion](https://discord.gg/MKwRKm7TSq)', true)
    .setColor(0xff6b9f)
    .setImage('https://cdn.discordapp.com/attachments/289829636391567370/774401280458227782/varelaLove.png')
    .setFooter('Hecho por moderadores de Varelandia', 'https://cdn.discordapp.com/attachments/289829636391567370/774397423014903818/745085348387881010.png');
    
     message.author.send(embed);
    } //////////////////////////////////////////////////////////////////////////////////
                            //AMONG US
    if(command === 'impostor') { //El comando

        const mencionado = message.mentions.members.first() //Definimos mencionado
        
        let random = [
        "No era el impostor",
        "Era el impostor"
        ] //Hacemos frases para ver si es o no
        
        
        if(!mencionado)//Si el autor no menciono a nadie
        
         return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
        
        　　　.　　　 　　.　　　　　。　　 。　. 　
        
        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
        
        　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
        
        　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
        
        　　ﾟ　　　.　　　. ,　　　　.　 .`) //Enviamos el mensaje
        
        //Pero si menciona
        
        message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
        
        　　　.　　　 　　.　　　　　。　　 。　. 　
        
        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
        
        　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
        
        　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
        
        　　ﾟ　　　.　　　. ,　　　　.　 .`)
    }
                //TERMINA AMONG US
    if(command === '8burro'){

        let rpts = ["Sí", "No", "Tal vez", "No sé", "¡Claro!", "pregunta mas tarde, Estoy tomando jugo <:varelaJuguito:745085367065247794>","No sé bro, no me importa <:Burroman:772335436860882967>","Solo se que tienes problemas <:monkaW:760206755304701974>","Me dejaste pensando <:monkaHmm:760206749486678107>","Regresa luego toy mimido <:varelaWarm:759776554418438166>", "Quedé asi mira <:varelaClown:766118254938554408> " ]

        if (!args) return message.reply(`Escriba una pregunta.`)
        let usuario = message.member.user
        message.channel.send(' **El gran __Burroman__ dice:** '+ rpts[Math.floor(Math.random() * rpts.length)]+'');
    
    
    }
    if(command === 'gulag'){

        let rpts = ["Sí te iras al gulag <:uff:770760152449155072>","No te iras al gulag <:Burroman:772335436860882967>","Andas de suerte, no iras al gulag <:sadKEK:761281532035596349>", "Es Día de promo! <:happypog:772323350471114814> vete al gulag con un amigo! <:happypog:772323350471114814> ", "Al parecer haz escogido el camino de la MUERTE :smiling_imp: vete al gulag", "directo al gulag", "Hoy no es dia de Gulag <:peepoShy:774102554992312371> "]

        if (!args) return message.reply(`Escriba una pregunta.`)
        let usuario = message.member.user
        message.channel.send(' **El gran __Burroman__ dice que** '+ rpts[Math.floor(Math.random() * rpts.length)]+'');
    
    
    }
    if(command === 'love'){

        let users = message.mentions.users.map(m => m.username).join(' y ');
        if(!users) return message.channel.send('Etiqueta a dos usuarios para calcular su amor');
    
    const random = Math.floor(Math.random() * 100);
    let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            
        const embed = new Discord.MessageEmbed()
        .setAuthor('El porcentaje de amor de '+users+' es:')
        .setDescription(heard+' **'+random+' %**'+' '+heard)
        .setColor(0xff69e9)

        message.channel.send(embed);

    }
                    //jaladas a probar
    if(command === 'banned'){

        let thumb = ["https://cdn.discordapp.com/attachments/773783284920221696/774350991306391592/O3DHIA5.gif", "https://i.imgur.com/pgAybBd.gif", "https://i.imgur.com/r42VJvZ.gif", "https://i.imgur.com/bfOSpyg.gif"]
        var enlace = thumb[Math.floor(Math.random() * thumb.length)]
        const embed = new Discord.MessageEmbed()

            .setColor(0xff0700)
            .setImage(enlace)

        message.channel.send({ embed });
    }
    if(command === 'espai'){
        message.channel.send('Espai es Gei  <:uff:770760152449155072> y pendejo! <:pepePoint:761701490766643260>')
    
    
    }              //JUEGO DE PESCA
    if(command === 'pesca'){

        let rollfish = Math.floor(Math.random() * 21) +1;
        if(rollfish === 1) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :tropical_fish:');
        if(rollfish === 2) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :fish:');
        if(rollfish === 3) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :shopping_cart:');
        if(rollfish === 4) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :radio:');
        if(rollfish === 5) return message.channel.send('Vaya, ' + message.author.username + ' parece que hoy no es tu dia de suerte :pensive: ');
        if(rollfish === 6) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :minidisc:');
        if(rollfish === 7) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :squid:');
        if(rollfish === 8) return message.channel.send('Vaya, ' + message.author.username + ' parece que hoy no es tu dia de suerte :pensive: ');
        if(rollfish === 9) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :crab:');
        if(rollfish === 10) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :roll_of_paper:');
        if(rollfish === 11) return message.channel.send('Vaya, ' + message.author.username + ' parece que hoy no es tu dia de suerte :pensive: ');
        if(rollfish === 12) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :roll_of_paper:');
        if(rollfish === 13) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :crab:');
        if(rollfish === 14) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :tropical_fish:');
        if(rollfish === 15) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :dolphin:');
        if(rollfish === 16) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :lobster:');
        if(rollfish === 17) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :shark:');
        if(rollfish === 18) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :whale:');
        if(rollfish === 19) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :lobster:');
        if(rollfish === 20) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :shark:');
        if(rollfish =>  21) return message.channel.send('Vaya, ' + message.author.username + ' parece que hoy no es tu dia de suerte :pensive: ');
                //fin juego de PESCA

    }
    if(command === 'voto'){

        let rpts = ["Sí", "No"]

        if (!args) return message.reply(`Escriba una pregunta.`)
        let usuario = message.member.user
        message.channel.send(' **El gran __Burroman__ dice:** '+ rpts[Math.floor(Math.random() * rpts.length)]+'');
    
    
    }
   if(command === 'tiempo'){

        let rpts = ["1 minuto", "5 minutos", "10 minutos", "15 minutos", "20 minutos", "30 minutos" ]

        if (!args) return message.reply(`Escriba una pregunta.`)
        let usuario = message.member.user
        message.channel.send(' Estaras en el gulag '+ rpts[Math.floor(Math.random() * rpts.length)]+'');
    
    
    }
    




});

client.login(process.env.TOKEN);

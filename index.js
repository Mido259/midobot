const express = require('express');
const app = express();
const chalk = require("chalk");
let config = require('./config.json')
let prefix = config.prefix

app.get('/', (req, res) => {
  res.send('Hello Express app!')
})

app.listen(3000, () => {
  console.log(chalk.red.bold('Medo'))
});
//packaging

const { Client, Collection , MessageActionRow , MessageButton , MessageSelectMenu , Modal , TextInputComponent , MessageEmbed } = require("discord.js");
let db = require('pro.db')

//VARS

const applycategory = "1229051451485978624";

const line = "https://cdn.discordapp.com/attachments/1130255297777246218/1206026295276736552/1016488006535884830.gif"
const lineof = "https://cdn.discordapp.com/attachments/1130255297777246218/1206026295276736552/1016488006535884830.gif"
const linetr = "https://cdn.discordapp.com/attachments/1130255297777246218/1206026295276736552/1016488006535884830.gif"
const linegi = "https://cdn.discordapp.com/attachments/1130255297777246218/1206026295276736552/1016488006535884830.gif"
const linene = "https://cdn.discordapp.com/attachments/1130255297777246218/1206026295276736552/1016488006535884830.gif"
const linesu = "https://cdn.discordapp.com/attachments/1130255297777246218/1206026295276736552/1016488006535884830.gif"
const linefe = "https://cdn.discordapp.com/attachments/1130255297777246218/1206026295276736552/1016488006535884830.gif"
const wel = "https://cdn.discordapp.com/attachments/1130255297777246218/1206026295276736552/1016488006535884830.gif"
const offersroom = "1229034356580941865"
const logroom = ""
const feedbackroom = "1229048507068059770"
const teamrole = "1229110170240679939"
let sugchannel = "1229048393368731790"
let fedchannel = "1229048507068059770"
let ordercategory = "1229037193553772555"
let adsategory = "1228992522324283402"
let clientategory = "1229037933739245589"
let supportcategory = "1229052347494170767"
let wasetcategory = "1229047283283394571"
var netflixrole = "<@&1229111534224150578>"

var instarole = "<@&1229111532986699920>"

var nitrorole = "<@&1229110177672728728>"

var visarole = "<@&1229108909118324756>"

var botrole = "<@&1229110171704496179>"

var ucrole = "<@&1229111533624230068>"

var voterole = "<@&1229111531686334617>"

var boostrole = "<@&1229111532332519475>"

var spotifyrole = "<@&1229111531250257940>"

var shahidrole = "<@&1229130137673531403>"

var tiktokrole = "<@&1229111537793503234>"
var taxchannel = "1229036607605309440"
var welcome = "1228990391387426847"
let order = "1207042456580001852"
let applyteam = "1208690211064909874"
let yes = "<:5921like:1229448728658841671>"
let no = "<:2195dislike:1229448452010938510>"
let tag = "《𝐄𝐆𝐘》・"
let link = "https://discord.gg/6BWkQZ24mK"
let upgraderoom = "1228988837921951795"
let welcomesellerroom = "1228988704018792540"
let numbers = "1228979833615421511"
let clientid = "1229046934434484295"
let co = "#030224"
let mediatorcategory = "1212754830209192017"
let trans1 = "1229033895660490894"
let trans2 = "1229036482552139796"
let trans3 = "1204500011359141960"
var owner = ["596144444147761203","1073191316961382441",""] 

const client = new Client({
  intents: 32767
}).setMaxListeners(0);
/*client.on('guildCreate', async(guild) => {
  if(guild.id != "885295158755721329") {
    await guild.leave();*/
  

//
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
require("./handler")(client);
//


 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 


client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != offersroom) return;
  message.react("<a:diam:1206928403110825984>")
})

client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != offersroom) return;
  message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    })
})

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let channels =["1228984310531362896","1228978674607460412","1228979598256115774","1228978980409966632","1228980120245633066","1228984310531362896","1228985677618745516","1228985708019191881","1228986156947869796","1228987175941701703","1228991313190326293","1229034711158886451","1228988213465452624","1229038077926707290","1228987608974102569"]
  if(!channels.includes(message.channel.id)) return;
  message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    })
})

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let channels =[""]
  if(!channels.includes(message.channel.id)) return;
  message.channel.send(lineof)
})

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let channels =["",""]
  if(!channels.includes(message.channel.id)) return;
  message.channel.send(linegi)
})

      client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != "1206999455107252365") return;
        
   
  message.react("<a:diam:1206928403110825984>")
        message.channel.send(line)
})

//{Voice}//

const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch("1229352956961357867") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 

//help//
	
client.on("messageCreate", message => {
  if (message.content == prefix + "help") {
    const embed = new MessageEmbed()
      .setTitle("**𝐇𝐞𝐥𝐩 𝐂𝐦𝐝𝐬**")
    .setColor("#030224")
      .setImage(line)
      .setThumbnail(message.guild.iconURL())
    
    .setDescription(`**
> ・~ 𝐇𝐞𝐲 : ${message.author} <:1116341222064271390:1229443769099616287>

> ・~ 𝐈𝐦 : __ ${client.user.username} __ <:Staff:1229284682412326974>

> ・~ 𝐌𝐲 𝐏𝐫𝐞𝐟𝐢𝐱 : __ + __ <:tag:1229357490336956458>

> ・~ 𝐈 𝐖𝐨𝐫𝐤 𝐅𝐨𝐫 : __ ${message.guild.name} __ <:emoji_32:1229293329909420082>

> ・~ 𝐌𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 : __ [𝐌𝐞𝐝𝐨](https://discord.com/users/1073191316961382441) __ <:verified:1229293349651877900>
**`);

    let row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('commands')
        .setPlaceholder('⚘・𝐒𝐞𝐥𝐞𝐜𝐭 𝐀 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲')
        .addOptions([
          {
            label: '𝐎𝐰𝐧𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Owners',
            description: 'Commands for Owners',
            emoji: '<a:emoji_211:1064842844172455956>',
          },
          {
            label: '𝐏𝐮𝐛𝐥𝐢𝐜 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Public',
            description: 'Commands for Public',
            emoji: '<a:aa:1075236857358598185>',
          },
          {
            label: '𝐀𝐝𝐦𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Admins',
            description: 'Commands for Admins',
            emoji: '<a:ss_4:1064843136276365412>',
          },
          {
            label: '𝐒𝐭𝐨𝐫𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Store',
            description: 'Commands for Store',
            emoji: '<a:DesignS:1064842187952619550>',
          },

        ]),
    );

    const devButton = new MessageButton()
      .setStyle('LINK') 
      .setLabel('𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫')
      .setEmoji('<:emoji_375:1103439506973130873>')
      .setURL('https://discord.com/users/1073191316961382441');

    const supportServerButton = new MessageButton()
      .setStyle('LINK')
      .setEmoji('<a:true:1064843178483666964>')
      .setLabel('𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐒𝐞𝐫𝐯𝐞𝐫')
      .setURL('https://discord.gg/6BWkQZ24mK');

    const rowWithButtons = new MessageActionRow().addComponents(devButton, supportServerButton);
    message.channel.send({ embeds: [embed], components: [row, rowWithButtons] });
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isSelectMenu()) return;

  const category = interaction.values[0];

  if (category === 'Owners') {
    const first = new MessageEmbed()
      .setTitle("**Owners Cmds**")
    .setColor("#030224")
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}tbc \` To Send Broadcast For Team \`

> ${prefix}de \` To Delete Tickets Order \`**`);

    interaction.update({ embeds: [first], components: interaction.message.components });
  } else if (category === 'Public') {
    const publicCmds = new MessageEmbed()
      .setTitle("**Public Cmds**")
    .setColor("#030224")
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`** 
> ${prefix}link \` To Show Link Server \`

> ${prefix}inrole \` To Show Role Member \`

> ${prefix}ping \` To Show Ping \`

> ${prefix}avatar \` To Show Avatar Member \`

> ${prefix}avatar-server \` To Show Avatar server \`

> ${prefix}dev \` To Find Out Who Made The Bot\`

> ${prefix}tax \` To Show Tax A Number \`

> ${prefix}font \ To Change Word For __𝐖𝐨𝐫𝐝__ \**`);

    interaction.update({ embeds: [publicCmds], components: interaction.message.components });
  } else if (category === 'Admins') {
    const adminCmds = new MessageEmbed()
      .setTitle("**Admin Cmds**")
    .setColor("#030224")
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}embed \` To Make Embed Message \`

> ${prefix}say \` To Make Say Message \`

> ${prefix}ban \` To Ban Member \`

> ${prefix}unban \` To UnBan Member \`

> ${prefix}unbanall \` To UnBan All Member \`

> ${prefix}lock \` To Lock Channel \`

> ${prefix}lockall \` To Lock all Channels \`

> ${prefix}unlock \` To UnLock Channel \`

> ${prefix}unlockall \` To UnLock all Channels \`

> ${prefix}show \` To Show Channel \`

> ${prefix}showall \` To Show all Channels \`

> ${prefix}hide \` To Hide Channel \`

> ${prefix}hideall \` To Hide all Channels \`

> ${prefix}role \` To Give Role / Remove To Member \`

> مقبول \` To Accept Someone For Team \`
 
> مرفوض \` To Reject Someone For Team \`
 
> دليل \` To Get The Pro Bot Website Where You Can Find The Guide \`
 
> ${prefix}rep \` To obtain a form if you want to inform someone \`
**`);

    interaction.update({ embeds: [adminCmds], components: interaction.message.components });
  } else if (category === 'Store') {
    const storeCmds = new MessageEmbed()
      .setTitle("**Store Cmds**")
    .setColor("#030224")
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}dm \` To Send Msg DM To Member \`
      
> ${prefix}come \` To Come DM To Member \`

> ${prefix}welcome-S \` To Welcome Seller \`

> ${prefix} \`To Transfer Channel \`

> ${prefix}Num-S \` To Number Seller \`

> ${prefix}Cl-Id \` To Id Client \`

> ${prefix}upgrade \` To Upgrade Seller \`

> ${prefix}tag \` To Change Seller Name \`
**`);

interaction.update({ embeds: [storeCmds], components: interaction.message.components });
} 
});

//tbc
client.on('messageCreate', async Medodev => {
  if (Medodev.content.startsWith(prefix + 'tbc')) {
    if(!owner.includes(Medodev.author.id)) return Medodev.reply(`**This Command Only Owners Ship**`);
    const args = Medodev.content.slice('!tbc'.length).trim().split(/ +/);
    const role = Medodev.mentions.roles.first();
    const content = args.slice(1).join(' ');

    if (!role) {
      return Medodev.reply('**Enter Your Role **');
    }
    if (!content) {
      return Medodev.reply('**Enter Your Message **');
    }

    const membersWithRole = role.members;
    membersWithRole.forEach(member => {
      member.send(`${content} 

<@${member.id}> `)
        .then(() => console.log(`Sent message to ${member.displayName}`))
        .catch(console.error);
    });

  Medodev.reply(`**Done Send Your Message To ${membersWithRole.size}**`);
  }
}); 
//welcome
client.on('guildMemberAdd' , async(member) => {
  let userName = member.user.username
  let createdAt = member.user.createdAt
  let memberCount = member.guild.members.cache.size
  let welcomefukenembed = new MessageEmbed()
  .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
  .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
  .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  .setDescription(`> ** <:emoji_32:1229293329909420082> 𝐇𝐞𝐲 : __${userName}__**
<:1116341222064271390:1229443769099616287>  | 𝐇𝐢 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __𝐓𝐚𝐫𝐬𝐡 𝐒__ 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐀𝐧𝐝 𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐒𝐭𝐨𝐫.𝐞𝐬 𝐈𝐧 𝐓𝐡𝐞 <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐓𝐡𝐢𝐬 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐇𝐞𝐥𝐩𝐢𝐧𝐠 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬. <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 <#1229036194734805062> <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦 <#1229050304050364489> <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 :⁠ <#1229052091868385372> <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐌𝐞𝐦𝐛𝐞𝐫 𝐈𝐝 : __ ${member.user.id} __  <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐀𝐭 __${createdAt.toLocaleString()}__ <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐘𝐨𝐮 𝐀𝐫𝐞 𝐌𝐞𝐦𝐛𝐞𝐫 𝐍𝐮𝐦𝐛𝐞𝐫 : __${member.guild.memberCount}__ <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐄𝐧𝐣𝐨𝐲 <𝟑 ♥️  `) 
  .setImage(line)
  .setColor(co)
  member.guild.channels.cache.get(welcome).send({ content: `<@!${member.user.id}>` , embeds: [welcomefukenembed]})
  member.send(`> **<:emoji_32:1229293329909420082> 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 ${member.guild.name}**

<:1116341222064271390:1229443769099616287>  | 𝐇𝐢 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __𝐓𝐚𝐫𝐬𝐡 𝐒__ 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐀𝐧𝐝 𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐒𝐭𝐨𝐫.𝐞𝐬 𝐈𝐧 𝐓𝐡𝐞 <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐓𝐡𝐢𝐬 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐇𝐞𝐥𝐩𝐢𝐧𝐠 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬. <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 <#1229036194734805062> <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦 <#1229050304050364489> <:Crown:1229357490336956458> 

<:Staff:1229284682412326974>   | 𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 :⁠ <#1229052091868385372> <:Crown:1229357490336956458> 
`)
})
///
client.on('messageCreate', message => {
  if (message.content.startsWith('السلام عليكم')) {
    return message.reply(`\`-\`  عليكم السلام يابرو <:emoji_32:1229293329909420082> 
\`-\` Welcome to : ${message.guild.name} <:Crown:1229357490336956458> `)
  }
});



//

client.on('messageCreate', async(message) => {
  if(message.author.bot) return;
  if(message.content === "+rep") {
    message.delete()
    message.channel.send(`**
>  <:Staff:1229284682412326974>| للتبليغ علي سيلر  قم باملاء الاستماره حتي نستطيع تعويضك

>  <:Staff:1229284682412326974>| صاحب البلاغ  :

>  <:Staff:1229284682412326974>| اسم السيلر فالديسكورد :

>  <:Staff:1229284682412326974>| ايدي السيلر فالديسكورد :

>  <:Staff:1229284682412326974>| القصه :

>  <:Staff:1229284682412326974>| قم بارسال الدلائل  :
**`)
      message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    })

  
  }
  if(message.content === "مقبول") {
 message.delete()
message.channel.send(`**

>  مقبول 

>  شوف الـ  <#1228987175941701703> <:Staff:1229284682412326974>

>  والـ  <#1228987324700819487> <:Staff:1229284682412326974> 

>  نورتنا <:emoji_32:1229293329909420082>

---------------------------------------------------

>  Acceptable 

>  Read <#1228987175941701703> <:Staff:1229284682412326974>

>  And <#1228987324700819487> <:Staff:1229284682412326974>

>  You enlightened <:emoji_32:1229293329909420082>

**`)
      message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    }) 

  }
if(message.content === "دليل") {
 message.delete()
message.channel.send(`>  <:Staff:1229284682412326974>| ** يرجي اجباريأ لمساعدتك بالكامل ، ارسال صوره للتحويلات عن طريق موقع التحويلات :**   

> <:Staff:1229284682412326974>| **𝐀𝐛𝐨𝐮𝐭 : https://probot.io/transactions **`)
      message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    }) 

  }
if(message.content === "+ws") {
    message.delete()
    message.channel.send(`**<:emoji_32:1229293329909420082> | مرحبا معاك من طاقم العمل  ${message.author} <:Staff:1229284682412326974> 

<:Staff:1229284682412326974> | سيتم ترك التذكره لمده تتراوح مبين 30 الي 60 دقيقة ، اذا تم غلق التذكره فاعلم ان طلبك غير متوفر حالياً__ , يمكنك فتح تذكره في وقت اخر__ <:emoji_32:1229293329909420082> 

<:Staff:1229284682412326974> | وشكراً لتفهمك <:1116341222064271390:1229443769099616287> 

<:emoji_32:1229293329909420082> | 𝐇𝐞𝐥𝐥𝐨, 𝐰𝐢𝐭𝐡 𝐲𝐨𝐮 𝐟𝐫𝐨𝐦 𝐭𝐡𝐞 𝐬𝐭𝐚𝐟𝐟 𝐒𝐭𝐚𝐟𝐟   ${message.author}<:Staff:1229284682412326974> 

<:Staff:1229284682412326974> | 𝐓𝐡𝐞 𝐭𝐢𝐜𝐤𝐞𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐥𝐞𝐟𝐭 𝐟𝐨𝐫 𝐚 𝐩𝐞𝐫𝐢𝐨𝐝 𝐫𝐚𝐧𝐠𝐢𝐧𝐠 𝐟𝐫𝐨𝐦 𝟑𝟎 𝐭𝐨 𝟔𝟎 𝐦𝐢𝐧𝐮𝐭𝐞𝐬, 𝐢𝐟 𝐭𝐡𝐞 𝐭𝐢𝐜𝐤𝐞𝐭 𝐢𝐬 𝐜𝐥𝐨𝐬𝐞𝐝, 𝐤𝐧𝐨𝐰 𝐭𝐡𝐚t 𝐲𝐨𝐮𝐫 𝐚𝐩𝐩𝐥𝐢𝐜𝐚ti𝐨𝐧 i𝐬 𝐜𝐮𝐫𝐫e𝐧t𝐥𝐲 𝐮𝐧𝐚𝐯𝐚i𝐥𝐚𝐛𝐥e, __𝐘𝐨𝐮 𝐜𝐚𝐧 𝐨𝐩𝐞𝐧 𝐚 𝐭𝐢𝐜𝐤𝐞𝐭 𝐚𝐭 𝐚𝐧𝐨𝐭𝐡𝐞𝐫 𝐭𝐢𝐦𝐞__ <:emoji_32:1229293329909420082> 

<:Staff:1229284682412326974> | 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐲𝐨𝐮𝐫 𝐮𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 <:1116341222064271390:1229443769099616287>**`)
   message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    })
}
  if(message.content === "خمول") {
    message.delete()
    message.channel.send(`**
<:Staff:1229284682412326974>  |يرجي العلم أنه في حاله الخمول في التذكره لمده عشر دقايق سوف يتم غلق التذكره تلقائيا من طاقم العمل ! <:emoji_32:1229293329909420082> 

<:Staff:1229284682412326974>  | Please note that in case of inactivity in the ticket for 10 Minutes, the ticket will be closed by the support ! <:emoji_32:1229293329909420082>
**`)
   message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    })
}
  if(message.content === "LINK") {
    message.channel.send(`<:Staff:1229284682412326974>  | 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 __𝐓𝐚𝐫𝐬𝐡 𝐒 __



<:Staff:1229284682412326974>  | 𝐥𝐢𝐧𝐤 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : https://discord.gg/6BWkQZ24mK <:tag:1229357490336956458> 


<:Staff:1229284682412326974>  | 𝐄𝐧𝐣𝐨𝐲 𝐁𝐫𝐨 <:tag:1229357490336956458> 
<:Staff:1229284682412326974>  | 𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 : <#1229036194734805062> 
<:Staff:1229284682412326974>  | 𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 : <#1229052091868385372> 
<:Staff:1229284682412326974>  | 𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 : <#1229050304050364489>`)
  }
    if(message.content === "Link") {
    message.channel.send(`<:Staff:1229284682412326974>  | 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 __𝐓𝐚𝐫𝐬𝐡 𝐒 __



<:Staff:1229284682412326974>  | 𝐥𝐢𝐧𝐤 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : https://discord.gg/6BWkQZ24mK <:tag:1229357490336956458> 


<:Staff:1229284682412326974>  | 𝐄𝐧𝐣𝐨𝐲 𝐁𝐫𝐨 <:tag:1229357490336956458> 
<:Staff:1229284682412326974>  | 𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 : <#1229036194734805062> 
<:Staff:1229284682412326974>  | 𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 : <#1229052091868385372> 
<:Staff:1229284682412326974>  | 𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 : <#1229050304050364489>`)
  }
  if(message.content === "مرفوض") {
    message.delete()
    message.channel.send(`
**مرفوض <:7728cursedpepe:1229448453889720422>

<:1116341222064271390:1229443769099616287> طور من أداءك وقدم تاني 

------------------------------------------------------------- 

Unacceptable <:7728cursedpepe:1229448453889720422>

Develop your performance and apply again <:1116341222064271390:1229443769099616287> **`)
  message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    }) 

  }
   
    if(message.content === "لينك" || message.content === "link" || message.content === "Link") {
      message.delete()
    message.channel.send(`<:Staff:1229284682412326974>  | 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 __𝐓𝐚𝐫𝐬𝐡 𝐒 __



<:Staff:1229284682412326974>  | 𝐥𝐢𝐧𝐤 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 : https://discord.gg/6BWkQZ24mK <:tag:1229357490336956458> 


<:Staff:1229284682412326974>  | 𝐄𝐧𝐣𝐨𝐲 𝐁𝐫𝐨 <:tag:1229357490336956458> 
<:Staff:1229284682412326974>  | 𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 : <#1229036194734805062> 
<:Staff:1229284682412326974>  | 𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 : <#1229052091868385372> 
<:Staff:1229284682412326974>  | 𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 : <#1229050304050364489>`)
  }
  if(message.content === "+point") {
    if(!message.member.roles.cache.has(teamrole)) return message.reply("**This Command For Only Seller**")
    let pointss = db.get(`points_${message.author.id}`)
  let points = pointss.count;

      let fb = db.get(`feedback_${message.author.id}`)
      if(fb == null) fb = 0

      let offers = db.get(`offers_${message.author.id}`)
      if(offers == null) offers = 0
    message.channel.send(`\`\`\`
 𝖴𝗌𝖾𝗋 𝖯𝗈𝗂𝗇𝗍𝖲
\`\`\`

\`-\`𝖯𝗈𝗂𝗇𝗍𝖲 𝖥𝗈𝗋 :<@${message.author.id}>

---------------------------------------------------------------------------------------------------------------------------------


\`-\`𝖯𝗈𝗂𝗇𝗍𝖲 𝖢𝗈𝗎𝗇𝗍 : ${points}

---------------------------------------------------------------------------------------------------------------------------------

\`-\`𝖥𝖾𝖾𝖽𝖡𝖺𝖼𝗄𝖲 𝖢𝗈𝗎𝗇𝗍 : ${fb}

---------------------------------------------------------------------------------------------------------------------------------

\`-\`𝖮𝖿𝖿𝖾𝗋𝖲 𝖢𝗈𝗎𝗇𝗍 : ${offers} 

---------------------------------------------------------------------------------------------------------------------------------`)
      }
  if(message.content === "لاين" || message.content === "line" || message.content === "خط") {
    message.delete();
    message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    })
}


  if(message.content === "+" || message.content === "+" || message.content === "+") {
    message.reply(`**__برجاء التحويل هنا __**

<:Staff:1229284682412326974> __ <#1229036482552139796> __ <:Staff:1229284682412326974>`)
  message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    }) 

  }


  if(message.content === "fb" || message.content === "Fb") {
    message.reply(`
**
  شكرا لاختيارك ${message.guild.name} <:Crown:1229357490336956458>

Thanks For Choosing ${message.guild.name} <:Crown:1229357490336956458>


رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن. ${message.author} 

Your opinion matters , Please give feedback and mention the name of the person  ${message.author}

----------------------------------------------


Here :
 <#${fedchannel}>

 **
 `)
      message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    })
  }
    
})



client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();
 if (command === "de") {
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`** 😕 You don't have permission **`);
      
const tickets = message.guild.channels.cache.filter(c => c.parentId === "1229037193553772555");

if (tickets.size === 0) return message.reply("**There Is 0 Ticket Channels You Can't Use This Command Now !**");

message.reply(`**Deleting ${tickets.size} Ticket Channel...**`)

tickets.forEach(async t => {

const embed = new MessageEmbed ()
.setColor(co)
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.addFields(
	{ name: 'Logged Info', value: `Ticket: ${t.name}\nAction: Deleted` },
  { name: 'Panel', value: `Order` },
)
  
await t.delete()
.then(() => message.guild.channels.cache.get("1230044213765214330").send({embeds:[embed]}))
.catch((e) => message.channel.send(`**Error: ${e}**`))
  
})
      
    }
  if(command === "come") {
    let args = message.content.split(" ");
    let user = message.mentions.users.first() || client.users.cache.get(args[1]);
let args2 = args.slice(3).join(' ');
    if(!user) return message.reply("Mention ")
    if(!args2) Message = 'empty'
    message.reply(`**Done,Pls Don't Spam**`)
    user.send(`
> **Hey** ${user}  <:tag:1229357490336956458>


> **Pls Come** <#${message.channel.id}>   <:Staff:1229284682412326974>


> **Message Notes** : ${args2}  <:emoji_32:1229293329909420082>


> **Server Link : ** ${link} `)
  }
  
  if(command === "dm") {
    let args = message.content.split(" ");
    let user = message.mentions.users.first() || client.users.cache.get(args[1]);
let args2 = args.slice(3).join(' ');
    if(!user) return message.reply("Mention")
    if(!args2) return message.reply("**Put Message**")
    message.reply(`**Done Send Message,Pls Don't Spam**`)
    user.send(`
> **${args2}** <:emoji_32:1229293329909420082>
>  __<#${message.channel.id}>__ <:Staff:1229284682412326974>
> ${user} <:tag:1229357490336956458> `)
}
    if(command === "Fb") {
    message.reply(`
**
 شكرا لاختيارك ${message.guild.name} <:Crown:1229357490336956458>

 Thanks For Choosing ${message.guild.name} <:Crown:1229357490336956458>


رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن

Your opinion matters , Please give feedback and mention the name of the person 

----------------------------------------------


Here :

 <#${fedchannel}>
 **
 `)
       message.channel.send({

      embeds: [

        new MessageEmbed()

          .setImage(line)

          .setColor(co)

      ]

    }) 
  }
    

 
    
  //ban
  if (command === "ban") {
    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if (!user) return message.reply(`** 😕 Please mention or id **`);
    if (user.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

    if (!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => { console.log(err) });
    await message.reply(`✅ **${user.user.tag} banned from the server!**✈️`);
  }//unban
  if (command === "unban") {
    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let args = message.content.split(' ')
    let id = args[1];
    if (!id) return message.reply(`** 😕 Please mention or id **`);
    if (isNaN(id)) {
      return message.reply(`** 😕 Please mention or id **`);
    } else {
      message.guild.members.unban(id).then(mmm => {
        message.reply(`✅ ** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
    }
  }
  if (command === "unbanall") {

    if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply(`** 😕 You don't have permission **`);

    const serverban = client.guilds.cache.get(message.guild.id)
    message.guild.bans.fetch().then(bans => {
      bans.forEach(ban => {
        serverban.members.unban(ban.user.id)
      })
    }).then(() => {
      message.reply({ content: `> ** Done __Unbanned__ All Banlist **` })
    })

  }//kick
  if (command === "kick") {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let id = message.content.split(' ').slice(1).join(' ')
    let user = message.mentions.members.first() || message.guild.members.cache.get(id)
    if (!user) return message.reply(`** 😕 Please mention or id **`)
    if (user.roles.highest.position > message.guild.members.resolve(message.author).roles.highest.position) return
    message.reply(`** ❌ You can't ban this user **`)
    if (user.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) return message.reply(`** ❌ You can't ban this user **`)
    user.kick().then(() => message.reply(`**✅ @${user.user.username} kicked from the server!**`)).catch(err => message.reply(err))
  }
  if (command === "lock") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: false
    }).then(() => {
      message.reply(`**🔒 ${message.channel} has been looked.** `)
    })
  }
  if (command === "unlock") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: true
    }).then(() => {
      message.reply(`**🔓 ${message.channel} has been unlooked.** `)
    })
  }
  if (command === "lockall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: false
      });
    });
    message.reply("> ** Done __locked__ All Server Channels**")
  }
  if (command === "unlockall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: true
      });
    });
    message.reply("> ** Done __Unlocked__ All Server Channels**")
  }
  if (command === "show") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      message.reply(`**✅ ${message.channel} Done show this room.**`)
    })
  }
  if (command === "hide") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      message.reply(`**✅ ${message.channel} Done hide this room.**`)
    })
  }
  if (command === "showall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        VIEW_CHANNEL: true
      });
    });
    message.reply("> ** Done __Showed__ All Server Channels**")
  }
  if (command === "hideall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

     let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        VIEW_CHANNEL: false
      });
    });
    message.reply("> ** Done __Hidedd__ All Server Channels**")
  }
    
const { SlashCommandBuilder } = require('discord.js')
  if (command === "line") {
    message.delete()
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setColor(co)
          .setImage(line)

      ]
    })
  }
})

// ===================== Embed Command ===================== \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'embed')) {
      
if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`)

      
let args = message.content.split(' ').slice(1).join(' ')
  
  if (!args) return message.reply('** :x: Please select a message **')
      
    message.delete();
      
    let embed = new MessageEmbed()
      
    .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))

    .setImage(line)
    .setDescription(`**${args}**`) 	
    .setThumbnail(message.guild.iconURL({ dynamic: true }))


.setColor(co)


   .setTimestamp()

let attach = message.attachments.first();

if (attach) {
   embed.setImage(attach.proxyURL)     
       }
   message.channel.send({embeds: [embed]});
    }
})

// ===================== Say Command ===================== \\

client.on("messageCreate", async message => {
if (message.author.bot) return;
if (!message.channel.guild) return;
if (message.content.startsWith(prefix + 'say')) {
  
if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(` ** You don't have permissions ** `)

let args = message.content.split(' ').slice(2).join(' ')
  
let argss = message.content.split(' ')
  
        let attach = message.attachments.first()
    
        if (!args) return message.channel.send('** Please send something**');
  
        message.delete()
      if (!attach) {
        message.channel.send({content: `${args}`});
} else {
        message.channel.send({content: `${args}`, files: [attach]});
}
    }
})

// ===================== Inrole Command ===================== \\

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "inrole")) {
      let args = message.content.split(" ").slice(1).join(" ");
      if(message.author.bot) return;
      let trole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args)
       if (!trole) {
           return message.reply(`**:rolling_eyes: Please mention role id**`)
       } else {
           const roleMember = trole.members.map((user) => `${user.id} ${user.user.tag}`).join('\n')
    message.reply({embeds: [
     new MessageEmbed() 
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
      
.setThumbnail(message.author.avatarURL({dynamic:true}))
      .addFields([
    {
    name: `List of users in ${trole.name} role : (${trole.members.size})`,
    value: `**${roleMember}**`
},
])  
.setColor(co)
.setFooter(`Members in this role ${trole.members.size}`)]})
  }
  }
 }) 
//delete Ticket//


//
client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();

  if (command === "avatar-server") {
    var button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setEmoji('✨')
          .setLabel(`Download Server Avatar`)
          .setURL((`${message.guild.iconURL({ dynamic: true, size: 4096 })}`))
      );
    message.reply({
      embeds: [
        new MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setDescription(`[Server Avatar link](${message.guild.iconURL({ dynamic: true, size: 4096 })})`)
          .setImage(`${message.guild.iconURL({ dynamic: true, size: 4096 })}`)
      ], components: [button]
    })
  }
  if (command === "avatar") {
    let ff = message.mentions.users.first() || message.author;
    let userr = message.member.guild.members.cache.get(ff.id)

    var button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setEmoji('✨')
          .setLabel(`DOWNLOAD AVATAR`)
          .setURL(userr.displayAvatarURL({ dynamic: true })));


    message.reply({
      embeds: [
        new MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setDescription(`[Avatar link](${userr.user.displayAvatarURL({ dynamic: true, size: 4096 })})`)
          .setImage(userr.displayAvatarURL({ dynamic: true, size: 4096 }))
      ], components: [button]
    })
  }  

  if (command === "server") {
    await message.guild.members.fetch();
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache.size;
    const firstFiveEmojis = message.guild.emojis.cache.map(emoji => emoji).slice(0, 5).join(' ');
    const boostCount = message.guild.premiumSubscriptionCount;
    const verificationLevel = message.guild.verificationLevel;
    const rolesCount = message.guild.roles.cache.size;

    await message.reply({
      embeds: [
        new MessageEmbed()
          .setColor(co)
          .setAuthor({ name: `${message.guild.name} Info`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
          .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
          .addFields(
            { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },
            { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
            { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
            { name: `👥  Members (${message.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
            { name: `💬 Channels (${message.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
            { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}** <a:BoostBadges:1013231177651458139>\nRoles: **${rolesCount}**`, inline: true },
            { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
          )
      ], ephemeral: true
    })
  }
  
    if (command === "invites") {

      const mentionedMember = message.mentions.members.first();

      if (!mentionedMember) {

          return message.reply('User ?');

      }

      try {

          const invite = await inviteTracker.getMemberInvites(mentionedMember);

          message.reply(`> ** ${message.mentions.member} Has Got : ${invite.count} Invite **`);

      } catch (error) {

          console.error('Error fetching invites:', error);

          message.reply('An error occurred while fetching invites.');

      }

  }
  if (command === "ping") {
    message.reply({
      embeds: [
        new MessageEmbed()
          .setDescription(`**
    🏓 Pong 🏓 
    
   Latency is ${message.createdTimestamp - message.createdTimestamp}ms. 
   API Latency is ${Math.round(client.ws.ping)}ms
   Ws Ping Is ${client.ws.ping} **`)
          .setColor('#030224')
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      ]
    })
  }
 
    
    if(command === "tax") {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" "); 
    if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number**`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 **`);
        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji("<:CreditUsRDrG:1081965534255513631>")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("<:CreditUsRDrG:1081965534255513631>")
        .setStyle('DANGER')
);
        let m = await message.reply({ content: `
${tax}` , components: [row]});
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ content: `
${tax4}`, components: [row2]})
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ content: `
${tax}`, components: [row] })
            
                  i.deferUpdate()
          } else {
            return;
          }
       });
  }
}) 
//tag
client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'tag') {
    let mentionedUser = await message.mentions.members.first();
    let additionalText = args.slice(1).join(' ');

    if (!mentionedUser) {
      return await message.channel.send('user?');
    }

    let stylizedText = additionalText.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎");

    let newNickname = `𝐓𝐚𝐫𝐬𝐡 | ${stylizedText}`;

    await mentionedUser.setNickname(newNickname).then(async () => {
      await message.channel.send(`**__Done Adding Server Tag To ${mentionedUser}__**`);
    }).catch(err => message.channel.send(`**I don't have Permission to do that**`));
}
});
// support 
client.on('channelCreate', message => {

  if (message.parentId !== supportcategory) return;

  setTimeout(() => {
    message.send(`
> **Welcome in __𝐓𝐚𝐫𝐬𝐡 𝐒__ <:tag:1229357490336956458>  ** 

> **__𝐓𝐚𝐫𝐬𝐡 𝐒__ اهلا بك في <:tag:1229357490336956458>  **  
 
> **شكرا لك للتواصل معنا وسوف يتم الرد عليك في اسرع وقت **
__ <@&1229110176360173670> __
 `)
    
      /*.then(message => {
      message.channel.send(`
> **Welcome in __${message.guild.name}__** :emoji_44: 

> **اهلا بك في __${message.guild.name}__** :emoji_44:   
> **اتفضل حدد طلبك حتى تتواصل معك الجهة المختصه.** :emoji_51:`)
    })*/
  }, 1000);
})
// ads
client.on('channelCreate', message => {

  if (message.parentId !== adsategory) return;

  setTimeout(() => {
    message.send(`
> **Welcome in __𝐓𝐚𝐫𝐬𝐡 𝐒__ <:tag:1229357490336956458>  ** 

> **__𝐓𝐚𝐫𝐬𝐡 𝐒__ اهلا بك في <:tag:1229357490336956458>  **  

**
> 1 - اسم السيرفر :

> 2 - المنشور :

> 3 - ما هو المنشن والدفع الذي ستدفعه :

> طريقة دفعك :
**
__ <@&1229107292847341671> __
 `)
    
      /*.then(message => {
      message.channel.send(`
> **Welcome in __${message.guild.name}__** :emoji_44: 

> **اهلا بك في __${message.guild.name}__** :emoji_44:   
> **اتفضل حدد طلبك حتى تتواصل معك الجهة المختصه.** :emoji_51:`)
    })*/
  }, 1000);
})
// Client
client.on('channelCreate', message => {

  if (message.parentId !== clientategory) return;

  setTimeout(() => {
    message.send(`
> **Welcome in __𝐓𝐚𝐫𝐬𝐡 𝐒__ <:tag:1229357490336956458>  ** 

> **__𝐓𝐚𝐫𝐬𝐡 𝐒__ اهلا بك في <:tag:1229357490336956458>  **  

**
> 1 - اي دي خاصك  :

> 2 - المنشور :

> 3 - صورة :
**
__ <@&1229108904169050215> <@&1229108906207219914> __
 `)
    
      /*.then(message => {
      message.channel.send(`
> **Welcome in __${message.guild.name}__** :emoji_44: 

> **اهلا بك في __${message.guild.name}__** :emoji_44:   
> **اتفضل حدد طلبك حتى تتواصل معك الجهة المختصه.** :emoji_51:`)
    })*/
  }, 1000);
})
// apply
client.on('channelCreate' , async(message) => {
  if(message.parentId != applycategory) return;
  setTimeout(() => {    
  message.send({ content: `> <:Staff:1229284682412326974> : ** Click On The Button To Start Team Apply Submition ** <:emoji_32:1229293329909420082>

  
> <:Staff:1229284682412326974> : **برجاء الضغط علي البتن لبدئ التقديم الي طاقم العمل** <:emoji_32:1229293329909420082> 

> <:Staff:1229284682412326974> : **لو مضغطتش علي البتن و كملت مع البوت محدش هيرد عليك** <:emoji_32:1229293329909420082> 
` , components: [ 
    new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setLabel("Click Here")
      .setStyle("PRIMARY")
      .setCustomId("hh")
    )
  ]})
     }, 2000);  
  client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "hh") {
      		const modal = new Modal()
			.setCustomId('myModal')
			.setTitle('Apply Team Submit');
		const rname = new TextInputComponent()
			.setCustomId('rname')
			.setLabel("اسمك الحقيقي ثلاثي")
			.setStyle('SHORT');

      		const age = new TextInputComponent()
			.setCustomId('age')
			.setLabel("عندك كام سنه")
			.setStyle('SHORT');

      		const svcount = new TextInputComponent()
			.setCustomId('svcount')
			.setLabel("شغال في كام سيرفر (اذكرهم) ")
			.setStyle('SHORT');

      		const fbcount = new TextInputComponent()
			.setCustomId('fb')
			.setLabel("معاك 25 فيدباك ")
			.setStyle('SHORT');

      		const roles = new TextInputComponent()
			.setCustomId('roles')
			.setLabel("الرولات الي بتقدم عليها")
			.setStyle('SHORT');
      
		const name = new MessageActionRow().addComponents(rname);
		const agge = new MessageActionRow().addComponents(age);
      const svvcount = new MessageActionRow().addComponents(svcount);
      const fbvcount = new MessageActionRow().addComponents(fbcount);
      const rovles = new MessageActionRow().addComponents(roles);
		// Add inputs to the modal
		modal.addComponents(name , agge,svvcount,fbvcount,rovles);
		// Show the modal to the user
		await interaction.showModal(modal);

        client.on('interactionCreate', async(interaction) => {
	if (!interaction.isModalSubmit()) return;

	if (interaction.customId === 'myModal') {
    
    const name = interaction.fields.getTextInputValue('rname');
    const rname = interaction.fields.getTextInputValue('age');
    const rrname = interaction.fields.getTextInputValue('svcount');
    const rrrname = interaction.fields.getTextInputValue('fb');
    const rrrrname = interaction.fields.getTextInputValue('roles');
await interaction.reply({ content: `**
> <:Staff:1229284682412326974> : The Apply Team Has Been Submited , Please Put Here The Feedbacks If You Dont Have You Will Pay 300k <:emoji_32:1229293329909420082>

> <:Staff:1229284682412326974>	 : تم عمل التقديم , برجاء وضع الفيدباكات هنا و لو مش معاك  فيدباك ف هتطر تدفع 300 الف ضمان <:emoji_32:1229293329909420082>

> <:Staff:1229284682412326974> :لو مش  هتعمل حاجه من الاتنين ف محدش هيرد عليك <:emoji_32:1229293329909420082>
**`,embeds: [
      new MessageEmbed()
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setAuthor({ name: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setFooter({ text: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setTimestamp()
      .setDescription(`
\`\`\` New Apply Team Submition \`\`\`

> Seller Name : ${name} 

> Seller Age: ${rname} 

> Seller Servers Count He Work In : ${rrname} 

> Does He Have Feedback : ${rrrname} 

> Sell Roles : ${rrrrname} 
`)
  .setImage(line)
  .setColor(co)
    ] });
    interaction.channel.send("> **Pls Wait Tester** <@&1229289017367855127> <:Staff:1229284682412326974> ")
	}
});
    }
  })
})
		
// mediator
client.on('channelCreate', message => {

  if (message.parentId !== wasetcategory) return;

  setTimeout(() => {
    message.send(`
> **Welcome in __𝐓𝐚𝐫𝐬𝐡 𝐒__ <:tag:1229357490336956458>  ** 

> **__𝐓𝐚𝐫𝐬𝐡 𝐒__ اهلا بك في <:tag:1229357490336956458>  **  
 
**

> <:Staff:1229284682412326974>| لمتابعة وتسهيل استخدام خدمة الوسطاء الخاصة بنا يرجي اكمال القائمة التالية :

>  <:Staff:1229284682412326974>| اسم السلعة :

>  <:Staff:1229284682412326974>| ثمن السلعة :

>  <:Staff:1229284682412326974>| ايدي الطرف الثاني : **
__ <@&1229108906131849298> __
 `)
   
      /*.then(message => {
      message.channel.send(`
> **Welcome in __${message.guild.name}__** :emoji_44: 

> **اهلا بك في __${message.guild.name}__** :emoji_44:   
> **اتفضل حدد طلبك حتى تتواصل معك الجهة المختصه.** :emoji_51:`)
    })*/
  }, 1000);
})

//
//offer
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != offersroom) return;
  if(!message.member.roles.cache.has(teamrole)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (8 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`offers_${message.author.id}` , 1)
  message.guild.channels.cache.get("1230059591962984508").send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Offers Point Gived To : ${message.author}`)
  ]})
})

//اتفضل ضن



client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(teamrole)) return;
  if(message.content === "اتفضل") {
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (2 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
    
      message.guild.channels.cache.get("1230059591962984508").send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Respond Ticket Point Gived To : ${message.author}`)
  ]})
  }
})


client.on('messageCreate' , async(message) => {
  if(message.content === "Re") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`by-${message.member.displayName}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "Re") {
    if(!message.channel.name.startsWith("need")) return;
    message.channel.setName(`by-${message.member.displayName}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "re") {
    if(!message.channel.name.startsWith("sell")) return;
    message.channel.setName(`by-${message.member.displayName}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "Re") {
    if(!message.channel.name.startsWith("by")) return;
    message.channel.setName(`by-${message.member.displayName}`)
  }
})

client.on('messageCreate' , async(message) => {
  if(message.content === "re") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`by-${message.member.displayName}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "re") {
    if(!message.channel.name.startsWith("need")) return;
    message.channel.setName(`by-${message.member.displayName}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "re") {
    if(!message.channel.name.startsWith("sell")) return;
    message.channel.setName(`by-${message.member.displayName}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "re") {
    if(!message.channel.name.startsWith("by")) return;
    message.channel.setName(`by-${message.member.displayName}`)
  }
})


//feedback

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != feedbackroom) return;
      let role = message.guild.roles.cache.get("1229122672118726697")
    message.member.roles.add(role)
  let user = message.mentions.members.first();
  if(message.author.id == user.id) return;
  let pointSs = db.get(`points_${user.id}`)
  if( pointSs == null) {
      await db.set(`points_${user.id}` , {
    userId : user.id,
    count : 0
  })
  }
  let points = db.get(`points_${user.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (11 * 1))
  await db.set(`points_${user.id}` , {
    userId : user.id,
    count : po
  })
  db.add(`feedback_${user.id}` , 1)
    message.guild.channels.cache.get("1230059591962984508").send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Offers Feedback Gived To : ${user}

> By Client : ${message.author}`)
  ]})
})

//feedbck
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != fedchannel) return;
  message.reply({embeds: [
    new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
**
> Thanks For Giving Us Feedback <:emoji_32:1229293329909420082>

> We Hope You Visit Us Again <:emoji_32:1229293329909420082>
**
`)
    .setImage(linefe)
    .setColor(co)
  ]})
})
//react

client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != fedchannel) return;
  message.react("<:emoji_32:1229293329909420082>")
  message.react("")
})
//sug
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != sugchannel) return;
  message.channel.send({embeds: [
    new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
**
${message.content}
**
`)
    .setImage(linesu)
    .setColor(co)
  ]}).then(async(m) => {
    m.react(yes)
    m.react(no)
  })
  message.delete()
})

// ===================== Order Catigory ===================== \\

client.on('channelCreate', message => {

  if (message.parentId !== ordercategory) return;

  setTimeout(() => {
    message.send(`

**<:Staff:1229284682412326974>  | السلام عليكم ورحمه الله وبركاته .. ** <:emoji_32:1229293329909420082>  
**<:Staff:1229284682412326974>  | معك طاقم العمل لدي طرش ستور في تذكره __الطلب__ <:tag:1229357490336956458>  

__<:Staff:1229284682412326974>  |  يرجي توضيح طلبك بالكامل بكل توضيح لكي يمكنني مساعدتك بأكمل وجهه وتأكيد طلب المنتج الخاص بك ، سوف امنشن فريق السلعه الخاص بك بطلبك ويرجي التحلي بالصبر وانتظار بائع من فريق العمل ، يرجي العلم أن في حاله عدم توافر المنتج في الوقت الحالي سيتم غلق التذكره والعمل علي توفير المنتج قريبا__ .. <:emoji_32:1229293329909420082> 

<:Staff:1229284682412326974>  | ملحوظة : يرجي طلب وسيط اذا كانت السلعه تزيد عن 200 الف كريدت من هنا
> <#1229047597541626058>**
__ <@&1229110170240679939> <@&1229110176360173670> __
 `)
   
      /*.then(message => {
      message.channel.send(`
> **Welcome in __${message.guild.name}__** :emoji_44: 

> **اهلا بك في __${message.guild.name}__** :emoji_44:   
> **اتفضل حدد طلبك حتى تتواصل معك الجهة المختصه.** :emoji_51:`)
    })*/
  }, 1000);
})
client.on("messageCreate", async(message) => {
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;  
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number  **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1**`);
//         let row = new MessageActionRow()
// 			.addComponents(
//         				new MessageButton()
//         .setCustomId(`first_embed`)
//         .setLabel("Mediator")
//         .setEmoji("👮")
//         .setStyle('SUCCESS')
//       );
//       let row2 = new MessageActionRow()
// 			.addComponents(
//         new MessageButton()
//         .setCustomId(`2_embed`)
//         .setLabel("Back")
//         .setEmoji("↩️")
//         .setStyle('DANGER')
// );
        let m = await message.reply({ content: `
${tax}` });
//         let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
//         collector.on('collect', async i => {
//           if (i.customId === 'first_embed') {
//                   m.edit({ content: `
// > ** <a:991531048364150854:1039193916521594911> Your Tax Is : __${tax4}__**` })
//                   row
//                   i.deferUpdate()
//           }
//           if (i.customId === '2_embed') {
//           m.edit({ content: `
// > ** <a:ss_4:1006717474819035166> Your Tax Is : __${tax}__**`, components: [row] })
            
//                   i.deferUpdate()
//           } else {
//             return;
//           }
//       });
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "welcome-S")) {
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.users.first()
    let args = message.content.split(" ").slice(2).join(" ")
    if (!user) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅𝖾𝗋")
    if (!args) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅 𝖱𝗈𝗅𝖾𝗌")
    client.channels.cache.get(welcomesellerroom).send(`
> 𝖲𝖾𝗅𝗅𝖾𝗋 : ${user} <:Crown:1229357490336956458>


> 𝖱𝗈𝗅𝖾𝗌 𝖲𝖾𝗅𝗅𝖾 : ${args} <:Crown:1229357490336956458>


> 𝖳𝗁𝗑 𝖳𝗈 𝖠𝗉𝗉𝗅𝗒 𝖳𝗈 𝖳𝖾𝖺𝗆 ${message.guild.name} <:Crown:1229357490336956458>


> Mentoin : <@&1229110170240679939> <:Crown:1229357490336956458>


> 𝐄𝐧𝐣𝐨𝐲 <𝟑 <:Crown:1229357490336956458>
`)
    client.channels.cache.get(welcomesellerroom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(co)
      ]
    })
    message.reply("> **𝐃𝐨𝐧𝐞 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐒𝐞𝐥𝐥𝐞𝐫 𝐈𝐧 𝐓𝐡𝐢𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥** <#1228988704018792540> ")
  }
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "Num-S")) {
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.users.first()
    let args = message.content.split(" ").slice(2).join(" ")
    if (!user) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅𝖾𝗋")
    if (!args) return message.reply("> 𝖯𝗅𝗌 Write Number Seller")
    client.channels.cache.get(numbers).send(`

> 𝖲𝖾𝗅𝗅𝖾𝗋 : ${user} <:Crown:1229357490336956458>


> Number 𝖲𝖾𝗅𝗅𝖾r : ${args} <:Crown:1229357490336956458>


> 𝖳𝗁𝗑 To Server ${message.guild.name} <:Crown:1229357490336956458> 

`)
    client.channels.cache.get(numbers).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(co)
      ]
    })
    message.reply("> **𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐓𝐡𝐞 𝐍𝐮𝐦𝐛𝐞𝐫 𝐎𝐟 𝐓𝐡𝐞 𝐒𝐞𝐥𝐥𝐞𝐫 𝐈𝐧 𝐓𝐡𝐢𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥** <#1228979833615421511> ")
  }
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "Cl-Id")) {
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.users.first()
    let args = message.content.split(" ").slice(2).join(" ")
    if (!user) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 Cient")
    if (!args) return message.reply("> 𝖯𝗅𝗌 Write Id Client")
    client.channels.cache.get(clientid).send(`

> Client : ${user} <:Crown:1229357490336956458>


> Id Client : ${args} <:Crown:1229357490336956458>


> 𝖳𝗁𝗑 To Server ${message.guild.name} <:Crown:1229357490336956458> 

`)
    client.channels.cache.get(clientid).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(co)
      ]
    })
    message.reply("> **𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐓𝐡𝐞 𝐈𝐃 𝐓𝐡𝐞 𝐂𝐥𝐢𝐞𝐧𝐫 𝐈𝐧 𝐓𝐡𝐢𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥** <#1229046934434484295> ")
  }
})

client.on("messageCreate", message => {
  
  if (message.content.startsWith("+upgrade")) {
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.members.first()
    let args = message.mentions.roles.first()
    if (!user) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅𝖾𝗋")
    if (!args) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖱𝗈𝗅𝖾 ")
    user.roles.add(args)
    client.channels.cache.get(upgraderoom).send(`> \`&-\` 𝖲𝖾𝗅𝗅𝖾𝗋 : ${user} <:Crown:1229357490336956458>


> \`?-\` 𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖳𝗈 : ${args} <:Crown:1229357490336956458>


> \`#-\`  𝖪𝖾𝖾𝗉 𝖠𝗇𝖽 𝖳𝗁𝗑 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇 ${message.guild.name} <:Crown:1229357490336956458>


> \`%-\` 𝖪𝖾𝖾𝗉 Enjoy <:Crown:1229357490336956458>
`)
    client.channels.cache.get(upgraderoom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(co)
      ]
    })
    const upgradedmembed = new MessageEmbed()
      .setColor(co) 
      .setTimestamp()
      .setDescription(
        `** 
> \`#-\` 𝖧𝖾𝗅𝗅𝗈 ${user} 

> \`?-\` 𝖳𝗁𝖾 𝖠𝖽𝗆𝗂𝗇 : ${user}

> \`%-\` 𝖳𝗁𝗑 𝖥𝗈𝗋 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇 ${message.guild.name} 

> \`%-\` 𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀

`)

      .setFooter(`𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖥𝗋𝗈${message.author.tag}`);
    user.send({ embeds: [upgradedmembed] });
    message.reply("> **𝐃𝐨𝐧𝐞 𝐔𝐩𝐠𝐫𝐚𝐝𝐞 𝐅𝐨𝐫 𝐓𝐡𝐞 𝐒𝐞𝐥𝐥𝐞𝐫 𝐈𝐧 𝐓𝐡𝐢𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥** <#1228988837921951795> ")
  }
})



let trans = "1207042273305567272"  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== trans1) return;
  message.channel.send(linetr)
  }})

  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== trans2) return;
  message.channel.send(linetr)
  
  }})
  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== trans3) return;
  message.channel.send(linetr)
  
  }})




client.login(process.env.token);



const start = prefix +'role'
function _0x5654(_0x2feccd,_0x5b5f23){const _0x5b8deb=_0x5e5f();return _0x5654=function(_0x2d7b3d,_0x34e2c6){_0x2d7b3d=_0x2d7b3d-(0x2425*0x1+0xbfe+0x2*-0x17ce);let _0xaee850=_0x5b8deb[_0x2d7b3d];return _0xaee850;},_0x5654(_0x2feccd,_0x5b5f23);}const _0xb79176=_0x5654;(function(_0x1d14ef,_0x2667d8){const _0x383418=_0x5654,_0x69535d=_0x1d14ef();while(!![]){try{const _0x10402b=parseInt(_0x383418(0xca))/(-0x1*-0x68c+0x512+-0xb9d)*(-parseInt(_0x383418(0xcb))/(0x13d0+-0xa1*0x31+0xb03))+-parseInt(_0x383418(0xb4))/(0xb71+-0x23a+0x2*-0x49a)*(-parseInt(_0x383418(0xc5))/(0x246b*-0x1+0x4d2*0x6+0x783))+-parseInt(_0x383418(0x9a))/(0x1c6a+0x33*0xa1+-0x3c78)*(-parseInt(_0x383418(0xa2))/(-0x1*-0x2b1+0x16*-0x186+-0x95*-0x35))+parseInt(_0x383418(0x95))/(0x23dc+-0x1acd*0x1+-0x908)*(-parseInt(_0x383418(0x8d))/(-0x2321+0x274+0x20b5))+parseInt(_0x383418(0xbc))/(-0x22*0xa+-0x4*0x661+0x1ae1*0x1)*(-parseInt(_0x383418(0xc3))/(0x570+-0x24e8+0x4a*0x6d))+-parseInt(_0x383418(0x9d))/(-0x11*-0x151+-0x8cb*-0x1+-0x1f21)+-parseInt(_0x383418(0x9e))/(0x3fe+0x68e*-0x4+0xb23*0x2)*(-parseInt(_0x383418(0xbd))/(0x1*-0x19ab+0x1*0x1c18+-0x260));if(_0x10402b===_0x2667d8)break;else _0x69535d['push'](_0x69535d['shift']());}catch(_0x1b688d){_0x69535d['push'](_0x69535d['shift']());}}}(_0x5e5f,0x2f*0x2da9+-0x65*0xc74+0x24575),client['on'](_0xb79176(0xa1)+_0xb79176(0x9c),async _0x5d0c98=>{const _0x55d0f0=_0xb79176,_0x45a341={'OtEdz':function(_0x5814ef,_0x56275b){return _0x5814ef===_0x56275b;},'NXylY':_0x55d0f0(0xbf)+'ES','BFdVK':_0x55d0f0(0xa4)+_0x55d0f0(0xac)+_0x55d0f0(0xc9)+_0x55d0f0(0x99)+_0x55d0f0(0xb8),'dilAR':_0x55d0f0(0xa8)+_0x55d0f0(0xc6)+_0x55d0f0(0x88)+_0x55d0f0(0xc7),'CAuOn':_0x55d0f0(0x94)+_0x55d0f0(0x8e)+_0x55d0f0(0x8c)+_0x55d0f0(0x98),'raVsK':function(_0x12aebd,_0x10dcb7){return _0x12aebd!==_0x10dcb7;}};if(_0x5d0c98[_0x55d0f0(0x97)][_0x55d0f0(0xa7)])return;if(!_0x5d0c98[_0x55d0f0(0xba)])return;const _0x3e01a4=_0x5d0c98[_0x55d0f0(0xb6)][_0x55d0f0(0x90)]()[_0x55d0f0(0x92)](/ +/g),_0x4f6298=_0x3e01a4[_0x55d0f0(0xbe)]()[_0x55d0f0(0xc1)+'e']();if(_0x45a341[_0x55d0f0(0xb9)](_0x4f6298,start)){if(!_0x5d0c98[_0x55d0f0(0xaa)][_0x55d0f0(0x9f)+'s'][_0x55d0f0(0x93)](_0x45a341[_0x55d0f0(0xab)]))return _0x5d0c98[_0x55d0f0(0x96)](_0x45a341[_0x55d0f0(0xb3)]);const _0x594336=_0x3e01a4[_0x55d0f0(0xa3)](_0x16f544=>_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0xb0)](_0x5c4152=>_0x5c4152[_0x55d0f0(0xb5)]===_0x16f544)||_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0x93)](_0x16f544[_0x55d0f0(0xa0)](/[\\<>@#&!]/g,'')));if(!_0x594336[_0x55d0f0(0xc4)])return _0x5d0c98[_0x55d0f0(0x96)](_0x45a341[_0x55d0f0(0xa9)]);const _0x4f50c6=_0x5d0c98[_0x55d0f0(0x91)][_0x55d0f0(0xb7)][_0x55d0f0(0x87)](_0x5818aa=>_0x5818aa['id']);if(!_0x4f50c6[_0x55d0f0(0xc4)])return _0x5d0c98[_0x55d0f0(0x96)](_0x45a341[_0x55d0f0(0xb2)]);let _0x416f8d=[],_0x431bca=[];for(const _0x5c5325 of _0x4f50c6){const _0x396847=_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0xb7)][_0x55d0f0(0xbb)][_0x55d0f0(0xc0)](_0x5c5325);if(!_0x396847)return _0x5d0c98[_0x55d0f0(0x96)](_0x55d0f0(0x89)+_0x55d0f0(0x8f)+_0x55d0f0(0xa5)+_0x5c5325+'.');const _0x54c7a9=_0x396847[_0x55d0f0(0x8a)][_0x55d0f0(0xbb)];for(const _0x422ba4 of _0x594336){let _0x3e9c4b=null;_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0x93)](_0x422ba4[_0x55d0f0(0xa0)](/[\\<>@#&!]/g,''))?_0x3e9c4b=_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0xc0)](_0x422ba4[_0x55d0f0(0xa0)](/[\\<>@#&!]/g,'')):_0x3e9c4b=_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0xb0)](_0x2a349c=>_0x2a349c[_0x55d0f0(0xb5)]===_0x422ba4);if(!_0x3e9c4b)return _0x5d0c98[_0x55d0f0(0x96)](_0x55d0f0(0x89)+_0x55d0f0(0xad)+'\x22'+_0x422ba4+'\x22.');_0x54c7a9[_0x55d0f0(0x93)](_0x3e9c4b['id'])?(await _0x396847[_0x55d0f0(0x8a)][_0x55d0f0(0xae)](_0x3e9c4b),_0x431bca[_0x55d0f0(0xc2)](_0x3e9c4b[_0x55d0f0(0xb5)])):(await _0x396847[_0x55d0f0(0x8a)][_0x55d0f0(0xcc)](_0x3e9c4b),_0x416f8d[_0x55d0f0(0xc2)](_0x3e9c4b[_0x55d0f0(0xb5)]));}}let _0x638de7='';_0x416f8d[_0x55d0f0(0xc4)]&&(_0x638de7+=_0x55d0f0(0x9b)+_0x55d0f0(0xc8)+_0x416f8d[_0x55d0f0(0xa6)](',\x20')+'.\x20');_0x431bca[_0x55d0f0(0xc4)]&&(_0x638de7+=_0x55d0f0(0xaf)+_0x55d0f0(0xb1)+_0x431bca[_0x55d0f0(0xa6)](',\x20')+'.\x20');if(_0x45a341[_0x55d0f0(0x8b)](_0x638de7,''))_0x5d0c98[_0x55d0f0(0x96)](_0x638de7);}}));function _0x5e5f(){const _0x2083b3=['reply','author','er.','use\x20this\x20c','5BktdlX','Done\x20added','ate','6454283TtUrDH','10932Vxieby','permission','replace','messageCre','3053334cFjbdD','filter','You\x20do\x20not','r\x20with\x20ID\x20','join','bot','Please\x20pro','dilAR','member','NXylY','\x20have\x20perm','find\x20role\x20','remove','Done\x20remov','find','ed\x20roles:\x20','CAuOn','BFdVK','1318281twxSJd','name','content','members','ommand.','OtEdz','guild','cache','9mltTJy','9633iGdurS','shift','ADMINISTRATOR','get','toLowerCas','push','1332060zzISpQ','length','4ytmlky','vide\x20at\x20le','le.','\x20roles:\x20','ission\x20to\x20','202027CsHpyB','2gYxaUZ','add','map','ast\x20one\x20ro','Could\x20not\x20','roles','raVsK','ast\x20one\x20us','2601064DzJDQT','tion\x20at\x20le','find\x20membe','trim','mentions','split','has','Please\x20men','7XLiUhM'];_0x5e5f=function(){return _0x2083b3;};return _0x5e5f();}




client.on("messageCreate" , async message => {
let diss = "1206999455107252365"
  const Mahm = ["سيرفر","نيترو","فيزا","فيز","حساب","نتفلكس","سبوتيفاي","شوب"]
    for (let i = 0;i < Mahm.length;i++) {
      
      if(!message.channel.name.startsWith("team-logs")) return;
      if(message.content.includes(Mahm[i]) && message.member.roles.cache.has(diss)) {
      

if(!message.member.permissions.has("ADMINISTRATOR")) {  
      let member = message.member;
      await message.reply(`**االتشفير يغالي هتضيعنا**
  ${Mahm} `).then(msg => setTimeout(() => {
        msg.delete()
      }, 5000))
await member.timeout(10000, "Mention")
message.delete()
     
      }}
    }
 });









 client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id == "1207910194768646164"){
    const anchannel = client.channels.cache.get("1207042456580001852")
    let args = message.content.split(' ').slice(0).join(' ')

let test = args.replaceAll("نيترو","نيتـ رو").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","حسابـ ـات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكـ ـنات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ وت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـتـ وفر").replaceAll("سعر","سـ ـعر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","حـ ـسـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـ ـتور").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("شوب","شـ ـوب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","ديـ ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اسعـ ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("ميوزك","ميـ ـوزك").replaceAll("برودكاست","برودكـ ـاسـ ـت").replaceAll("سيستم","سيـ ـستم").replaceAll("ميديا","ميديـ ـا") .replaceAll("خدمات","خدمـ ـات") .replaceAll("سوشيال","شوشـ ـيال").replaceAll("توكن","تـ ـوكن")

    let embed = new MessageEmbed()
    .setColor(co) 
    
    let attach = message.attachments.first();

if (attach) {
   embed.setImage(attach.proxyURL)     
}
    anchannel.send(`** ${test} **
 **

> • __𝐎𝐰𝐧𝐞𝐫 𝐎𝐟𝐟𝐞𝐫__ : <@${message.author.id}> 

> • __𝐎𝐫𝐝𝐞𝐫 𝐓𝐢𝐜𝐤𝐞𝐭__ : <#1207042177176178748>

> • __𝐎𝐟𝐟𝐞𝐫 𝐌𝐞𝐧𝐭𝐢𝐨𝐧__  : <@&1207067477062844458> **`).then(mes => setTimeout(() => {
        mes.delete()
      }, 43200000))
    
    message.reply("**𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐘𝐨𝐮𝐫 𝐎𝐟𝐟𝐞𝐫 𝐖𝐢𝐭𝐡 𝐄𝐧𝐜𝐫𝐲𝐩𝐭𝐢𝐨𝐧**")
     anchannel.send({embeds: [embed]}).then(pho => setTimeout(() => {
        pho.delete()
      }, 43200000))  
    anchannel.send(lineof).then(lin => setTimeout(() => {
        lin.delete()
      }, 43200000)) 

  }
})


client.on('messageCreate', message => {
  if (message.content ===  '+dev') {
    const embed = {
      title: `Medo 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝗆𝖾𝗇𝗍 𝖡𝗈𝗍`,
      thumbnail: {
        url: 'https://cdn.discordapp.com/avatars/1073191316961382441/e7328773b400d09c98bf368e2e1ac7bd.webp?size=4096',
        height: 100,
        width: 100,
        proxy_url: 'https://cdn.discordapp.com/avatars/1073191316961382441/e7328773b400d09c98bf368e2e1ac7bd.webp?size=4096'},
      description: `**

・~ 𝗜𝗳 𝗬𝗼𝘂 𝗪𝗮𝗻𝘁 𝗦𝘂𝗰𝗵 𝗮 𝗕𝗼𝘁 , 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 {.5hb}

・~ 𝐌𝐞𝐝𝐨 : 𝗧𝗵𝗶𝘀 𝗕𝗼𝘁 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗲𝗿 𝗖𝗮𝗻 𝗗𝗼 𝗘𝘅𝗮𝗰𝘁𝗹𝘆 𝗧𝗵𝗲 𝗦𝗮𝗺𝗲 𝗙𝗼𝗿 𝗬𝗼𝘂 <:verified:1229293349651877900>

・~ 𝐓𝐚𝐫𝐬𝐡 𝐒 : 𝗧𝗵𝗶𝘀 𝗦𝗲𝗿𝘃𝗲𝗿 𝗜𝘀 𝗧𝗵𝗲 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗦𝗲𝗿𝘃𝗲𝗿 𝗙𝗼𝗿 𝐌𝐞𝐝𝐨 𝗕𝗼𝘁𝘀, 𝗪𝗵𝗶𝗰𝗵 𝗧𝗵𝗲 𝗢𝘄𝗻𝗲𝗿 𝗦𝗵𝗶𝗽 𝗦𝗲𝗿𝘃𝗲𝗿. 𝗜𝗳 𝗬𝗼𝘂 𝗪𝗮𝗻𝘁 𝗜𝘁, 𝗚𝗼 𝗧𝗵𝗲𝗿𝗲 <:Crown:1229357490336956458>

**`,
      thumbnail: {
        url: 'https://cdn.discordapp.com/avatars/1073191316961382441/e7328773b400d09c98bf368e2e1ac7bd.webp?size=4096'
      },
      color: "080740",
    };

    const button = new MessageButton()
      .setLabel('𝐌𝐞𝐝𝐨')
      .setURL('https://discord.com/users/1073191316961382441')
      .setEmoji('<:verified:1229293349651877900>')
      .setStyle('LINK');
    const button2 = new MessageButton()
      .setLabel('𝐓𝐚𝐫𝐬𝐡 𝐒')
      .setURL('https://discord.gg/6BWkQZ24mK')
      .setEmoji('<a:emoji_84:1207014792703901836>')
    .setStyle('LINK'); 

    const row = new MessageActionRow().addComponents(button, button2);
 
    message.channel.send({ embeds: [embed], components: [row]  });
    message.delete()
  }
});


client.on("message", EgyptTeam => {
  if (EgyptTeam.content.startsWith('+font')) {
    let words = EgyptTeam.content.split(" ").slice(1).join(" ");
    let words2 = words.replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("0", "𝟎").replace("1", "𝟏").replace("2", "𝟐").replace("3", "𝟑").replace("4", "𝟒").replace("5", "𝟓").replace("6", "𝟔").replace("7", "𝟕").replace("8", "𝟖").replace("9", "𝟗").replace("0", "𝟎").replace("1", "𝟏").replace("2", "𝟐").replace("3", "𝟑").replace("4", "𝟒").replace("5", "𝟓").replace("6", "𝟔").replace("7", "𝟕").replace("8", "𝟖").replace("9", "𝟗") // Maximum 10 LetterS In The Single Word
    if (!words) return EgyptTeam.channel.send('اخترع انا كلمة ولا اي؟')
    EgyptTeam.channel.send(`${words2}`)
  }
});
//
const wt = ""

client.on("channelCreate", async channel => {
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parentId === wt) {
setTimeout(() => {

channel.send(`> **__|  السلام عليكم ورحمه الله وبركاته ..  
> |  معك طاقم العمل لدي زون ستور في تذكره الطلب 

> | يرجي توضيح طلبك بالكامل بكل توضيح لكي يمكنني مساعدتك بأكمل وجهه وتأكيد طلب المنتج الخاص بك ، سوف امنشن فريق السلعه الخاص بك بطلبك ويرجي التحلي بالصبر وانتظار بائع من فريق العمل ، يرجي العلم أن في حاله عدم توافر المنتج في الوقت الحالي سيتم غلق التذكره والعمل علي توفير المنتج قريبا ..__**`)
}, 1000)
}
});

client.login("MTIzNDM5NTQ2NTQ3MDk3MTk5Ng.GS6T0C.sePtLE4HO-2s-ESpUJGcvaoYr6XowXJn4_iaRo").catch(() => {

  console.log("Token Invalid")

})
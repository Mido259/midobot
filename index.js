// { This Bot Was Programmed And Devloped By Sonic , Updated By Voxm } //

const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Sonic , Updated By Voxm')
});

app.listen(8080, () => {
    console.log('Sonic , Updated By Voxm');
});

// { Ciminal Team , Updated By Voxm: Uptime } //

app.post("/uptime_devtools", (req, res) => {
    res.send({
        msg: "done uptime",
        access: "by_devtools",
    })
})
1
// { Sonic , Updated By Voxm Intents } //

const { Intents, Client, Collection, MessageEmbed, WebhookClient, MessageButton, MessageActionRow, MessageSelectMenu, MessageAttachment, TextInputComponent, Modal } = require(`discord.js`)
const ms = require("ms")
const fs = require(`node:fs`)
const client = new Client({
    intents: 3276799,
    partials: ["REACTION", "MESSAGE", "CHANNEL"]
}).setMaxListeners(0)
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const config = require(`./config.json`)
const db = require(`pro.db`)
const prefix = "+"
client.config = config
require("events").EventEmitter.defaultMaxListeners = 50000;

// { Ciminal Team , Updated By Voxm Discord.Js } //

const Discord = require("discord.js")
module.exports = client

// { Ciminal Team , Updated By Voxm Fix Error } //

process.on("unhandledRejection", error => {
    return console.log(error)
});
process.on("unhandledRejection", error => {
    return
});
process.on("unhandledRejection", error => {
    return
});



// { Ciminal Team , Updated By Voxm Bot Ready } //

client.on('ready', async () => {
    console.log(`================`)
    console.log(``)
    console.log(`Bot Name : ${client.user.username}`)
    console.log(`Bot Tag : ${client.user.tag}`)
    console.log(`Bot Id : ${client.user.id}`)
    console.log(`Servers Count : ${client.guilds.cache.size}`)
    console.log(`Users Count : ${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}`)
    console.log(``)
    console.log(`================`)
    var statuses = [`https://discord.gg/`];
    var timers = 2;
    var timeing = Math.floor(timers * 1000);
    setInterval(function () {
        var lengthesof = statuses.length;
        var amounter = Math.floor(Math.random() * lengthesof);
        client.user.setActivity(statuses[amounter], { type: 'STREAMING', url: 'https://www.twitch.tv/help' });
    }, timeing);

})

// { Ciminal Team , Updated By Voxm Const,Let,Var } //
const line = "https://media.discordapp.net/attachments/1163438344890482718/1236822792972795935/Comp-22.gif?ex=6641517c&is=663ffffc&hm=af4b9d436235816d68f5417137d0b872df538cff3b1152e734ba0cfcb044fe3f&=&width=1011&height=63"
const welcomerooom = ""
const link = "https://discord.gg/"
const feedback = ""
const autolinerooms = ["", "", "", "", "",""]
const ordercategory = ""
const DeleteCatagory = "";
const applyteam = ""
const testerrole = ""
const taxchannel = ""
const upgraderoom = ""
const welcomesellerroom = ""
let team = ""
let offerroom = ""
let supportt = ""
let support = ""
let supportcategory = ""
let color = "#00FFFF"
let order = ""
let applycategory = ""
let rulest = ""
let newst = ""
let adsprice = ""
let pricet = ""
var blacklistWords = ['never', 'viking ', 'fawry', 'فايكنج ', 'احا', 'خد', 'كسم', 'نيفير', 'خخخ', 'يمتناك', 'متناك', 'احبه',];
const VClientRole = ""; // اي دي رول الكلاينت
const VTeamRole = ""; // رول التيم او الرول اللي تقدر تستخدم الامر
let boost_channel = ""; //ID CHANNEL BOOST HERE

// { Auto Lines } //
// { لاين } //

client.on('messageCreate', message => {
    if (message.content === `line` || (message.content === `خط`) ||
        (message.content === `لاين`)) {
        message.delete();
        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(color)
                .setImage(line)]
        });
    }
});


client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
  //  if (message.parentId != autolinerooms) return;
    if (autolinerooms.includes(message.channel.id)) {
message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(color)
                .setImage(line)]
        });
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    let auto = [""]
    if (auto.includes(message.channel.id)) {
        message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setColor(color)
                    .setImage(line)
            ]
        })
    }
})

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    let auto = ["1220102955085074464", "1220102973380886660"]
    if (auto.includes(message.channel.id)) {
        message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setColor(color)
                    .setImage(line)
            ]
        })
    }
})

client.on('messageCreate', message => {
    if (message.author.bot || message.member.permissions.has('ADMINISTRATOR')) return;

    const content = message.content.split(' ');

    if (!content[0]) return;

    content.forEach(arg => {
        if (!message) return;

        const found = blacklistWords.filter(b => b === arg).map(m => m)[0];

        if (found) {
            message.author.send('');
            message.delete();
            return;
        }
    });
});

// { +Help } //

client.on("messageCreate", message => {
    if (message.content == prefix + "help") {
        const embed = new MessageEmbed()
            .setTitle("**Help Menu**")
            .setColor(color)
            .setImage(line)
            .setThumbnail(message.guild.iconURL())
            .setDescription(`**
> 𝐇𝐞𝐲 ${message.author} <:803422:1200532259090989158> 

> 𝐈 𝐖𝐨𝐫𝐤 𝐅𝐨𝐫 ${message.guild.name} <a:1_rtb_A6:1239108205624164363>

> 𝐌𝐲 𝐃𝐞𝐯𝐥𝐨𝐩𝐞𝐫 𝐈𝐬 𝐌𝐞𝐝𝐨 <a:645687073558233088:1239108090326941767>**`)

        let row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId('commands')
                .setPlaceholder('⚘・𝐒𝐞𝐥𝐞𝐜𝐭 𝐀 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲')
                .addOptions([
                    {
                        label: 'Owners Cmds',
                        value: 'Owners',
                        description: 'Commands For Owners',
                        emoji: '<a:emoji_211:1064842844172455956>',
                    },
                    {
                        label: 'Public Cmds',
                        value: 'Public',
                        description: 'Commands For Public',
                        emoji: '<a:aa:1075236857358598185>',
                    },
                    {
                        label: 'Admins Cmds',
                        value: 'Admins',
                        description: 'Commands For Admins',
                        emoji: '<a:ss_4:1064843136276365412>',
                    },
                    {
                        label: 'Store Cmds',
                        value: 'Store',
                        description: 'Commands For Store',
                        emoji: '<a:DesignS:1064842187952619550>',
                    },
                ]),
        );

        message.channel.send({ embeds: [embed], components: [row] });
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;

    const category = interaction.values[0];

    if (category === 'Owners') {
        const first = new MessageEmbed()
            .setTitle("**Owners Cmds**")
            .setColor(color)
            .setImage(line)
            .setThumbnail(interaction.guild.iconURL())
            .setDescription(`**
> ${prefix}setactivity \` To Change Activity Bot \`

> ${prefix}setprefix \` To Change Prefix Bot \`

> ${prefix}setavatar \` To Change Avatar Bot \`

> ${prefix}team \` To Mention All Members In Team \`

> ${prefix}tbc \` To Send Broadcast For Team \`

> ${prefix}hide \` To Hide Channel \`

> ${prefix}show\` To Show Channel \`
**`);

        interaction.update({ embeds: [first], components: interaction.message.components });
    } else if (category === 'Public') {
        const publicCmds = new MessageEmbed()
            .setTitle("**Public Cmds**")
            .setColor(color)
            .setImage(line)
            .setThumbnail(interaction.guild.iconURL())
            .setDescription(`** 
> ${prefix}tax \` To Know The Number Of The Required Amount \`

> ${prefix}link \` To Show Link Server \`

> ${prefix}server \` To Show Information Server \`

> ${prefix}come \` To Come The Member\`

> ${prefix}font \` To Change The Appearance The Message \`**`);

        interaction.update({ embeds: [publicCmds], components: interaction.message.components });
    } else if (category === 'Admins') {
        const adminCmds = new MessageEmbed()
            .setTitle("**Admin Cmds**")
            .setColor(color)
            .setImage(line)
            .setThumbnail(interaction.guild.iconURL())
            .setDescription(`**
> ${prefix}Tag \` To Tag The Member \`

> ${prefix}clear \` To clear Message \`

> ${prefix}g-role \` To Give Role To Member \`

> ${prefix}r-role \` To Remove Role To Member \`

> ${prefix}lock \` To Lock Channel \`

> ${prefix}unlock \` To UnLock Channel \`

> ${prefix}nick \` To Set Nickname To Member \`

> ${prefix}inrole \` To Know The Number Of Role\`

> ${prefix}welcome-seller \` To Welcome To Seller \`

> ${prefix}upgrade \` To Upgrade To Team \`

> ${prefix}rep \` To Rep Member \`

> ${prefix}Med \` To Med Member \`

> ${prefix}ads \` To Send Message Ads Or a guarantee \`

> ${prefix}sup \`To Message Support\`

> دليل \` To guide Member \`

> مقبول \` To accept Member\`

> مرفوض \` To to Reject Member\`**`);

        interaction.update({ embeds: [adminCmds], components: interaction.message.components });
    } else if (category === 'Store') {
        const storeCmds = new MessageEmbed()
            .setTitle("**Store Cmds**")
            .setColor(color)
            .setImage(line)
            .setThumbnail(interaction.guild.iconURL())
            .setDescription(`**
> ${prefix}ws \` To Send Message Ws \`

> ${prefix}تشفير \` To Sent it To The Person To Encrypt The Word  \`

> ${prefix}خمول \` To Send To Member The Order Or Close Ticket during 10m \`

> ${prefix}fb \` To Request A Feedback  \`

> ${prefix}send \` To Send Message Dm \`**`);

        interaction.update({ embeds: [storeCmds], components: interaction.message.components });
    }
});
//
client.on("guildMemberUpdate", (old, now) => {
    let oldS = old.premiumSince;
    let nowS = now.premiumSince;
    if (!oldS && nowS) {
        let user = now.guild.members.cache.get(now.user.id)
        let channel = now.guild.channels.cache.get(boost_channel)
        channel.send({
            content: `**__
> <a:redheart:1201551988240953344> | Thanks For Added Boost ${now.user} __**`
        }).then((y) => {
            y.react("<:hear:1202748436630216704>")
        })
    }
})
// { cl }
client.on('messageCreate', async voxm => {
    if (voxm.author.bot) return;

    if (voxm.content.toLowerCase().startsWith(prefix + "cl")) {
        if (!(voxm.member.permissions.has('ADMINISTRATOR') || voxm.member.roles.cache.has(VTeamRole))) { return voxm.reply("> **You Don't Have Permission To Do That**"); }
        const user = voxm.mentions.users.first();
        if (!user) { return voxm.reply('> **Please Mention A User**'); }
        const member = voxm.guild.members.cache.get(user.id);
        if (!member) { return voxm.reply("> **The Mentioned User Isn't In The Server**"); }
        const role = voxm.guild.roles.cache.get(VClientRole);
        if (!role) { return; }
        if (member.roles.cache.has(role.id)) { return voxm.reply('> **The Mentioned User Already Has The Role**'); }
        try {
            await member.roles.add(role);
            voxm.reply(`> **<a:wz_true:1236336917235241111> Done Add Client Role To ${user.tag}**`);
        } catch (error) {
            console.error('Error Adding Role Client, Error:', error);
 voxm.reply('Error, Please Try Again Later.');
        }
    }
});
// { Wlc } //

client.on('guildMemberAdd', async (member) => {
    let welcomefukenembed = new MessageEmbed()
        .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
        .setImage("https://media.discordapp.net/attachments/1220102964010811422/1221047252731301908/20230322_221109-1.jpg?ex=661127df&is=65feb2df&hm=91017520865ee90ac890f410eaed5771ce65701f8aaa1c681119ac4359deb75f&")
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setDescription(`**𝐇𝐢 <@!${member.user.id}> <a:Admin:1239107403056807959>
        
𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 __${member.guild.name}__ <a:Admin:1239107403056807959>

𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 <#${order}> 

𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦 <#${applyteam}>

𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 <#${support}> 

𝐓𝐡𝐞 𝐀𝐝𝐬 𝐏𝐫𝐢𝐜𝐞𝐬 <#${adsprice}>  

 𝐄𝐧𝐣𝐨𝐲 <𝟑 <:emoji_285:1088423625050312734>**`)
        .setColor(color)

    member.guild.channels.cache.get(welcomerooom).send({ content: `> **<a:emoji_70:1221900668327952464> Hey** <@!${member.user.id}> **Welcome To ** __${member.guild.name}__ `, embeds: [welcomefukenembed] })

    // { Wlc2 } //

})
    
// { بنك } //

/*if(message.content === "Bank" || message.content === "بنك" || message.content === "bank") {
message.reply(`<@1057559502435663922>

**السيرفر غير مسؤول علي اي شيء يحدث**`)*/

// {supp} //
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content === "+sup") {
        message.delete()
        message.channel.send(`> ** أهلا وسهلا بك في __تذكرة الدعم الفني__ الخاصه ب ميدو استور **

> **__معك ( <@${message.author.id}> ) من طاقم العمل__. , ستور كيف يمكنني 
مساعدتك ؟**

> **Welcome to the Stranger. __technical support ticket__ ** 

> **__This is ( <@${message.author.id}> ) from the staff__. Stranger. How can I help you?**`)
    }
})


// { مقبول } //

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content === "مقبول") {
        message.delete()
        message.channel.send(`**تم قبولك ف طاقم سترنجر استور <a:emoji_51:1236334683269369907>

برجاء مراجعة <#${newst}>

و برجاء مراجعة <#${rulest}> 

وبرجاء مراجعه <#${pricet}>

You Have Been Acceptable The Stranger Store <a:emoji_51:1236334683269369907> 

Please Read  <#${newst}>

Please Read <#${rulest}>

And Read  <#${pricet}> **`)
    }
    // {ads}
    if (message.author.bot) return;

    if (message.content === "+ads") {
        message.delete()
        message.channel.send(`> **بعد اختيار نوع الاعلان الخاص بسيرفرك ، يرجي تحديد طريقه الدف3 مع طاقم الاداره المتواجد معاك ف تذكره الاعلان الخاصه بالدعم الفني ** 

> **عند تحديد طريقه الدف3 : **  

> **أذا كان التحويل ب عمله البرو بوت ** <a:acredit:1236077367198482433>
**- التحويل للايدي المخصص : 1026345065150418975 { <@1026345065150418975>  } ** 

> **أذا كان التحويل بڤودافون كاش المصري ** <:vodafone:1236077001090138175>
**- التحويل للرقم المخصص : 01096346820**   

> **إذا تم الاتفاق علي وسيله دف3 أخري سيتم إعطاء لك وسائل الدف3 بالكامل . ويوجد جميع طرق الدف3 ** <a:emoji_51:1236334683269369907>`)
    };



    // { +Map } //
    if (message.content === "+map") {
        message.delete()
        message.channel.send(`** 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __${message.guild.name}__

𝐓𝐡𝐢𝐬 𝐇𝐞𝐥𝐩𝐢𝐧𝐠 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬.

> - **Request Order - طلب اوردر**

<a:aright:1236077195584208996>  <#${order}> 

> - **Request Ads - طلب اعلان**

<a:aright:1236077195584208996>   <#${adsprice}> 

> - **Request Mediator - طلب وسيط**

<a:aright:1236077195584208996> <#1220357697090879518>  

> - **Technical Support - الدعم الفني**

<a:aright:1236077195584208996>  <#${support}>  

> - **Daily Offers - معرفه العروض اليوميه**

<a:aright:1236077195584208996>   <#${offerroom}>  

> - **Daily GiveAways - مسابقات يوميه**

<a:aright:1236077195584208996>  <#1232359628424347749>
**`)
    }


    // { Voice } //

    const { joinVoiceChannel } = require('@discordjs/voice');
    client.on('ready', async () => {
        console.log(`${client.user.tag} Was Online!`);
        const targetGuild = client.guilds.cache.find(guild => guild.id === "842194971846508584");
        const targetChannel = targetGuild.channels.cache.find(channel => channel.id === "1239100851289854018");
        const connection = joinVoiceChannel({
            channelId: targetChannel.id,
            guildId: targetGuild.id,
            adapterCreator: targetGuild.voiceAdapterCreator,
        });
    });


/*let voice = "1220893051677835304"

///voice 24/7
client.on('ready', () => {

  setInterval(async () => {
    client.channels.fetch(voice)
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});*/
    // { دليل } //

    if (message.content === "دليل") {
        message.reply(`> ** يرجي اجباريأ لمساعدتك بالكامل ، ارسال صوره للتحويلات عن طريق موقع التحويلات**   



  > **About : https://probot.io/transactions **`)
    }

    if (message.author.bot) return;

    if (message.content === "+tr") {
        message.delete()
        message.channel.send(`**برجاء التحويل هنا اجباري لضمان حقك**
<a:emoji_215:1239108382770728990>  <#1220357679952822292>`)

        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(color)
                .setImage(line)]
        });
    }
    // { add role } //
    if (message.content === "+addrole") {
        message.reply(`> الان تم اضافه لك رول جديده  <a:emoji_43:1220720274060869694>

> يجب عليك بنزول بها اوفرات يوميا و الا سيتم تصفيتك <a:emoji_35:1220720261347934238> `)
    }
    // { Bot } //
    if (message.content === "كككككككك.") {
        message.reply(`**
> Hello Please Fill The List To Help The Developer ・ اهلا بك برجائ ملئ القائمه لمساعده المبرمج


> 1-Please Put The Name Of The Bot ・ برجاء كتابه اسم البوت

> 2-Please Put Photo Of Bot ・ برجاء ارسال صوره البوت

> 3-Whats The Bot Type(system , etc..) ・ ما هو نوع البوت (سستم , الخ..)


بجاء الصبر حتي ينتهي المبرمج من البوت الخاص بك
**`)
    }
    // { +design } //
    if (message.content === "كككككككك..") {
        message.reply(`> **Hello Please Fill The List To Help The Designer ・ برجاء ملء الاستماره لمساعده المصمم

> 1-Whats The Name Of Your Server And The Summary ・ ما هو اسم سيرفرك و اختصاره

> 2-Whats The Color Of Your Design ・ ما هو لون التصميم الذي تريده

> 3-Whats The Type Of Design(Classic , Gaming , Store , etc..) ・ ما هو نوع التصميم (كلاسيك , جيمنج , استور , الخ..)

> 4-Do You Have An Example Of Your Design(Optional) ・ هل لديك مثال علي التصميم الذي تريده (اختياري)

> 5-How Many Hours You Want The Design Finished In It ・ كم عدد الساعات التي تريد ان يتم انهاء التصميم فيها

ThankYou , شكرا لكم
**`)
    }
    // { مرفوض } //

    if (message.content === "مرفوض") {
        message.reply(`**مرفوض ** <a:emoji_43:1239114277697224798> 

** طور من ادائك و قدم تاني ** <a:emoji_43:1239114277697224798>  

** Unacceptable** <a:emoji_43:1239114277697224798> 

** Develop Your performance and Apply again <a:emoji_43:1239114277697224798>  **`)
    }
    // { +Ws } //

    if (message.content === prefix + "ws") {
        message.delete()
        message.channel.send(`**مرحباً ، معاك ~~${message.author}~~ من طاقم العمل 

سيتم ترك التذكره لمده تتراوح مبين 30 الي 60 دقيقة ، اذا تم غلق التذكره فاعلم ان طلبك غير متوفر حالياً , ~~يمكنك فتح تذكره في وقت اخر~~

وشكراً لتفهمك** <:0113:1239107283380736072>`)
        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(color)
                .setImage(line)]
        });

    }


    // { تشفير } //

    if (message.content === "تشفير") {
        message.delete()
        message.channel.send(`**برجاء تشفير هذه الكلمات لعدم مسح الرسائل** <a:emoji_51:1236334683269369907>
نيتر999
ف$$زا
كر//يد//ت 
**Please encrypt these words to not delete messages**<a:emoji_51:1236334683269369907>
Nitr999
V!sa
Cr$$$dit`)
        message.channel.send({ embeds: [new MessageEmbed().setColor(color).setImage(line)] })


    }


    // { +Rep } //

    if (message.content === prefix + "rep") {
        message.delete()
        message.channel.send(`**\`-\` للتبليغ علي سيلر قم باملاء الاستماره حتي نستطيع تعويضك

  صاحب البلاغ :
  اسم السيلر فالديسكورد :
  ايدي السيلر فالديسكورد :
  القصه :
  قم بارسال الدلائل مع دليل التحويل :
  **
  `)
    }

    // { +Med } //

    if (message.content === prefix + "med") {
        message.delete()
        message.channel.send(`**\`-\` للتوسيط علي سيلر  قم باملاء الاستماره حتي نستطيع اكمال عمليه الوسطه

  ايدي البائع :
  السلعه :
  المبلغ :
  الضرايب علي مين :
  ملحوظه : نسبه 5 في المئه ضريبه في عمليه الوساطه**`)
    }

    // { Link } //

    if (message.content === `لينك` || (message.content === `link`) || (message.content === `Link`)) {
        message.channel.send(`<a:emoji_215:1239108382770728990>  𝐘𝐨𝐮𝐫 𝐈𝐧𝐯𝐢𝐭𝐞 𝐋𝐢𝐧𝐤 : <:0113:1239107283380736072>
<a:emoji_215:1239108382770728990> { ${link} } `)
        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(color)
                .setImage(line)]
        });
    }



    // { Fb } //

    if (message.content === `فيدباك` || (message.content === `+fb`) || (message.content === `fb`)) {
        message.reply(`> **شكرا ل اختيارك __${message.guild.name}__ <:emoji_119:1239119898693603380>  **
> **نتمني ان تكون خدمتنا اعجبتك <:emoji_119:1239119898693603380>  **
> **للمزيد من الطلبات برجاء التوجه : <#${order}>**


**Thank You Choosing __${message.guild.name} __ <:emoji_119:1239119898693603380>  **
**We Hope You Like The Service <:emoji_119:1239119898693603380>  **
> **For More Orders : <#${order}>**

> **رايك يهمنا ، يرجي منشن ل ${message.author} ورأيك ف الخدمه <:emoji_119:1239119898693603380>  **

> **Your Opinion Matters , Please Mention To ${message.author} And Write Your Opinion About The Service <:emoji_119:1239119898693603380>  **


**Here : **
>  <#${feedback}> <:emoji_119:1239119898693603380>`)
    }
});

// { +Welcome Seller } //


client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "welcome-seller")) {

        if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`**No Haved Perm In Role**`);
        let user = message.mentions.users.first()
        let args = message.content.split(" ").slice(2).join(" ")
        if (!user) return message.reply("**Pls Mention Seller**")
        if (!args) return message.reply("**Pls Mention Sell Roles**")
        client.channels.cache.get(welcomesellerroom).send(`> 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐎𝐮𝐫 𝐍𝐞𝐰 𝐒𝐞𝐥𝐥𝐞𝐫 𝐈𝐧 __${message.guild.name}__ <a:thunder709:1236349651385581610> 

> 𝐒𝐞𝐥𝐥𝐞𝐫 : ${user}<a:yemoji_7:1236353580806439023>  

> 𝐒𝐞𝐥𝐥𝐞𝐫 𝐑𝐨𝐥𝐞𝐬 : ${args}**   

> 𝐏𝐥𝐬 𝐑𝐞𝐚𝐝 𝐓𝐡𝐞 𝐑𝐮𝐥𝐞𝐬 𝐓𝐨 𝐀𝐯𝐨𝐢𝐝 𝐓𝐚𝐥𝐤𝐢𝐧𝐠 𝐖𝐚𝐫𝐧𝐬 <#${rulest}> <a:MV_animated_warn:1236360924127039560>

  > **𝐄𝐧𝐣𝐨𝐲 <a:max:1236339323238879262> **`)
        client.channels.cache.get(welcomesellerroom).send({
            embeds: [
                new MessageEmbed()
                    .setImage(line)
                    .setColor(color)
            ]
        })
        message.reply("> Done")
    }
})
/*> `&-` 𝖲𝖾𝗅𝗅𝖾𝗋 : <@!913429299430817844>


> `?-` 𝖴𝗉𝗀𝗋𝖺𝖽𝖾𝖽 𝖳𝗈 : <@&1141865841579786240> 


> `#-`  𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 𝖠𝗇𝖽 𝖳𝗁𝗑 𝖿𝗈𝗋 𝖠𝖼𝗁𝗂𝖾𝗏𝗂𝗇𝗀 𝖨𝗇 𝐍𝐞𝐕𝐞𝐑 


> 𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀*/

// { +Upgrade } //

client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "upgrade")) {
        const owner = ["559488096656424972", "397005820547825686"]

        if (!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Ship**`);

        if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
        let user = message.mentions.members.first()
        let args = message.mentions.roles.first()
        if (!user) return message.reply("**Pls Mention Seller**")
        if (!args) return message.reply("**Pls Mention Roles sell**")
        user.roles.add(args)
        client.channels.cache.get(upgraderoom).send(`> **Upgrade In __Ultra Store__ ** <a:UltraS:1222302597495394515>


> **Seller : ${user}** <a:yemoji_7:1220705131373400147>


> **Upgrade To : ${args}** <a:bluecrown:1224817209831063552>


> **Keep Going And Thx Activating In Ultra Store** <a:Theheroes:1220705158036721685>


> **Keep Going** <a:emoji_51:1220720263755333633>`)
        /*client.channels.cache.get(upgraderoom).send({
        const upgradedmembed = new MessageEmbed()
          .setColor(color) 
          .setTimestamp()
          .setDescription( 
    `**> \`#-\` 𝖧𝖾𝗅𝗅𝗈 ${user} , 𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 𝖱𝖾𝖺𝖼𝗁𝖾𝖽 { ${args} } <a:thunder709:1218953070487015536>

    > \`?-\` 𝖳𝗁𝖾 𝖠𝖽𝗆𝗂𝗇 : ${user} <a:thunder709:1218953070487015536>

    > \`%-\` 𝖳𝗁𝗑 𝖥𝗈𝗋 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇 𝖢𝖺𝗉𝗂𝗍𝖺𝗇𝗈 𝖲𝗍𝗈𝗋𝖾 <a:thunder709:1218953070487015536>

    > \`-\` 𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 <a:thunder709:1218953070487015536>**
    **> `#-` Hello ${user} , You Have Reached { ${args} } <a:xgoldUsRDrG:1120344400120262737>

    > `-` The Admin : ${user} <a:Theheroes:1220705158036721685>

    > `-` Thx For Activating In Calitano Store <a:yemoji_7:1220705131373400147>

    > `-` Keep Going <a:emoji_51:1220720263755333633>**`)
          .setFooter(`𝖴𝗉𝗀𝗋𝖺𝖽𝖾 ${message.author.tag}`);
        user.send({ embeds: [upgradedmembed] });
        message.reply("> **Done**")*/
    }
})

// { Add Client Role } //

client.on('messageCreate', async (message) => {
    if (message.author.id === "557628352828014614" && message.channel.parentId === ordercategory) {
        let member = message.mentions.members.first();
        if (!member || member.bot) return;

        let roleId = "1235972430573469716";
        let role = message.guild.roles.cache.get(roleId);

        if (!role) {
            console.error(`Role with ID ${roleId} not found.`);
            return;
        }

        if (member.roles.cache.has(roleId)) {
            return;
        } else {
            member.roles.add(role.id).then(() => {
                return
            }).catch(error => {
                console.error("Error adding role:", error);
            });
        }
    }
});

// { +Inrole } //

client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "inrole")) {
        let args = message.content.split(" ").slice(1).join(" ");
        if (message.author.bot) return;
        let trole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args)
        if (!trole) {
            return message.reply(`**:rolling_eyes: Please mention role id**`)
        } else {
            const roleMember = trole.members.map((user) => `${user.id} ${user.user.tag}`).join('\n')
            message.reply({
                embeds: [
                    new MessageEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))

                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .addFields([
                            {
                                name: `List of users in ${trole.name} role : (${trole.members.size})`,
                                value: `**${roleMember}**`
                            },
                        ])
                        .setColor(color)
                        .setImage(line)
                        .setFooter(`Members in this role ${trole.members.size}`)]
            })
        }
    }
})

// { +Setactivity } //

client.on('messageCreate', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'setactivity')) {
        if (!owner.includes(message.author.id)) return;
        const oy = message.content.split(" ").slice(1).join(" ");
        if (!oy) return message.reply("**Please Write New Activity**");

        // تسجيل النشاط في الكونسول
        console.log(`Changing bot activity to: ${oy}`);

        client.user.setPresence({ activities: [{ name: oy }], status: 'online' });
        return message.reply(`**Done, set bot presence to ${oy}**`);
    }
});

// { +Setprefix } //

client.on("messageCreate", async message => {


    if (message.content.startsWith(prefix + "setprefix")) {
        if (!owner.includes(message.author.id)) {
            return message.channel.send(`**Permission denied. You don't have the required permissions.**`);
        }

        const args = message.content.slice(1).trim().split(/ +/);
        if (!args[1]) {
            return message.channel.send(`**Please provide a new prefix.**`);
        }

        // تغيير قيمة البريفيكس في قاعدة البيانات
        db.set("prefix", args[1]);

        // تحديث ملف config.json
        const config = require('./config.json');
        config.prefix = args[1];
        fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));

        message.channel.send(`**Prefix successfully changed to: \`${args[1]}\`**`);

    }
});

// { +Setavatar } //

client.on("messageCreate", message => {
    if (message.content.toLowerCase().startsWith(prefix + "setavatar")) {
        if (!owner.includes(message.author.id)) return;
        let avLink = message.content.substr(`${prefix}setavatar `.length);
        if (!avLink) return message.channel.send("**Incorrect Link, Please Put Avatar Link!**");

        // تسجيل تغيير الصورة في الكونسول
        console.log(`Changing bot avatar to: ${avLink}`);

        client.user.setAvatar(avLink).then(() => {
            message.delete()
            message.channel.send('**Bot Avatar Has Been Changed ✅**')
        }).catch(() => {
            message.channel.send('**Error, Try Again Later! 🚫: Incorrect Link Or Ratelimit**')
        });
    }
});

// { Auto Fedback } //

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id != feedback) return;
    message.reply({
        embeds: [
            new MessageEmbed()
                .setColor(color)
                .setDescription(`> **Thanks For __ ${message.author.tag} __Giving Us Feedback ** <:emoji_119:1239119898693603380> 

> **We Hope You Visit __${message.guild.name}__ Again <:emoji_119:1239119898693603380> **`)
                .setImage(line)
        ]
    })
});

// { +Send } //

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    if (message.content.startsWith(prefix + 'send')) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply(`**You don't have permissions**`);
        }

        let id = message.content.split(' ')[1];
        let user = message.mentions.members.first() || message.guild.members.cache.get(id);
        let argss = message.content.split(' ').slice(2).join(' ');

        if (!user) {
            return message.channel.send(`**Please mention a member or provide their ID**`);
        }

        if (!argss) {
            return message.channel.send(`**Please send a message**`);
        }

        if (user.user.bot || user.id === message.author.id) {
            return message.channel.send(`**You cannot send a message to a bot or yourself**`);
        }

        let attach = message.attachments.first();
        if (attach) {
            user.send({ content: argss, files: [attach] }).then(m => {
                message.channel.send(`**Done, message sent**`);
            }).catch(err => {
                return message.channel.send(`**Can't send a message to this user**`);
            });
        } else {
            user.send(argss).then(m => {
                message.channel.send(`> **Done**`);
            }).catch(err => {
                return message.channel.send(`**Can't send a message to this user**`);
            });
        }
    }
});


// { +Unbanall } //

client.on('messageCreate', async message => {
    if (message.content.startsWith(prefix + 'unbanall')) {
        let b = await message.guild.bans.fetch()
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You don't Have permissions")
        b.forEach(ban => message.guild.members.unban(ban.user))
        message.reply(`**✅ ${b.size} members has been unbanned.🛬**`)
    }
});

// { +Name | اسم } //

client.on('messageCreate', async message => {
    if (message.content.toLowerCase().startsWith(prefix + 'nick') || message.content.startsWith(prefix + 'اسم')) {

        const member = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]);
        const name = message.content.split(" ").slice(2).join(" ")

        if (!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا تمتلك الصلاحيات اللازمة لاستخدام هذا الامر !')
        if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا امتلك الصلاحيات اللازمة للقيام هذا الامر !')

        if (!member) return message.reply('رجاء قم بمنشن العضو الذي تريد تغيير لقبه !')
        if (!name) return message.reply("رجاء قم بكتابة اللقب اللذي تريد وضعه للعضو !")

        member.setNickname(name).catch(() => { message.reply('لا يمكنني تغيير اسم هذا العضو !') })
    }
})

// { +Unlock } //

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'unlock')) {
        const permission = message.member.permissions.has("MANAGE_CHANNELS");
        const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

        if (!permission)
            return message.reply(
                { content: "**You don't have permission to use this command**", ephemeral: true }
            ).catch((err) => {
                console.log(`i couldn't reply to the message: ` + err.message)
            })

        if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't change the channel permissions. Please check my permissions.**`, ephemeral: true }).catch((err) => {
            console.log(`i couldn't reply to the message: ` + err.message)
        })
        let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.permissionOverwrites.edit(everyone, {
            SEND_MESSAGES: true
        }).then(() => {
            message.reply({ content: `:unlock: **<#${message.channel.id}> has been unlocked.**`, ephemeral: true })
        })
    }
});

// { +Lock } //
client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'lock')) {
        const permission = message.member.permissions.has("MANAGE_CHANNELS");
        const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

        if (!permission)
            return message.reply(
                { content: ":x: **You don't have permission to use this command**", ephemeral: true }
            ).catch((err) => {
                console.log(`i couldn't reply to the message: ` + err.message)
            })

        if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
            console.log(`i couldn't reply to the message: ` + err.message)
        })
        let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.permissionOverwrites.edit(everyone, {
            SEND_MESSAGES: false
        }).then(() => {
            message.reply({ content: `:lock: **${message.channel.name} has been looked.** `, ephemeral: true }).catch((err) => {
                console.log(`i couldn't reply to the message: ` + err.message)
            })
        })
    }
});




// { +Unban } //

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'unban')) {
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
        if (!message.guild.me.permissions.has("BAN_MEMBERS")) return;
        let args = message.content.split(' ')
        let id = args[1];
        if (!id) return message.reply(`** 😕 Please mention member or id **`);
        if (isNaN(id)) {
            return message.reply(`** 😕 Please mention member or id **`);
        } else {
            message.guild.members.unban(id).then(mmm => {
                message.reply(`✅** ${mmm.tag} unbanned!**`)
            }).catch(err => message.reply(`**I can't find this member in bans list**`));
        }
    }
})
// { +Hide } //

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'hide')) {

        const permission = message.member.permissions.has("MANAGE_CHANNELS");

        const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

        if (!permission)
            return message.reply({ content: "**You don't have permission to use this command**", ephemeral: true }).catch((err) => {
                console.log(`i couldn't reply to the message: ` + err.message)

            })

        if (!guilds) return message.reply({ content: `**I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
            console.log(`i couldn't reply to the message: ` + err.message)

        })

        let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.permissionOverwrites.edit(everyone, {
            VIEW_CHANNEL: false
        }).then(() => {
            message.reply({ content: `**<#${message.channel.id}> Done hide this room.**`, ephemeral: true }).catch((err) => {
                console.log(`i couldn't reply to the message: ` + err.message)

            })
        })
    }
});
// { +Show } //

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'show')) {
        const permission = message.member.permissions.has("MANAGE_CHANNELS");
        const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

        if (!permission)
            return message.reply(
                { content: "**You don't have permission to use this command**", ephemeral: true }
            ).catch((err) => {
                console.log(`i couldn't reply to the message: ` + err.message)
            })

        if (!guilds) return message.reply({ content: `**I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
            console.log(`i couldn't reply to the message: ` + err.message)
        })
        let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.permissionOverwrites.edit(everyone, {
            VIEW_CHANNEL: true
        }).then(() => {
            message.reply({ content: `<#${message.channel.id}> Done show this room.**`, ephemeral: true }).catch((err) => {
                console.log(`i couldn't reply to the message: ` + err.message)
            })
        })
    }
});
// { +Avatarserver } //

client.on("messageCreate", async message => {
    if (!message.content.startsWith(prefix) || message.author.message) return;
    const argss = message.content.slice(prefix.length).trim().split(/ +/);
    const command = argss.shift().toLowerCase();

    if (command === "server-avatar") {
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
                    .setColor(color)
                    .setImage(line)
                    .setAuthor({ name: `${message.guild.name} Info`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
                    .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
                    .addFields(
                        { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },
                        { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
                        { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
                        { name: `👥  Members (${message.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
                        { name: `💬 Channels (${message.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
                        { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}**\nRoles: **${rolesCount}**`, inline: true },
                        { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
                    )
            ], ephemeral: true
        })
    }
})

// { +Top-server } //

client.on('messageCreate', async (message) => {
    if (message.content == '+top-server') {

        const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(10);

        const description = guilds.map((guild, index) => {
            return `\`#${index + 1}\` | **${guild.name}** -> **\_\_${guild.memberCount}\_\_** members`
        }).join(`\n\n`)

        const embed = new MessageEmbed()
            .setTitle('Top Guilds')
            .setDescription(description)
            .setColor(color)

        message.channel.send({ embeds: [embed] })
    }
})




// { +Ban } //

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    let c = message.content.split(' ')
    if (c[0] == prefix + 'ban') {
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
        if (!message.guild.me.permissions.has("BAN_MEMBERS")) return;

        let argss = message.content.split(' ')
        let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
        if (!user) return message.reply(`** 😕 Please mention member or id **`);
        if (user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

        if (!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
        await user.ban().catch(err => { console.log(err) });
        await message.reply(`✅**${user.user.tag} banned from the server!**✈️`);
    }
})


// { +Uptime } //

client.on("messageCreate", async (message) => {
    if (message.content === prefix + "uptime") {
        if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let s = Math.floor(client.uptime / 1000) % 60;
        ip = `${days} days,  ${hours} hours,  ${minutes} minutes,  ${s} seconds,`
        let embed = new Discord.MessageEmbed()
            .setColor(color)
            .setImage(line)
            .setTitle(`uptime:`)
            .setDescription(`**${ip}**`)
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
        message.reply({ embeds: [embed] })
    }
})

// { +G-role } //

client.on("messageCreate", message => {
    if (message.content.toLowerCase().startsWith(prefix + "g-role")) {
        if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)

        const theRole = message.mentions.roles.first();
        const theUser = message.mentions.members.first();

        if (!theUser) return message.reply('**Please Mention A User !**')
        if (!theRole) return message.reply('**Please Mention A Role !**')

        theUser.roles.add(theRole)
            .then(() => {
                message.reply("Done <a:040:1239115054075347024>")
            })
            .catch((t) => {
                message.reply("Error 🚫 : " + t.message)
            })
    }
})


// { +R-role } //

client.on("messageCreate", message => {
    if (message.content.toLowerCase().startsWith(prefix + "r-role")) {
        if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
        const theRole = message.mentions.roles.first();
        const theUser = message.mentions.members.first();

        if (!theUser) return message.reply('**Please Mention A User !**')
        if (!theRole) return message.reply('**Please Mention A Role !**')

        theUser.roles.remove(theRole)
            .then(() => {
                message.reply("Done <a:040:1239115054075347024>")
            })
            .catch((t) => {
                message.reply("Error 🚫 : " + t.message)
            })
    }
})

// { Order Msg } //

client.on('channelCreate', message => {
    if (message.parentId !== ordercategory) return;
    setTimeout(() => {
        message.send(`
\`-\` ** السلام عليكم ورحمة الله وبركاته ** 
\`-\` **معك طاقم العمل لدي سترنجر ستور في تذكرة الطلب **<a:040:1239115054075347024>  

**يرجي توضيح طلبك بالكامل بكل توضيح لكي يمكن لطاقم العمل مساعدتك باكمل وجهه وتاكيد طلب المنتج الخاص بك , بعد تحديد طلبك سيتم منشن فريق السلعه الخاص بطلبك ويرجي التحلي بالصبر و انتظار البائع من فريق العمل , ويرجي العلم ان في حاله عدم توافر المنتج في الوقت الحالي سيتم غلق التذكره و العمل علي توفير المنتج قريبا** <a:hellal12:1239119322358743060> 
`)

    }, 3000);
})
// { Apply Msg } //

client.on('channelCreate', async (message) => {

    if (message.parentId != applycategory) return;
    setTimeout(() => {

        message.send({
            content: `**مرحبا بك في خادم سترنجر ستور <a:emoji_70:1221900668327952464>

لملئ استماره المصرين برجاء الضغط علي بوتين المصرين 
لملئ استماره الخليجية برجاء الضغط علي بوتين الخليجي
To fill out the English form, please click on the English button **`
            , components: [
                new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setLabel("مصري")
                            .setStyle("PRIMARY")
                            .setCustomId("hh"),
                        new MessageButton()
                            .setLabel("خليجي")
                            .setStyle("PRIMARY")
                            .setCustomId("ss"),
                        new MessageButton()
                            .setLabel("English")
                            .setStyle("PRIMARY")
                            .setCustomId("jj")
                    )
            ]
        })
    }, 2000);

})
client.on('interactionCreate', async (interaction) => {
    if (interaction.customId == "hh") {
        await interaction.reply({
            embeds: [
                new MessageEmbed()

                    .setDescription(`**مرحبأ بك في تذكره التقديم علي طاقم سترنجر ، برجاء ملئ الاستماره**
**-سـ1 : الاسم ثلاثي .**
**-سـ2 : السن .**
**-سـ3 : رقم الهاتف .**
**-سـ4 : رقم الكاش التجاري للعمل . **
**-سـ5 : العنوان موضحها اسم المحافظه .**
**-سـ6 : السيرفرات الذي عملت فيها من قبل ؟ .**
**-سـ7 : يرجي ارسال 25 دليل إيجابي علي التعامل . **

**يرجئ العلم أن هناك رسوم ( ضمان ) يتم دفعه عند القبول و قدره 300أو 30چ**`)

            ]
        })
    }
    if (interaction.customId == "ss") {
        await interaction.reply({
            embeds: [
                new MessageEmbed()

                    .setDescription(`> **مرحبأ بك في تذكره التقديم علي طاقم __سترنجر__ ، يرجي ملئ الاستماره**

**-سـ1 : الاسم ثلاثي .** 
**-سـ2 : السن .** 
**-سـ3 : رقم الهاتف .** 
**-سـ4 : العنوان موضحها اسم المحافظه .** 
**-سـ5 : السيرفرات الذي عملت فيها من قبل ؟ .** 
**-سـ6 : يرجي ارسال 25 دليل إيجابي علي التعامل .**

**- يرجئ العلم أن هناك رسوم ( ضمان ) يتم دفعه عند القبول و قدره : 300k أو 0.5$ كربيتو  او 3 ريال **`)

            ]
        })
    }
    if (interaction.customId == "jj") {
        interaction.reply({
            embeds: [
                new MessageEmbed()

                    .setDescription(`**\`-\` Name
\`-\` Age
\`-\` Country
\`-\` Experience Time In Sell And Buy
\`-\` Send 25 Feedbacks From Ur Clients
\`-\` Do You Worked In A Egyptian Store Before
\`-\` Sell Roles

Please note that there is a (guarantee) fee to be paid upon acceptance, amounting to 300k or 30EGP or 1$** `)
            ]
        })
    }
})

/*// { +Wrester } //
client.on('messageCreate', async (message) => {
    if (message.content === prefix + "wtester") {
        message.reply(`<@&1205834216714014800>`)
    }
})*/

// { +Embed } //

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    if (message.content.startsWith(prefix + 'embed')) {
        if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`);

        let args = message.content.split(' ').slice(1).join(' ');

        if (!args) return message.reply('** :x: Please select a message **');

        message.delete();

        let embed = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setDescription(`${args}`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor(color)
            .setTimestamp()
        message.channel.send({ embeds: [embed] });
    }
});

// { +Say } //

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix) || message.content.length <= prefix.length) return;

    const args = message.content.slice(prefix.length).trim();
    const command = args.split(/ +/)[0].toLowerCase();

    if (command === 'say') {
        const text = args.slice(command.length).trim();
        message.delete();
        message.channel.send(text);
    }
});

// { Transfer Line } //

client.on("messageCreate", message => {
    if (message.content.includes('has transferred')) {

        const TransformEmbed = new MessageEmbed()
            .setImage(line)
            .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
    }
})

client.on("messageCreate", message => {
    if (message.content.includes('قام بتحويل')) {

        const TransformEmbed = new MessageEmbed()
            .setImage(line)
            .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
    }
})

// { Auto Tax } //

client.on("messageCreate", message => {
    if (message.content.includes('**Your Tax Is**')) {

        const TransformEmbed = new MessageEmbed()
            .setImage(line)
            .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
    }
})
client.on("messageCreate", async (message) => {
    let args = message.content
        .split(" ")
        .slice(0)
        .join(" "); if (message.author.bot) return;
    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
    else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    if (!args2) return message.reply(`
  > ** Error It Must Be A Number ⚠⚠ **`);
    if (isNaN(args2)) return message.reply(`
  > ** Error It Must Be A Number ⚠⚠ **`);
    if (args2 < 1) return message.reply(`
  > ** Error It Must Be Larger Than 1 ⚠⚠ **`);

    let m = await message.reply({
        content: `
  > **Your Tax Is : __${tax}__**`
    });
})

// { Support Msg } //

client.on('channelCreate', async (message) => {

    if (message.parentId != supportcategory) return;
    setTimeout(() => {
        message.send({
            content: `\`-\` ** السلام عليكم ورحمة الله وبركاته ** <a:emoji_70:1221900668327952464>
\`-\` **معك طاقم العمل لدي سترنجر ستور في تذكرة الدعم ** <a:emoji_70:1221900668327952464>

**الرجاء من اي سبورت متخصص في تذاكر الدعم ب الضغط علي هذا البوتن لاستلام التذكره ** <a:emoji_70:1221900668327952464>
` , components: [
                new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setLabel("Claim")
                            .setStyle("PRIMARY")
                            .setCustomId("Claim")
                    )
            ]
        })
    }, 2000);  /*client.on('interactionCreate' , async(interaction) => {
      if(interaction.customId == "hh") {
       await interaction.reply({ embeds: [
          new MessageEmbed()
          .setTitle("Never Apply To Team")
          .setDescription( */
})
client.on('interactionCreate', async (interaction) => {
    if (interaction.customId == "Claim") {
        if (!interaction.member.roles.cache.has(support)) return;
        if (!interaction.channel.name.startsWith("ticket")) return;
        db.add(`supportticketclaims_${interaction.guild.id}_${interaction.user.id}`, 1)

        let levelll = db.get(`support_${interaction.user.id}`)
        if (levelll == null) {
            db.set(`support_${interaction.user.id}`, {
                poi: 0,
                id: interaction.user.id
            })
        }
        let levell = db.get(`support_${interaction.user.id}`)
        let level = levell.poi;

        await db.set(`support_${interaction.user.id}`, {
            poi: Math.floor(level + 3),
            id: interaction.user.id
        })
        interaction.channel.setName(`${interaction.member.nickname}`)
        await interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setDescription(`> \`-\`** ✅ Done Claimed Ticket ${interaction.member.nickname} **`)
            ]
        })
    }
})

// { +Tax } //

client.on("messageCreate", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "tax") {
        let args1 = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (message.author.bot) return;
        if (args1.endsWith("m")) args1 = args1.replace(/m/gi, "") * 1000000;
        else if (args1.endsWith("k")) args1 = args1.replace(/k/gi, "") * 1000;
        else if (args1.endsWith("M")) args1 = args1.replace(/M/gi, "") * 1000000;
        else if (args1.endsWith("K")) args1 = args1.replace(/K/gi, "") * 1000;
        else if (args1.endsWith("b")) args1 = args1.replace(/b/gi, "") * 1000000000;
        else if (args1.endsWith("B")) args1 = args1.replace(/B/gi, "") * 1000000000;
        let args2 = parseInt(args1)
        let tax = Math.floor(args2 * (20) / (19) + (1))
        let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
        let tax3 = Math.floor(tax2 * (20) / (19) + (1))
        let tax4 = Math.floor(tax2 + tax3 + args2)
        if (!args2) return message.reply(`
    > ** Error It Must Be A Number ⚠⚠ **`);
        if (isNaN(args2)) return message.reply(`
    > ** Error It Must Be A Number ⚠⚠ **`);
        if (args2 < 1) return message.reply(`
    > ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`first_embed`)
                    .setLabel("Mediator Tax")
                    .setEmoji("<a:emoji_43:1239107756200562739>")
                    .setStyle('SUCCESS')
            );
        let row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`2_embed`)
                    .setLabel("Back")
                    .setEmoji("↩️")
                    .setStyle('DANGER')
            );
        let m = await message.reply({
            content: `
    > **Your Tax Is : __${tax}__**`, components: [row]
        });
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000, max: 2 })
        collector.on('collect', async i => {
            if (i.customId === 'first_embed') {
                m.edit({
                    content: `
    > Your Tax Is : __${tax4}__**`, components: [row2]
                })
                row
                i.deferUpdate()
            }
            if (i.customId === '2_embed') {
                m.edit({
                    content: `
    > **Your Tax Is : __${tax}__**`, components: [row]
                })

                i.deferUpdate()
            } else {
                return;
            }
        });
        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(color)
                .setImage(line)]
        });
    }

    // { +Come } //

    if (command === "come") {
        const user = message.mentions.members.first()
        if (!user) return message.reply(`**<a:aSCPWRONG:1239108994778267648> I Can't Find This User!**`)

        if (user.user.bot) return message.reply(`**<a:aSCPWRONG:1239108994778267648> You Can't Send To Bot!**`)
        let inv = await message.channel.createInvite(message.channel)
        if (user.id == message.author.id) return message.reply(`**<a:aSCPWRONG:1239108994778267648> You Can't Send To Yourself!**`)
        user.send(`> <a:nnnn11:1239118446969753651>  **Hi**, __ <@${user.id}> __
> 
> 
> <a:nnnn11:1239118446969753651>  ** You Have Been Request In The Server ** # - ${message.guild.name}
> 
> 
> <a:nnnn11:1239118446969753651>   **You Are Request By** <@${message.author.id}>
> 
>  <a:nnnn11:1239118446969753651> 
> <a:nnnn11:1239118446969753651>  **Pls Go To The Channel** <#${message.channel.id}>
> 
> **Server Link** {  ${link} }`)
            .then(() => {
                message.reply({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(`**<a:784900461161087006:1239108757212893255> Please Wait ....**`)
                            .setColor(color)
                    ]
                }).then((t) => {
                    setTimeout(() => t.edit({
                        embeds: [
                            new MessageEmbed()
                                .setDescription(`**<a:040:1239115054075347024> Done Send To ${user}**`)
                                .setColor(color)
                        ]
                    }), 1800)
                })
            }).catch((y) => {
                message.reply({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(`> **<a:784900461161087006:1239108757212893255> Please Wait ....**`)
                            .setImage(line)
                            .setAuthor(message.author.username, message.author.avatarURL())
                            .setColor(color)
                    ]
                }).then((t) => {
                    setTimeout(() => t.edit({
                        embeds: [
                            new MessageEmbed()
                                .setDescription(`❎| **Error == __${y.message}__**`)
                                .setImage(line)
                                .setAuthor(message.author.username, message.author.avatarURL())
                                .setColor(color)
                        ]
                    }), 1800)
                })
            })
    }
})

// { Offers } //

client.on('messageCreate', async message => {
    if (message.content.startsWith("تشفففففففففففيير") && !message.author.bot) {
        let args = message.content.split(" ").slice(1).join(" ");
        let content = args.replaceAll("نيترو", "نيتـ رو").replaceAll("فيزا", "فيـ ـزا").replaceAll("كريدت", "كريـ ـدت").replaceAll("كرديت", "كريـ ـدت").replaceAll("كاش", "كـ ـاش").replaceAll("ستيم", "ستـ ـيم").replaceAll("سيرفر", "سيرفـ ـر").replaceAll("ديسكورد", "ديسـ ـكورد").replaceAll("حسابات", "حسابـ ـات").replaceAll("اكونتات", "اكـ ـونتات").replaceAll("بوستات", "بوستـ ـات").replaceAll("تفعيل", "تفـ ـعيل").replaceAll("نيتفليكس", "نيتفلـ ـيكس").replaceAll("سبوتيفاي", "سبوتـ ـيفاي").replaceAll("تيكتوك", "تيكـ ـتوك").replaceAll("فيسبوك", "فيسـ ـبوك").replaceAll("انستا", "انسـ ـتا").replaceAll("توكنات", "توكـ ـنات").replaceAll("فوتات", "فوتـ ـات").replaceAll("بوتات", "بوتـ ـات").replaceAll("كريبتو", "كريبتـ ـو").replaceAll("عملات", "عمـ ـلات").replaceAll("كود", "كـ ـود").replaceAll("بوت", "بـ وت").replaceAll("اكس بوكس", "اكسـ ـبوكس").replaceAll("فيز", "فيـ ـز").replaceAll("موجود", "موجـ ـود").replaceAll("اكونت", "اكـ ونـ ت").replaceAll("متوفر", "مـتـ وفر").replaceAll("سعر", "سـ ـعر").replaceAll("تيكت", "تيـ ـكت").replaceAll("تكت", "تـ كـ ـت").replaceAll("متابع", "مـ ـتـابـع").replaceAll("حساب", "حـ ـسـاب").replaceAll("بيع", "بـ ـيع").replaceAll("اعضاء", "اعـ ـضاء").replaceAll("اوتو", "اوتـ ـو").replaceAll("اوفلاين", "اوفـ ـلاين").replaceAll("اونلاين", "اونـ ـلاين").replaceAll("تيك توك", "تـ ـيك تـ ـوك").replaceAll("وهمي", "وهـ ـمي").replaceAll("استور", "اسـ ـتور").replaceAll("شاهد", "شـ ـاهـ ـد").replaceAll("نوع", "نـ ـوع").replaceAll("شوب", "شـ ـوب").replaceAll("تفاعل", "تفـ ـاعـ ـل").replaceAll("لفل", "لـ ـفـ ـل").replaceAll("ضمان", "ضـ ـمان").replaceAll("محدوده", "محـ ـدوده").replaceAll("فتره", "فـ ـتره").replaceAll("ابدي", "ابـ ـدي").replaceAll("سنه", "سـ ـنه").replaceAll("شهر", "شـ ـهر").replaceAll("شهور", "شـ ـهور").replaceAll("اسبوع", "اسـ ـبوع").replaceAll("انواع", "انـ ـواع").replaceAll("انواع", "انـ ـواع").replaceAll("جميع", "جمـ ـيع").replaceAll("ديس", "ديـ ـس").replaceAll("كوين", "كويـ ـن").replaceAll("والت", "والـ ـت").replaceAll("سويت", "سـ ـويـ ـت").replaceAll("اسعار", "اسعـ ـار").replaceAll("ميمبر", "ميـ ـمبر").replaceAll("ميوزك", "ميـ ـوزك").replaceAll("برودكاست", "برودكـ ـاسـ ـت").replaceAll("سيستم", "سيـ ـستم").replaceAll("ميديا", "ميديـ ـا").replaceAll("خدمات", "خدمـ ـات").replaceAll("سوشيال", "شوشـ ـيال").replaceAll("توكن", "تـ ـوكن").replaceAll("نتفلكس", "نtفلكس");


        message.author.send(content);
        message.reply("**تم ارسال الرساله بي التشفير في الخاص <a:wz_true:1236336917235241111>**");
    }
});

// { Re } //

client.on("messageCreate", async msg => {
    if (msg.content.toLowerCase() === "re") {
        if (!msg.channel.name.startsWith("ticket-")) return;
        let user = msg.guild.members.cache.get(msg.author.id).displayName || msg.author.username;
        msg.channel.setName(`by-${user}`)
    }
})


// { +Font } //

client.on("messageCreate", message => {
    if (message.content.startsWith('+font')) {
        let words = message.content.split(" ").slice(1).join(" ");
        let words2 = words.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1", "𝟏").replaceAll("2", "𝟐").replaceAll("3", "𝟑").replaceAll("4", "𝟒").replaceAll("5", "𝟓").replaceAll("6", "𝟔").replaceAll("7", "𝟕").replaceAll("8", "𝟖").replaceAll("9", "𝟗").replaceAll("0", "𝟎")
        message.channel.send(`${words2}`)
    }
});

// { +Io | خمول } //

client.on("messageCreate", message => {
    if (message.content == "خمول") {

        message.channel.send(`**يرجي العلم أنه في حاله الخمول في التذكره لمده عشر دقايق سوف يتم غلق التذكره** <a:784900461161087006:1239108757212893255>`)
        message.delete()

    }
})

// { +Tag } //

client.on("messageCreate", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'tag') {
        let mentionedUser = await message.mentions.members.first();
        let name = args.slice(1).join(' ');

        if (!mentionedUser) {
            return await message.channel.send('**Please mention a user.**');
        }

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return await message.reply("**You don’t have permission to use this command.**");
        }

        let font = name.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1", "𝟏").replaceAll("2", "𝟐").replaceAll("3", "𝟑").replaceAll("4", "𝟒").replaceAll("5", "𝟓").replaceAll("6", "𝟔").replaceAll("7", "𝟕").replaceAll("8", "𝟖").replaceAll("9", "𝟗").replaceAll("0", "𝟎");

        let newNickname = `Medo | ${font}`;

        await mentionedUser.setNickname(newNickname).then(async () => {
            await message.channel.send(`> <a:040:1239115054075347024>**Done Adding Server Tag To ${mentionedUser}**`);
        }).catch(err => message.channel.send(`**I don't have Permission to do that**`));
    }
});

// { +Team } //

const owner = ["", "", "", ""]
const wait = require("node:timers/promises").setTimeout;
client.on('messageCreate', async message => {
    let msg = message, m = message
    if (m.author.bot) return;
    if (message.content !== prefix + "team") return
    if (m.member.permissions.has("ADMINISTRATOR")) {
        if (message.channel.id !== "1220357614072762368") {
            let rep = await message.reply("**استخدم الامر في روم التيم**")
            await wait(2000);
            rep.delete();
            message.delete();
            return;
        }
        const webhook = new WebhookClient({ url: "https://discord.com/api/webhooks/1225496628522254376/fUAkPo8PO903-xkE2JAQtS2FqEaziikgiosqL5U9NG4fMOT96l4JRMDNtZVOQMYoU9oS" });
        let team = m.guild.roles.cache.get("1220357046478831729")
        let count = 0;
        team.members.forEach((member) => {
            message.channel.sendTyping();
            let mem = m.guild.members.cache.get(member.id);
            webhook.send({
                content: `<@${mem.id}>`,
                username: mem.user.username,
                avatarURL: mem.user.avatarURL(),
            })

            count++;
        })
        message.channel.send("**Done , Team count is :** " + count)
    }
})

// { +Tbc } //

client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + 'tbc')) {

        if (!owner.includes(message.author.id)) {
            return message.channel.send(`You Don't Have Owner & Ship`);
        }
        const args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        const role = message.mentions.roles.first();

        if (!role) {
            return message.reply('**Please Mention a Role**');
        }
        if (!args) {
            return message.reply('**Please Enter Your Message**');
        }

        let sentCount = 0;

        let members = message.guild.members.cache.filter(member => !member.user.bot && member.roles.cache.has(role.id));

        members.forEach((member, index) => {
            setTimeout(() => {
                member.send({ content: args })
                    .then(() => {
                        console.log(`Sent to ${member.user.username}`);
                        message.channel.send(`**Sent to <@${member.user.id}> <a:040:1239115054075347024>**`);
                    })
                    .catch(err => {
                        console.error(`**Couldn't send to ${member.user.tag} ❌**`);
                        message.channel.send(`**Couldn't send to <@${member.user.id}> <a:aSCPWRONG:1239108994778267648>**`);
                    })
                    .finally(() => {
                        sentCount++;
                        if (index === members.size - 1) {
                            // Send a final message after sending to all members
                            message.channel.send(`**Done sending your message to ${sentCount} members**`);
                        }
                    });
            }, index * 5000); // Send to each member with a delay of 5 seconds
        });
    }
});


// { Auto Offers } //

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (message.channel.id == "1196841544397897810") {
        const anchannel = client.channels.cache.get("1206354256370864138")
        let args = message.content.split(' ').slice(0).join(' ')

        let test = args.replaceAll("نيترو", "نيتـ رو").replaceAll("فيزا", "فيـ ـزا").replaceAll("كريدت", "كريـ ـدت").replaceAll("كرديت", "كريـ ـدت").replaceAll("كاش", "كـ ـاش").replaceAll("ستيم", "ستـ ـيم").replaceAll("سيرفر", "سيرفـ ـر").replaceAll("ديسكورد", "ديسـ ـكورد").replaceAll("حسابات", "حسابـ ـات").replaceAll("اكونتات", "اكـ ـونتات").replaceAll("بوستات", "بوستـ ـات").replaceAll("تفعيل", "تفـ ـعيل").replaceAll("نيتفليكس", "نيتفلـ ـيكس").replaceAll("سبوتيفاي", "سبوتـ ـيفاي").replaceAll("تيكتوك", "تيكـ ـتوك").replaceAll("فيسبوك", "فيسـ ـبوك").replaceAll("انستا", "انسـ ـتا").replaceAll("توكنات", "توكـ ـنات").replaceAll("فوتات", "فوتـ ـات").replaceAll("بوتات", "بوتـ ـات").replaceAll("كريبتو", "كريبتـ ـو").replaceAll("عملات", "عمـ ـلات").replaceAll("كود", "كـ ـود").replaceAll("بوت", "بـ وت").replaceAll("اكس بوكس", "اكسـ ـبوكس").replaceAll("فيز", "فيـ ـز").replaceAll("موجود", "موجـ ـود").replaceAll("اكونت", "اكـ ونـ ت").replaceAll("متوفر", "مـتـ وفر").replaceAll("سعر", "سـ ـعر").replaceAll("تيكت", "تيـ ـكت").replaceAll("تكت", "تـ كـ ـت").replaceAll("متابع", "مـ ـتـابـع").replaceAll("حساب", "حـ ـسـاب").replaceAll("بيع", "بـ ـيع").replaceAll("اعضاء", "اعـ ـضاء").replaceAll("اوتو", "اوتـ ـو").replaceAll("اوفلاين", "اوفـ ـلاين").replaceAll("اونلاين", "اونـ ـلاين").replaceAll("تيك توك", "تـ ـيك تـ ـوك").replaceAll("وهمي", "وهـ ـمي").replaceAll("استور", "اسـ ـتور").replaceAll("شاهد", "شـ ـاهـ ـد").replaceAll("نوع", "نـ ـوع").replaceAll("شوب", "شـ ـوب").replaceAll("تفاعل", "تفـ ـاعـ ـل").replaceAll("لفل", "لـ ـفـ ـل").replaceAll("ضمان", "ضـ ـمان").replaceAll("محدوده", "محـ ـدوده").replaceAll("فتره", "فـ ـتره").replaceAll("ابدي", "ابـ ـدي").replaceAll("سنه", "سـ ـنه").replaceAll("شهر", "شـ ـهر").replaceAll("شهور", "شـ ـهور").replaceAll("اسبوع", "اسـ ـبوع").replaceAll("انواع", "انـ ـواع").replaceAll("انواع", "انـ ـواع").replaceAll("جميع", "جمـ ـيع").replaceAll("ديس", "ديـ ـس").replaceAll("كوين", "كويـ ـن").replaceAll("والت", "والـ ـت").replaceAll("سويت", "سـ ـويـ ـت").replaceAll("اسعار", "اسعـ ـار").replaceAll("ميمبر", "ميـ ـمبر").replaceAll("ميوزك", "ميـ ـوزك").replaceAll("برودكاست", "برودكـ ـاسـ ـت").replaceAll("سيستم", "سيـ ـستم").replaceAll("ميديا", "ميديـ ـا").replaceAll("خدمات", "خدمـ ـات").replaceAll("سوشيال", "شوشـ ـيال").replaceAll("توكن", "تـ ـوكن")
        let embed = new MessageEmbed()
            .setColor(color)

        let attach = message.attachments.first();

        if (attach) {
            embed.setImage(attach.proxyURL)
        }
        anchannel.send(`**> __${test}__
<a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021>

> • <a:right:1192067903453933639> __𝐎𝐰𝐧𝐞𝐫 𝐎𝐟𝐟𝐞𝐫__ : <@${message.author.id}> <a:red_blinking:1202748637990354954>  

> •  <a:right:1192067903453933639> __𝐎𝐫𝐝𝐞𝐫 𝐓𝐢𝐜𝐤𝐞𝐭__ : <#1206354259575054378>   <a:red_blinking:1202748637990354954>  

> • <a:right:1192067903453933639> __𝐎𝐟𝐟𝐞𝐫 𝐌𝐞𝐧𝐭𝐢𝐨𝐧__  : <@&1179867908772466729>   <a:red_blinking:1202748637990354954>**`).then(mes => setTimeout(() => {
            mes.delete()
        }, 43200000))

        message.reply("**<:VmpS:1219366892045733919> | 𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐘𝐨𝐮𝐫 𝐎𝐟𝐟𝐞𝐫 <a:red_blinking:1202748637990354954>**")
        anchannel.send({ embeds: [embed] }).then(pho => setTimeout(() => {
            pho.delete()
        }, 43200000))
        anchannel.send(lineof).then(lin => setTimeout(() => {
            lin.delete()
        }, 43200000))

    }
})

// { +Clear } //

client.on("messageCreate", async message => {
    if (message.content.startsWith(prefix + 'clear')
    ) {
        const args = message.content.split(' ')
        let amount = Number(args[1]) || 100

        const permission = message.member.permissions.has("MANAGE_MESSAGES");
        const me = message.guild.me.permissions.has("MANAGE_MESSAGES");
        if (!permission) return message.reply(":x: **You don't have permission to use this command**")
        if (!me) return message.reply("**:rolling_eyes: - I couldn't clear this channel. Please check my permissions.**")

        args[1] = args[1] ? parseInt(args[1]) : 100;
        if (isNaN(args[1])) return message.reply({ content: `🙄 **Please provide valid number**` }).catch((err) => {
            console.log(err.message)
        });

        if (amount > 100) return message.reply(":rolling_eyes: **You can't delete more than __100__ messages**`").cache((err) => {
            console.log(err.message)
        });

        if (amount < 1) return message.reply(':rolling_eyes: **You need to delete at least __1__ messages**').catch((err) => {
            console.log(err.message)
        });

        message.delete().catch((err) => {
            console.log(err.message)
        });

        let messages = await message.channel.messages.fetch({ limit: amount });
        messages = messages.filter(m => Date.now() - (new Date(m.createdTimestamp)).getTime() <= (14 * 24 * 60 * 60000));

        message.channel.bulkDelete(messages).then(() => {
            message.channel.send({
                content: `\`\`\`js
  ${messages.size} messages have been deleted.\`\`\``
            }).then((msg) => {
                setTimeout(() => {
                    msg.delete().catch((err) => {
                        console.log(err.message)
                    })
                }, 5000);
            }).catch((err) => {
                console.log(err.message)
            })
        }).catch(err => console.log(err.message));
    }
});






// { +Wt } //

client.on('messageCreate', message => {
    if (message.content === `${prefix}wt`) {
        message.reply(`**نشكرك علي ملئ الاستماره برجاء انتظار طاقم العمل لدئ سترنجر . برجاء انتظار الرد من طاقم الاداره لتكمله التقديم معك . نشكرك علي الانتظار <a:T_ABS:1088853943980921035>**

> <@&1220102625631014984>
> 
> <@&1220102626952351896>`)
    }
})

// { +At } //
client.on('messageCreate', message => {
    if (message.content === `${prefix}at`) {
        message.reply(`**مرحبأ بك في تذكره التقديم علي طاقم سترنجر ، برجاء ملئ الاستماره**
**-سـ1 : الاسم ثلاثي .**
**-سـ2 : السن .**
**-سـ3 : رقم الهاتف .**
**-سـ4 : رقم الكاش التجاري للعمل . **
**-سـ5 : العنوان موضحها اسم المحافظه .**
**-سـ6 : السيرفرات الذي عملت فيها من قبل ؟ .**
**-سـ7 : يرجي ارسال 25 دليل إيجابي علي التعامل . **

**يرجئ العلم أن هناك رسوم ( ضمان ) يتم دفعه عند القبول و قدره : 300k أو 30چ**`)
    }
})

// { $close } //

client.on("messageCreate", EgyptTeam => {
    if (EgyptTeam.content === `$close`) {

        EgyptTeam.channel.send(`$transcript`)
    }
})
// { $delete } //

client.on("messageCreate", EgyptTeam => {
    if (EgyptTeam.content === `$delete`) {

        EgyptTeam.channel.send(`$transcript`)
    }
})
// { تاج } //

client.on('messageCreate', message => {
    if (message.content.startsWith('تاج')) {
        return message.reply(`Medo |`)
    }
});

// { لوجو } //

/*client.on('messageCreate', message => {
  if (message.content.startsWith('لوجو')) {
    return message.reply(`https://cdn.discordapp.com/attachments/1211388872781602927/1213135498516627497/92c6e51a7eb6f746.png?ex=65f45f79&is=65e1ea79&hm=65ff59341442273c6e74a4ba3b364366885f382e58341eb16ca93439e93d65e8&`)
  }
});*/

// { Are you sure you would like to close this ticket? } //

client.on("messageCreate", EgyptTeam => {
    if (EgyptTeam.content === `Are you sure you would like to close this ticket?`) {

        EgyptTeam.channel.send(`$transcript`)
    }
})
// { logo } //

/*client.on('messageCreate', message => {
  if (message.content.startsWith('logo')) {
    return message.reply(`https://cdn.discordapp.com/attachments/1219358058241855518/1219358395413434388/SPOILER_1688387921102.png?ex=660b0300&is=65f88e00&hm=cc0029add6915bb3dd68df31fb7830ef398623771559a4126cd740ce50cdefc8&`)
  }
});*/

// { Auto Line } //

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    let auto = ["1220103054716698705", "1220102987893051563", "1220102970939674744"]
    if (auto.includes(message.channel.id)) {
        message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setColor(color)
                    .setImage(line)
            ]
        })
    }
})

// { rc } //

client.on('messageCreate', message => {
    if (message.content === `+Rc` || (message.content === `rc`) || (message.content === `Rc`)) {
        message.reply(`> **يرجي العلم ان هذه الرولات مغلقه**

> **- N Gift **
> **- N Turkey **
> **- Crypto **
> **- Lira Tr**`)
    }
});

// { mention bot } //
client.on('messageCreate', message => {
    if (message.content === `<@1216425270832271412>`)
        message.channel.send(`>  <a:UltraS:1234900763151695985> Hi <@${message.author.id}> <a:emoji_51:1220720263755333633>
> 
> <a:UltraS:1234900763151695985> My User :   <@1216425270832271412> <:emoji_14:1220720301629771859>
> 
> <a:UltraS:1234900763151695985> I Support Prefix : ${prefix} <a:safe:1121215765484413019>
> 
> <a:UltraS:1234900763151695985> Have A Nice Time With Me <a:yemoji_7:1220705131373400147>`)

});


// { info } //
client.on('messageCreate', message => {
    if (message.content === `+info`) {
        message.delete();
        message.channel.send(`**Welcome In __${message.guild.name}__

Link The Server : https://discord.gg/smsxSDd4**
> **For Order : <#${order}> **
> **For Support : <#${support}> **
> **For Apply : <#${applyteam}> **
**Enjoy Bro <a:tlwHeartsBlack:1239108545912504390>**`)
        message.channel.send({
            embeds: [new MessageEmbed()
                .setColor(color)
                .setImage(line)]
        });
    }
})
client.on("messageCreate", voxm => {
    if (voxm.content.toLowerCase === "ticket closed by" && voxm.author.id === "557628352828014614") {
        voxm.channel.send({ content: "$transcript" })
        voxm.channel.send({ content: "$delete" })
    }
})


client.on("messageCreate", Voxm => {
    if (Voxm.author.bot) return;
    if (Voxm.content === `+delete-tickets`) {
        if (!Voxm.member.permissions.has(`ADMINISTRATOR`)) return Voxm.reply(`**❌ | You Dont Have Permissions To Do That .**`);

        let VDeleted = 0;
        let hasDeleted = false;

        Voxm.guild.channels.cache.forEach(channel => {
            if (channel.type === 'GUILD_TEXT' && channel.parentId === DeleteCatagory) {
                let name = channel.name.toLowerCase();
                if (name.startsWith("by-") || name.startsWith("need-") || name.startsWith("have-") || name.startsWith("closed")) {
                    channel.delete()
                        .then(() => {
                            console.log(`Deleted channel: ${channel.name}`);
                            VDeleted++;
                            hasDeleted = true;
                        })
                        .catch(error => {
                            console.error(`Error deleting channel: ${channel.name}\n${error}`);
                        });
                }
            }
        });

        setTimeout(() => {
            if (hasDeleted) {
                Voxm.reply(`**Done Deleted ${VDeleted} Ticket(s).**`);
            } else {
                Voxm.reply("**No Tickets To Delete Were Found .**");
            }
        }, 2000);
    }
});

// // تحديد وقت تنفيذ الدالة كل 10 ثواني (10000 مللي ثانية)
// const interval = setInterval(autoKill, 10000);

// // دالة لتنفيذ الإجراء المطلوب (مثال)
// function autoKill() {
//   // الكود الخاص بالعملية التي تريد القيام بها كل 10 ثواني
//   console.log('Auto-kill every 10 seconds');
// }

// // لإيقاف تنفيذ الدالة المحددة في الوقت المناسب
// // clearInterval(interval);




// function restart() {
//   console.log('Restarting the application...');

// }

// setInterval(restart, 60 * 1000); 

////var



////Var Points Log


const feedbackroom = "1220103061264138433"
const offersroom = "1220103054716698705"
const logroom = "1230246799860830288"
const logroom1 = "1230247108213473280"
const logroom2 = "1230247176509063229"
const logroom3 = "1230247224449957990"
const logroom4 = "1230247396580261919"
const logroom5 = "1230247470072729690"
const teamrole = "1220102639136673864"
const teamrole1 = "1220102639136673864"
const teamrole2 = "1220102639136673864"
const teamrole3 = "1220102639136673864"
const teamrole4 = "1234790618027397151"
const teamrole5 = "1234790660662497340"




client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id != offersroom) return;
    if (!message.member.roles.cache.has(teamrole)) return;
    let pointSs = db.get(`fawpoints_${message.author.id}`)
    if (pointSs == null) {
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: 0
        })
    }
    let points = db.get(`fawpoints_${message.author.id}`)
    let poi = points.count
    let po = Math.floor((poi * 1) + (5 * 1))
    await db.set(`fawpoints_${message.author.id}`, {
        userId: message.author.id,
        count: po
    })
    db.add(`fawoffers_${message.author.id}`, 1)
    message.guild.channels.cache.get(logroom).send({
        embeds: [
            new MessageEmbed()
                .setColor(co)
                .setTitle("New Notification")
                .setDescription(`
> New Offers Point Gived To : ${message.author}`)
        ]
    })
})
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.member.roles.cache.has(teamrole)) return;
    if (message.content === "اتفضل") {
        if (!message.channel.name.startsWith("ticket")) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (3 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })

        message.guild.channels.cache.get(logroom1).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
> New to reply  Ticket Point Gived To : ${message.author}`)
            ]
        })
    }
})

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id != feedbackroom) return;
    let role = message.guild.roles.cache.get("1177916521742336112")
    message.member.roles.add(role)
    let user = message.mentions.members.first();
    if (message.author.id == user.id) return;
    let pointSs = db.get(`fawpoints_${user.id}`)
    if (pointSs == null) {
        await db.set(`fawpoints_${user.id}`, {
            userId: user.id,
            count: 0
        })
    }
    let points = db.get(`fawpoints_${user.id}`)
    let poi = points.count
    let po = Math.floor((poi * 1) + (7 * 1))
    await db.set(`fawpoints_${user.id}`, {
        userId: user.id,
        count: po
    })
    db.add(`fawfeedback_${user.id}`, 1)
    message.guild.channels.cache.get(logroom2).send({
        embeds: [
            new MessageEmbed()
                .setColor(co)
                .setTitle("New Notification")
                .setDescription(`
> New  Feedback Gived To : ${user}

> By Client : ${message.author}`)
        ]
    })
})



//// $close || ticket/by/need

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === "$close") {
        if (!message.channel.name.startsWith("ticket")) return;
        if (!message.member.roles.cache.has(teamrole1)) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (3 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })
        db.add(`fawclose_${message.author.id}`, 1)
        message.guild.channels.cache.get(logroom3).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
> New Close Point Gived To : ${message.author}`)
            ]
        })
    }
})

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === "$close") {
        if (!message.channel.name.startsWith("need")) return;
        if (!message.member.roles.cache.has(teamrole1)) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (3 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })
        db.add(`fawclose_${message.author.id}`, 1)
        message.guild.channels.cache.get(logroom3).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
> New Close Point Gived To : ${message.author}`)
            ]
        })
    }
})
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === "$close") {
        if (!message.channel.name.startsWith("by")) return;
        if (!message.member.roles.cache.has(teamrole1)) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (3 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })
        db.add(`fawclose_${message.author.id}`, 1)
        message.guild.channels.cache.get(logroom3).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
> New Close Point Gived To : ${message.author}`)
            ]
        })
    }
})
////apply test 
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === "Dn") {
        if (!message.channel.name.startsWith("ticket")) return;
        if (!message.member.roles.cache.has(teamrole2)) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (5 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })
        db.add(`fawapply_${message.author.id}`, 1)
        message.guild.channels.cache.get(logroom4).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
> New Dn Apply Point Gived To : ${message.author}`)
            ]
        })
    }
})


client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === "Dnn") {
        if (!message.channel.name.startsWith("need")) return;
        if (!message.member.roles.cache.has(teamrole2)) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (5 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })
        db.add(`fawclose_${message.author.id}`, 1)
        message.guild.channels.cache.get(logroom3).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
> New Close Point Gived To : ${message.author}`)
            ]
        })
    }
})
////apply test 
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === "Dn") {
        if (!message.channel.name.startsWith("ticket")) return;
        if (!message.member.roles.cache.has(teamrole2)) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (5 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })
        db.add(`fawapply_${message.author.id}`, 1)
        message.guild.channels.cache.get(logroom4).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
> New Dn Apply Point Gived To : ${message.author}`)
            ]
        })
    }
})


client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === "Dnn") {
        if (!message.channel.name.startsWith("need")) return;
        if (!message.member.roles.cache.has(teamrole2)) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (5 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })
        db.add(`fawapply_${message.author.id}`, 1)
        message.guild.channels.cache.get(logroom4).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
>New Dn Apply Point Gived To : ${message.author}`)
            ]
        })
    }
})

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === "Dnn") {
        if (!message.channel.name.startsWith("by")) return;
        if (!message.member.roles.cache.has(teamrole2)) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (5 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })
        db.add(`fawapply_${message.author.id}`, 1)
        message.guild.channels.cache.get(logroom4).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
> New Dn Apply Point Gived To : ${message.author}`)
            ]
        })
    }
})

client.on('messageCreate', async (message) => {
    if (message.content === "Dnn") {
        if (!message.channel.name.startsWith("ticket")) return;
        message.channel.send(`$close`)
    }
})

///warns 

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.includes('𝖬𝖾𝗇𝗍𝗂𝗈𝗇')) {
        if (!message.channel.name.startsWith("〢・𝐒𝐭𝐚𝐟𝐟・𝐖𝐚𝐫𝐧𝐬")) return;
        if (!message.member.roles.cache.has(teamrole3)) return;
        let pointSs = db.get(`fawpoints_${message.author.id}`)
        if (pointSs == null) {
            await db.set(`fawpoints_${message.author.id}`, {
                userId: message.author.id,
                count: 0
            })
        }
        let points = db.get(`fawpoints_${message.author.id}`)
        let poi = points.count
        let po = Math.floor((poi * 1) + (4 * 1))
        await db.set(`fawpoints_${message.author.id}`, {
            userId: message.author.id,
            count: po
        })
        db.add(`fawwarn_${message.author.id}`, 1)
        message.guild.channels.cache.get(logroom5).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("New Notification")
                    .setDescription(`
> New Warn Point Gived To : ${message.author}`)
            ]
        })
    }
})


///points 
client.on('messageCreate', async (message) => {
    if (message.content === prefix + "top") {
        let pointsArr = [];
        message.guild.members.cache.forEach(member => {
            let points = db.get(`fawpoints_${member.id}`);
            if (points != null) {
                pointsArr.push({ id: member.id, points: points.count });
            }
        });

        // ترتيب الأعضاء بناءً على النقاط
        pointsArr.sort((a, b) => b.points - a.points);

        // جلب أول 10 أعضاء
        let topTen = pointsArr.slice(0, 15);

        // جلب أسماء الأعضاء وإضافة النقاط لرسالة واحدة
        let topTenMessage = "";
        topTen.forEach((member, index) => {
            let name = message.guild.members.cache.get(member.id).displayName;
            topTenMessage += `${index + 1}・__${name}__ <a:bluecrown:1224817209831063552> ~~${member.points}~~\n`;
        });

        message.reply(`𝐓𝐡𝐢𝐬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐄𝐱𝐩𝐥𝐚𝐢𝐧 𝐓𝐡𝐞 𝐅𝐫𝐢𝐬𝐭 𝟏𝟎 𝐓𝐞𝐚𝐦 𝐈𝐧 𝐓𝐨𝐩 𝐏𝐨𝐢𝐧𝐭 <a:emoji_51:1220720263755333633> \n${topTenMessage}

${message.guild.name} 𝐒𝐭𝐨𝐫𝐞 𝐎𝐧 𝐓𝐨𝐩`)
        embeds: [new MessageEmbed()
                .setColor(color)
                .setImage(line)]
        
    } else if (message.content === prefix + "rank928262") {
        let userPoints = db.get(`fawpoints_${message.author.id}`);
        if (userPoints == null) {
            message.channel.send("You have no points yet!");
        } else {
            message.channel.send(`Your points: ${userPoints.count}`);
        }
    }
})
//{اتفضل}//
/*client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.content === "اتفضل") {
  if(!message.channel.name.startsWith("ticket")) return;
    if(!message.member.roles.cache.has(teamrole2)) return;
  let wl = db.get(`fawwl_${message.author.id}`)
  if( wl == null) {
      await db.set(`fawwl_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let wlcome = db.get(`fawwl_${message.author.id}`)
  let lcome = lcome.count
  let lcome = Math.floor((poi * 1) + (5 * 1))
  await db.set(`fawwl_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`fawwl_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom4).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
>New Dn Apply Point Gived To : ${message.author}`)
  ]})
    } 
}) */


client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const args = message.content.split(' ');
    if (args[0] === prefix + "addpoint") {
        const owner = ["907970815524491285", "530042420608630825", "530042420608630825"]
        if (!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Ship**`);

        const user = message.mentions.members.first();
        if (!user) return message.reply("**Please mention a valid user**");

        const pointsToAdd = parseInt(args[2]);
        if (isNaN(pointsToAdd)) return message.reply("**Please provide a valid number**");

        const userPoints = await db.fetch(`fawpointsss_${user.id}`);
        db.add(`fawpointsss_${user.id}`, pointsToAdd);

        message.reply(`**Added ${pointsToAdd} points to ${user.displayName}**`);
    }

    if (args[0] === prefix + "removepoint") {
        const owner = ["907970815524491285", "530042420608630825", "530042420608630825"]
        if (!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Ship**`);
        const user = message.mentions.members.first();
        if (!user) return message.reply("**Please mention a valid user**");

        const pointsToRemove = parseInt(args[2]);
        if (isNaN(pointsToRemove)) return message.reply("**Please provide a valid number**");

        const userPoints = await db.fetch(`fawpointsss_${user.id}`);
        if (!userPoints || userPoints < pointsToRemove) return message.reply("**This user doesn't have enough points**");

        db.subtract(`fawpointsss_${user.id}`, pointsToRemove);

        message.reply(`**Removed ${pointsToRemove} points from ${user.displayName}**`);
    }



    if (message.content === prefix + "points") {
        if (!message.member.roles.cache.has(teamrole)) return message.reply("**This Command For Only Seller**")
        let pointss = db.get(`fawpoints_${message.author.id}`)
        if (pointss == null) {
            return message.reply(`𝐇𝐞𝐲 <@${message.member.id}> 

      𝐘𝐨𝐮 𝐃𝐨𝐧'𝐭 𝐇𝐚𝐯𝐞 𝐄𝐧𝐨𝐮𝐠𝐡 𝐏𝐨𝐢𝐧𝐭𝐬 ${message.guild.name}

     𝐏𝐥𝐬 𝐒𝐡𝐨𝐰 𝐓𝐡𝐢𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐓𝐨 𝐊𝐧𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐆𝐞𝐭 𝐏𝐨𝐢𝐧𝐭𝐬 <#1234606286994149417>`);
        }

        let points = pointss.count;
        let fb = db.get(`fawfeedback_${message.author.id}`)
        if (fb == null) fb = 0

        let close = db.get(`fawclose_${message.author.id}`)
        if (close == null) close = 0

        let apply = db.get(`fawapply_${message.author.id}`)
        if (apply == null) apply = 0

        let warn = db.get(`fawwarn_${message.author.id}`)
        if (warn == null) warn = 0

        let offers = db.get(`fawoffers_${message.author.id}`)
        if (offers == null) offers = 0

        let pointsss = db.get(`fawpointsss_${message.author.id}`)
        if (pointsss == null) pointsss = 0
        let wl = db.get(`fawwl_${message.author.id}`)
        if (wl == null) wl = 0

        message.reply(`𝐇𝐞𝐥𝐥𝐨 𝐒𝐞𝐥𝐥𝐞𝐫 𝐎𝐫 𝐒𝐭𝐚𝐟𝐟 𝐈𝐧 ${message.guild.name} <a:bluecrown:1224817209831063552>

𝐓𝐡𝐞𝐬𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 𝐁𝐞𝐥𝐨𝐧𝐠 𝐓𝐨 ${message.member.displayName} <a:emoji_51:1220720263755333633>

 » 𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 + 𝐀𝐝𝐝𝐞𝐝 𝐏𝐨𝐢𝐧𝐭𝐬 : ${points + pointsss} 

» 𝐂𝐥𝐨𝐬𝐞 𝐏𝐨𝐢𝐧𝐭𝐬  : ${close}

» 𝐎𝐟𝐟𝐞𝐫 𝐏𝐨𝐢𝐧𝐭𝐬 : ${offers}

» 𝐅𝐞𝐞𝐝𝐁𝐚𝐜𝐤 𝐏𝐨𝐢𝐧𝐭𝐬 : ${fb}

» 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${wl} `)
    }
})



client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const args = message.content.split(' ');
    if (args[0] === prefix + "apoints") {
        const owner = ["907970815524491285", "530042420608630825", "530042420608630825"]
        if (!owner.includes(message.author.id)) return message.reply(`**This Command Only ~~UserEnd~~ Hoby<:Galaxy_23:1099833208146763779>**`);
        if (args.length !== 3 || !message.mentions.users.first()) return message.reply("**Pls Mention And Write Count Point**");

        let targetUser = message.mentions.users.first();
        let pointsToAdd = parseInt(args[2]);

        let pointSs = db.get(`fawpoints_${targetUser.id}`);
        if (pointSs == null) {
            await db.set(`fawpoints_${targetUser.id}`, {
                userId: targetUser.id,
                count: 0
            });
        }

        let points = db.get(`fawpoints_${targetUser.id}`);
        let currentPoints = points.count;
        let newPoints = currentPoints + pointsToAdd;

        await db.set(`fawpoints_${targetUser.id}`, {
            userId: targetUser.id,
            count: newPoints
        });

        db.add(`fawoffers_${targetUser.id}`, 1);
        message.guild.channels.cache.get(logroom).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("Add Points")
                    .setDescription(`> Done Added Point To ${targetUser}`)
            ]
        });
        message.reply(`**Done Added ${pointsToAdd} To ${targetUser}**`)
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const args = message.content.split(' ');
    if (args[0] === prefix + "rpoints") { // تغيير اسم الأمر من "apoints" إلى "rpoints"
        const owner = ["907970815524491285", "530042420608630825", "530042420608630825"]
        if (!owner.includes(message.author.id)) return message.reply(`**This Command Only ~~UserEnd~~ Hoby<:Galaxy_23:1099833208146763779>**`);
        if (args.length !== 3 || !message.mentions.users.first()) return message.reply("**Pls Mention And Write Count Point**");

        let targetUser = message.mentions.users.first();
        let pointsToRemove = parseInt(args[2]); // تغيير الاسم من "pointsToAdd" إلى "pointsToRemove"

        let pointSs = db.get(`fawpoints_${targetUser.id}`);
        if (pointSs == null) {
            await db.set(`fawpoints_${targetUser.id}`, {
                userId: targetUser.id,
                count: 0
            });
        }

        let points = db.get(`fawpoints_${targetUser.id}`);
        let currentPoints = points.count;
        let newPoints = currentPoints - pointsToRemove; // تغيير العملية الحسابية من الجمع إلى الطرح

        await db.set(`fawpoints_${targetUser.id}`, {
            userId: targetUser.id,
            count: newPoints
        });

        db.add(`fawoffers_${targetUser.id}`, 1);

        message.guild.channels.cache.get(logroom).send({
            embeds: [
                new MessageEmbed()
                    .setColor(co)
                    .setTitle("Remove Points") // تغيير عنوان الرسالة
                    .setDescription(`> Done Removed ${pointsToRemove} Point(s) From ${targetUser}`) // تغيير النص في الرسالة
            ]
        });
        message.reply(`**Done Removed ${pointsToRemove} From ${targetUser}**`) // تغيير النص في الرد
}
});
client.login("MTIzOTEyMzYxNTkwODIzNzM1Mg.G-R-D-.FlpQrJI_fyFnNCWQG2DEs36rxFKkPLUP_1EUJI")
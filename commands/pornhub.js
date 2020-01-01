const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)

    if (talkedRecently.has(message.author.id)) {
        message.reply(`You need to wait ${config.cooldown} minutes to use this command again!`).then(m => {
            setTimeout(() => {
                m.delete(m)
            }, 5000); //5 seconds
        })
    } else {
        fs.readFile('./pornhub.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .addField("pornhub  Alt", `Here is your MalwareBytes Alt: \n${random}`)
            .addField("url u want")
            .setThumbnail("https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/03/03056870ee7a7f56d9dc9ef76257baafb220b5f2_full.jpg")
            .setColor(hex)
            message.author.send(embed)

            message.reply("Sent you pornhub  Alt!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, config.cooldown * 60 *1000);

        })
    }
}
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
        fs.readFile('./crunchyroll.js.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .addField("Crunchyroll  Alt", `Here is your MalwareBytes Alt: \n${random}`)
            .addField("url u want")
            .setThumbnail("https://store-images.s-microsoft.com/image/apps.45658.9007199266244356.8c8f8b98-231f-43f4-b251-7e5c4931b8a2.8e8b7fcb-c1a1-447b-9e3e-e193d52e541d?mode=scale&q=90&h=300&w=200")
            .setColor(hex)
            message.author.send(embed)

            message.reply("Sent you Crunchyroll  Alt!").then(m => {
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
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
            }, 1000); //5 seconds
        })
    } else {
        fs.readFile('./gift.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .addField("maybe you lucky", `Here is your gift Alt: \n${random}`)
            .addField("url u want")
            .setThumbnail("https://imgur.com/OGQwUyd.png")
            .setColor(hex)
            message.author.send(embed)

            message.reply("lets see if you lucky").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 1000); //5 seconds
            })

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, config.cooldown * 60 *1000);

        })
    }
}
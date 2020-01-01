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
        fs.readFile('./origin.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .addField("Please Fill Out - https://forms.gle/uhXyieLVYbikQz369", `Here is your Origin Alt: \n${random}`)
            .addField("Earn 5 Invites to Gain Access to a faster Cooldown and Giveaways!")
            .setThumbnail("https://www.bing.com/th/id/OIP.qzsj9KZIQJm4374lMFmZAwHaC0?w=300&h=114&c=7&o=5&pid=1.7.png")
            .setColor(hex)
            .addField("https://forms.gle/uhXyieLVYbikQz369")

            message.reply("Sent you Origin Alt!").then(m => {
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
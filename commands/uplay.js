const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)

    if (talkedRecently.has(message.author.id)) {
        message.reply(`You need to wait ${config.cooldown} minutes to use this command again!`).then(m => {
        })
    } else {
        fs.readFile('./uplay.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .addField("Fill Out - https://forms.gle/uhXyieLVYbikQz369", `Here is your uplay Alt: \n${random}`)
            .addField("Earn 5 Invites to Gain Access to a faster Cooldown and Giveaways!")
            .setThumbnail("https://cdn.windowsreport.com/wp-content/uploads/2017/09/Cover.png")
            .setColor(hex)
            message.author.send(embed)

            message.reply("Sent you uPlay Alt!")
            })

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, config.cooldown * 60 *1000);

        })
    }
}

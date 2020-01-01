const Discord = require("discord.js")

exports.run = (client, message, args) => {
    const embedStats = new Discord.RichEmbed()
      .setTitle("Click to invite the bot")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=597157570410446859&scope=bot&permissions=8")
      .setColor("RANDOM")
    message.channel.send(embedStats);
};
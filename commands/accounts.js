const Discord = require("discord.js")

exports.run = (client, message, args) => {
    const embedStats = new Discord.RichEmbed()
      .setTitle("**Help** | Click to see website")
      .setFooter
      .setColor("RANDOM")
      .setDescription('**\n\n  |!fortnite|!mbytes|!minecraft|!minecraft|!origin|!spotify|!nordvpn\n\n**');
    message.channel.send(embedStats);
};
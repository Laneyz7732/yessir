const Discord = require("discord.js")

exports.run = (client, message, args) => {
    const embedStats = new Discord.RichEmbed()
      .setTitle("**Help**")
      .setFooter("Why u need help command")
      .setURL("No")
      .setColor("RED")
      .setDescription('**\n\n dmall , ban , kick , serverinfo');
    message.channel.send(embedStats);
};

const Discord = require("discord.js")

exports.run = (client, message, args) => {
    const embedStats = new Discord.RichEmbed()
      .setTitle("**Help**")
      .setFooter("Earn 5 invites to gain access to **Giveaways** and a 2 hour cooldown!")
      .setURL("")
      .setColor("RED")
      .setDescription('**\n\n  |!origin - Generates an Origin Account|!uplay - Generates a uPlay Account|!help - This Command|\n\n**    |!ban|!kick|!serverinfo');
    message.channel.send(embedStats);
};
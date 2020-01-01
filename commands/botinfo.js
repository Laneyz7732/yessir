const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let clientembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username)
    .addField("Created On", client.user.createdAt)
    .addField("[members]", client.users.size)
    .addField("[servers]", client.guilds.size);

    message.channel.send(clientembed);
}

module.exports.help = {
  name:"botinfo"
}

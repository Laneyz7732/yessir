const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = "612772199509786638";
 
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("please do this in a ticket channel.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hi, " + message.channel.name)
        .setDescription("Your ticket is marked as ** complete **. If you want to make a new one, do! Ticket")
        .setFooter("ticket closed");
 
    var logChannel = message.guild.channels.find("name", "log");
    if (!logChannel) return message.channel.send("channel does not exist");
 
    logChannel.send(embedCloseTicket);
 
}
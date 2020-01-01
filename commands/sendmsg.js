const commando = require('discord.js-commando');
const app = require('../server.js');
const config = require("../config.json")
const Discord = require('discord.js');

exports.run = (client, message, args) => {
client.on('message', (message) => {
    if (message.content === "!sendmsg") {
        const guildList = client.guilds.array();
        
        guildList.forEach(guild => {
            try {
                guild.defaultChannel.send("messageToSend");
            } catch (err) {
                console.log("Could not send message to " + guild.name);
            }
        });
    }
});
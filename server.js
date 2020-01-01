// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

const commando = require("discord.js-commando")
const Util = require('discord.js');
const Discord = require("discord.js")
const leeks = require('leeks.js');
const log = require('leekslazylogger');
const colors = require('colors');
const readline = require('readline');
const fs = require("fs")
const client = new Discord.Client()
const config = require("./config.json")
//put channel id 
let options = {
    total: "611642985108602915",
    users: "611628779466522645",
    bots: "611643075986456592"
}; //Options for bot to work
var ownerId = '580477436219883521'; //ahh id


client.on('ready', () => {("v." + config.version +" || "+ config.status)})
  client.on("ready", function() {
	console.log('```````````````````````````````````````````````````````'.red + ``)
    console.log('[INFO]'.magenta + ` ~Made by Mrscary`)
    console.log('[INFO]'.green + ` Logged in as ${client.user.username}`)
    console.log('[INFO]'.green + " ID: " + `${client.user.id}`)
    console.log('[INFO]'.green + " Status: " + config.status)
    console.log('[INFO]'.green + " Version: " + config.version)
    console.log('[INFO]'.green + " Servers: " + client.guilds.size)
    console.log('[INFO]'.green + " Members: " + client.users.size)
	console.log('```````````````````````````````````````````````````````'.red + ``)
});

client.on('guildMemberAdd', member => {
	member.send('here')//here put msg you want,when user joinn is send it
	console.log("send " + member);
})

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(channel => channel.name =="general");
  if(!channel)return; 
  
  channel.send('Welcome! our server, ')
  
});
////////////////////////////////////////
//is for welcome is single server so when user join is give role:0
///////////////////

  //client.on('guildMemberAdd', member => {
  //var role = member.guild.roles.find("name", "name of   your role");
  //member.addRole(role);
//})

//client.on('guildMemberRemove', member => {          
          
//})

client.on("guildMemberAdd", (member) => {
        //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's
        try {
            member.guild.channels.get(options.total).setName(`Total Members: ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
            member.guild.channels.get(options.users).setName(`Users: ${member.guild.members.filter((m) => !m.user.bot).size}`); // This text is also changeable, still keep the code in ${}
            member.guild.channels.get(options.bots).setName(`Bots: ${member.guild.members.filter((m) => m.user.bot).size}`); // This text is also changeable, still keep the code in ${}
        
        }
        catch (e) {
        }
  });
client.on("guildMemberRemove", (member) => {
        //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's
        try {
            member.guild.channels.get(options.total).setName(`Total Members: ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
            member.guild.channels.get(options.users).setName(`Users: ${member.guild.members.filter((m) => !m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
            member.guild.channels.get(options.bots).setName(`Bots: ${member.members.filter((m) => m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
        
        }
        catch (e) {
        }
});

//this pro
//need fix it have fun but is work :0
client.on('message', async message => {
	if (message.content === '!verify') {
		const reactmessage = await message.channel.send('React with ✅ to get your role!');
		await reactmessage.react('✅');

		const filter = (reaction, user) => reaction.emoji.name === '✅' && !user.bot;
		const collector = reactmessage.createReactionCollector(filter, { time: 15000 });

		collector.on('collect', async reaction => {
			const user = reaction.users.last();
			const guild = reaction.message.guild;
			const member = guild.member(user) || await guild.fetchMember(user);
			member.addRole(config.roleid);
		});
	}
});
//not work is was need send msg to any server bot in:/
//client.on('message', message => {
    //if (message.content === '!sendmsg')
  //      client.guilds.array().forEach(guild => guild.defaultChannel.send('messageToSend').catch(err => console.log('Could not send message to ' + guild.name)));
//});


//``````````````
client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
      
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.login(config.token)
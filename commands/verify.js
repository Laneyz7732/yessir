const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');
  
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
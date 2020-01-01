exports.run = (client, message, args, ops) => {

    if (!message.member.voiceChannel) return message.channel.send('1');

    if (!message.member.voiceChannel) return message.channel.send('2');

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('3');

    message.guild.me.voiceChannel.leave();

    message.channel.send('leaving channel')

}
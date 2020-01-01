const ytdl = require('ytdl-core');

exports.run = async (bot, message, args) => {

  if(!message.member.voiceChannel)return message.chnanel.send('pls join a voice chanel');
  
  if (message.guild.me.voiceChannel)return message.channel.send('sry, the bot alredy on i guild');
  
  if(!args[0])return message.channel.send('sry pls input a url following the commands');
  
  let validate = await ytdl.validateURL(args[0]);
  if(!validate) return message.channel.send('sy pls input **valid** url following the commands.');
  
   let voiceConnection = message.member.voiceChannel.join()
        .then(voiceConnection => {
        const stream = ytdl(args[0], { filter : 'audioonly' });
        const streamDispatcher = voiceConnection.playStream(stream, streamOptions);
        })
        .catch(console.error);

  const streamOptions = { seek: 0, volume: 1 }; 

}
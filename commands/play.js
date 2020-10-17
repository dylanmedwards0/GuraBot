const Discord = require("discord.js");

module.exports = {
name:"play",
args: true,
usage: "<Youtube link>",
description:"Plays music",



 async execute(message, args){
  if(message.member.voice.channel){
   const connection = await message.member.voice.channel.join();
    const dispatcher = await connection.play(ytdl(`${args}`, { quality: 'highestaudio' }));
    dispatcher.on('start', () => {
         message.channel.send(`${args} is now playing`);
    });
    dispatcher.on('finish', () =>{
        message.channel.send(`${args} has finished playing`);
         dispatcher.destroy();
    });
     dispatcher.on(`error`, console.error);
    }
    }
  }
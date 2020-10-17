const Discord = require("discord.js");

module.exports = {
name:"play",
args: true,
usage: "<Youtube link>",
description:"Plays music",



 async execute(message, args){
  if(message.member.voice.channel){
   const connection = await message.member.voice.channel.join();
    connection();
    const dispatcher = await connection.play(ytdl(`${args}`, { quality: 'highestaudio' }));
    dispatcher.on('start', () => {
        await message.channel.send(`${args} is now playing`);
    });
    dispatcher.on('finish', () =>{
       await message.channel.send(`${args} has finished playing`);
       await  dispatcher.destroy();
    });
    await dispatcher.on(`error`, console.error);
    }
    }
  }
const Discord = require("discord.js");

module.exports = {
name:"play",
args: true,
usage: "<Youtube link>",
description:"Plays music",



 async execute(message, args){
  if(message.member.voice.channel){
   const connection = await message.member.voice.channel.join();
    Discord.VoiceConnection.play(`${args}`, { quality: 'highestaudio' });
    }
    }
  }
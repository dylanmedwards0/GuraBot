const Discord = require("discord.js");
const vc = new Discord.VoiceChannel();


module.exports = {
name:"play",
description:"Plays music",



 execute(message, args){
  if(message.member.voice.channel){
    vc.message.member.voice.channel.join();
    
  }
},
}
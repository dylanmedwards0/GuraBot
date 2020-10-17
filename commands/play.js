const Discord = require("discord.js");

module.exports = {
name:"play",
description:"Plays music",



async execute(message, args){
    message.member.voice.channel.join();




}
};
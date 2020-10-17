const Discord = require("discord.js");

module.exports = {
name:"play",
description:"Plays music",



async execute(message, args){
    const voiceChannel = new Discord.VoiceChannel;
    voiceChannel.join()
    .then(connection => message.send("Gura is here!"))
    .catch(console.error);

    




}
};
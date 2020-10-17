const Discord = require("discord.js");

module.exports = {
name:"play",
description:"Plays music",



async execute(message, args){
    
    Discord.VoiceChannel.join()
    .then(connection => message.send("Gura is here!"))
    .catch(console.error);

    




}
};
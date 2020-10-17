const Discord = require("discord.js");

module.exports = {
name:"play",
description:"Plays music",



async execute(message, args){
    const channel = client.channels.get(message.member.voice.channel);
    if(!channel) return message.channel.send("You're not listening!");
    channel.join()
    .then(connection => {
        message.channel.send("Gura is here!");
    }).catch(e => {

        console.error(e);
    });

},
}
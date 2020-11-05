const Discord = require("discord.js");
module.exports = {
args: true,
usage: "<start>, <join>",
description: "Start or join a blackjack session",

execute(message, args){
//the lobby
var blackjackSession = new Array();


//creating a game
if(blackjackSession[0].includes(undefined) && args[0] === "start"){
    blackjackSession[0] = message.author;
    message.reply("you've made a blackjack lobby!")
} else {  
  message.reply("Wrong Command! Type !join to join a session in play.");
}

//joining a game
if(args[0] === "join" && !blackjackSession[0].includes(undefined)){
    blackjackSession.push(message.author);
    message.reply("you've joined " + blackjackSession[0] + "'s blackjack lobby!");
}




}




}
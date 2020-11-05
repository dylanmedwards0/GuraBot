const Discord = require("discord.js");
let lobbyUp = false;
let userData = JSON.parse(fs.readFileSync("./userData.json", "utf8"));
module.exports = {
args: true,
usage: "<start, join>",
description: "Start or join a blackjack session",
name: "blackjack",
cooldown: 0,
execute(message, args){
//the lobby
var blackjackSession = new Array();


    //creating and joining a game
    if(blackjackSession[0] == undefined && args[0] === "start" && lobbyUp == false){
        if(userData[message.author.id + message.guild.id].money < 50){
            userData[message.author.id + message.guild.id].money += 50;
        }
        blackjackSession[0] = message.author;
        lobbyUp = true;
        message.reply("you've made a blackjack lobby!")
    } else if(args[0] === "join" && blackjackSession[0] != undefined && lobbyUp == true && blackjackSession[0] != message.author){
        if(userData[message.author.id + message.guild.id].money < 50){
            userData[message.author.id + message.guild.id].money += 50;
        }
        blackjackSession.push(message.author);
        message.reply("you've joined " + blackjackSession[0] + "'s blackjack lobby!");
    } else{  
    message.reply("Wrong Command! Type !join to join a session in play.");
    }

}




}
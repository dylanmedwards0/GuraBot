const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
        name: "change",
        args: true,
        usage: "<gura, ame, or korone>",
        description: "Changes icon and nickname of bot.",




    execute(message, args){
    if (args[0] == 'gura'){
     client.user.setAvatar(avatar=`./gura_icon.jpg`);
     message.guild.member(client.user).setNickname(username="GuraBot");
   } else if (args[0] == "korone"){
     client.user.setAvatar(avatar= `./korone_icon.jpg`);
     message.guild.member(client.user).setNickname(username="KoroneBot");
     
   }
     else if (args[0] == "ame"){
       client.user.setAvatar(avatar=`./ame_icon.jpg`);
       //client.user.setUsername(username= 'AmeBot');
       message.guild.member(client.user).setNickname(nickname= 'AmeBot');
 }
}
}
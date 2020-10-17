const Discord = require("discord.js");
const role = new Discord.Role;
const bot = Discord.Client;

module.exports ={
    name: "change",
    args: true,
    usage: '<Gura, Ame, or Korone>',
    description: "Changes GuraBot to another vtuber",
    execute(message, args){
        args = args.shift().toLowerCase();
        if(args === 'gura'){
            role.edit({name: 'GuraBot', color: "#B0E0E6"});
           bot.setUsername("GuraBot");
           bot.setAvatar('./gura_icon.jpg');
        } else if(args === 'ame'){
            role.edit({name: 'AmeBot', color: "FFE4B5"});
            bot.setUsername("AmeBot");
            bot.setAvatar('./ame_icon.jpg');
        } else if(args === 'korone'){
            role.edit({name: 'KoroneBot', color:"#DEB88"});
            bot.setUsername("KoroneBot");
            bot.setAvatar('./korone_icon.jpg');
        }
    }
}
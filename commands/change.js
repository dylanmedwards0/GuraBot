const Discord = require("discord.js");
const role = new Discord.Role;

module.exports ={
    name: "change",
    args: true,
    usage: '<Gura, Ame, or Korone>',
    description: "Changes GuraBot to another vtuber",
    execute(message, args){
        if(args.shift().toLowerCase() === 'gura'){
            role.edit({name: 'AmeBot', color: "#B0E0E6"});
           client.user.setUsername("GuraBot");
           client.setAvatar('./gura_icon.jpg');
        } else if(args.shift().toLowerCase() === 'ame'){
            role.edit({name: 'AmeBot', color: "FFE4B5"});
            client.user.setUsername("AmeBot");
            client.setAvatar('./ame_icon.jpg');
        } else if(args.shift().toLowerCase() === 'korone'){
            role.edit({name: 'AmeBot', color:"#DEB88"});
            client.user.setUsername("KoroneBot");
            client.setAvatar('./korone_icon.jpg');
        }
    }
}
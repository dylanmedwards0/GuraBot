const Discord = require("discord.js");
const role1 = new Discord.ClientUser();

module.exports ={
    name: "change",
    args: true,
    usage: '<Gura, Ame, or Korone>',
    description: "Changes GuraBot to another vtuber",
    execute(message, args){
        if(args.shift().toLowerCase() === 'gura'){
           role1.setColor("#B0E0E6");
           role1.setName("GuraBot");
           role1.setAvatar('./gura_icon.jpg');
        } else if(args.shift().toLowerCase() === 'ame'){

            role1.setColor("FFE4B5");
            role1.setName("AmeBot");
            role1.setAvatar('./ame_icon.jpg');
        } else if(args.shift().toLowerCase() === 'korone'){
            role1.setColor("#DEB88");
            role1.setName("KoroneBot");
            role1.setAvatar('./korone_icon.jpg');
        }
    }
}
const Discord = require("discord.js");
import { user } from "GuraBot.js";
module.exports ={
    name: "change",
    args: true,
    usage: '<Gura, Ame, or Korone>',
    description: "Changes GuraBot to another vtuber",
    execute(message, args){
        if(args.shift().toLowerCase() === 'gura'){
           user.setColor("#B0E0E6");
           user.setName("GuraBot");
           user.setAvatar('./gura_icon.jpg');
        } else if(args.shift().toLowerCase() === 'ame'){

            user.setColor("FFE4B5");
            user.setName("AmeBot");
            user.setAvatar('./ame_icon.jpg');
        } else if(args.shift().toLowerCase() === 'korone'){
            user.setColor("#DEB88");
            user.setName("KoroneBot");
            user.setAvatar('./korone_icon.jpg');
        }
    }
}
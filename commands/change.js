
module.exports = {
        name: "change",
        args: true,
        usage: "<gura, ame, or korone>",
        description: "Changes icon and nickname of bot.",




    execute(message, args){
    const client = message.client;
    var theRole = message.guild.member(client.user).roles.find("name", role);
    if (args[0] == 'gura'){
     theRole.edit({
         color: "#B0E0E6"
     })
     client.user.setAvatar(avatar=`./gura_icon.jpg`);
     message.guild.member(client.user).setNickname(username="GuraBot");
     
   } else if (args[0] == "korone"){
    theRole.edit({
        color: "#DEB887"
    })
     client.user.setAvatar(avatar= `./korone_icon.jpg`);
     message.guild.member(client.user).setNickname(username="KoroneBot");
     
   }
     else if (args[0] == "ame"){
        theRole.edit({
            color: "#FFE4B5"
        })
       client.user.setAvatar(avatar=`./ame_icon.jpg`);
       message.guild.member(client.user).setNickname(nickname= 'AmeBot');
 }
}
}
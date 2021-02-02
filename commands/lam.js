const { MessageAttachment } = require("discord.js");


module.exports = {
    name: "lam",
    description: "Gura summons her pegging machine",
    execute(message, args){
        let l1 = new MessageAttachment("https://i.imgur.com/Qi0DKaZ.jpg");
        let l2 = new MessageAttachment("https://i.imgur.com/DebhtPe.png");
        let l3 = new MessageAttachment("https://i.imgur.com/gQxl43a.jpg");
        let l4 = new MessageAttachment("https://i.imgur.com/yXKFSfq.jpg");
        let min = 1;
        let max = 5;
        let randomNum = Math.floor(Math.random() * (max - min))  + min;


        if(randomNum == 1){
        message.channel.send(`IT'S PEGGING TIME, LAM`, l1);
        message.delete({ timeout: 1000 });

    } else if(randomNum == 2){
        message.channel.send(`THAT ASS IS MINE, LAM`, l2);
        message.delete({ timeout: 1000 });
    } else if(randomNum == 3){
            message.channel.send(`GET OVER HERE LAM, IT'S PEGGIN' TIME`, l3);
            message.delete({ timeout: 1000 });
    } else if(randomNum == 4){
        message.channel.send(`TIME FOR A PEGGING SESH, LAM!`, l4);
        message.delete({ timeout: 1000 });
}
}
};
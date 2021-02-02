module.exports = {
    name: "lam",
    description: "Gura summons her pegging machine",
    execute(message, args){

        let min = 1;
        let max = 4;
        let randomNum = Math.floor(Math.random() * (max - min))  + min;

        if(randomNum == 1){
        message.channel.send("IT'S PEGGING TIME", {
            file: "https://i.imgur.com/Qi0DKaZ.jpg"
        });
        message.delete({ timeout: 1000 });

    } else if(randomNum == 2){
        message.channel.send("IT'S PEGGING TIME", {
            file: "https://i.imgur.com/DebhtPe.png"
        });
        message.delete({ timeout: 1000 });
    } else if(randomNum == 3){
            message.channel.send("IT'S PEGGING TIME", {
            file: "https://i.imgur.com/gQxl43a.jpg"});
            message.delete({ timeout: 1000 });
    } else if(randomNum == 4){
        message.channel.send("IT'S PEGGING TIME", {
        file: "https://i.imgur.com/yXKFSfq.jpg"});
        message.delete({ timeout: 1000 });
}
}
};
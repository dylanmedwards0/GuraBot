module.exports = {
    name: "boss",
    args: true,
    usage: "<season>, <any>, or <Deerclops>",
    description: "Index bosses for DST",



    execute(message, args){
        
        let any = ["Ancient_Guardian", "Ancient_Herald", "Bee_Queen", "Crab_King", "Iron_Hulk", "Lord_of_the_Fruit_Flies", "Malbatross", "Palm_Treeguard", "Pugalisk", "Quacken", "Queen_Womant", "Reanimated_Skeleton", "Shadow_Pieces", "Spider_Queen", "Toadstool", "Treeguard"];
        let summer = ["Antlion", "Dragonfly"];
        let autumn = ["Bearger",];
        let winter = ["Deerclops", "Klaus", "Sealnado"];
        let spring = ["Moose/Goose", "Tiger_Shark"];
        let sendAny = "";


        if(args == "any"){
        for(i = 0; i < any.length; i++)
        {
        sendAny = sendAny + `\n` + `https://dontstarve.fandom.com/wiki/${any[i]}`;
        }   
    } else if (args == "summer"){
        for(i = 0; i < summer.length; i++)
        {
        sendAny = sendAny + `\n` + `https://dontstarve.fandom.com/wiki/${summer[i]}`;
        }
    } else if (args == "autumn"){
        for(i = 0; i < autumn.length; i++)
        {
        sendAny = sendAny + `\n` + `https://dontstarve.fandom.com/wiki/${autumn[i]}`;
        }
    } else if (args == "winter"){
        for(i = 0; i < winter.length; i++)
        {
        sendAny = sendAny + `\n` + `https://dontstarve.fandom.com/wiki/${winter[i]}`;
        }
    } else if (args == "spring"){
        for(i = 0; i < spring.length; i++)
        {
        sendAny = sendAny + `\n` + `https://dontstarve.fandom.com/wiki/${spring[i]}`;
        }
    }
    message.channel.send(sendAny);
    message.delete({ timeout: 1000 });

}
}
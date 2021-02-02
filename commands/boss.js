module.exports = {
    name: "boss",
    args: true,
    usage: "<season>, <any>, or <Deerclops",
    description: "Index bosses for DST",



    execute(message, args){
        let args = args.charAt(0).toUpperCase() + args.splice(1).toLowerCase;
        let any = ["Ancient_Guardian", "Ancient_Herald", "Bee_Queen", "Crab_King", "Iron_Hulk", "Lord_of_the_Fruit_Flies", "Malbatross", "Palm_Treeguard", "Pugalisk", "Quacken", "Queen_Womant", "Reanimated_Skeleton", "Shadow_Pieces", "Spider_Queen", "Toadstool", "Treeguard"];
        let summer = ["Antlion", "Dragonfly",];
        let autumn = ["Bearger",];
        let winter = ["Deerclops", "Klaus", "Sealnado",];
        let spring = ["Moose/Goose", "Tiger_Shark", ];


        if(args == "Any")
        for(i = 0; i < any.length, i++)
        {
        let sendAny = sendAny + `\n` + `https://dontstarve.fandom.com/wiki/${any[0]}`;
        }

        message.channel.send(sendAny);
        
    }
}
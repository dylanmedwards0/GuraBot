module.exports = {
  args: true,
  usage: "<amount>",
  cooldown: 20,
  name: "chomp",
  description: "Eat up to 19 messages",
  execute(message, args) {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply("Gura doesn't think that's a number..");
    } else if (amount <= 1 || amount > 20) {
      return message.reply("Gura only eats messages between 1 and 19!");
    } else {
      message.channel.bulkDelete(amount, true).catch((err) => {
        console.error(err);
        message.channel.send(
          "Gura can't eat messages older than 2 weeks. Even sharks have limits!"
        );
      });
    }
  },
};

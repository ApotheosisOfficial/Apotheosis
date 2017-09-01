class HelpPlugin {
  constructor() {}
  default (command) {
    var self = this;
    var msg = "";
    for (var i = 0; i < self.commands.length; i++) {
      msg += self.disnode.botConfig.prefix + self.config.prefix + " " + self.commands[i].cmd + " - " + self.commands[i].desc + "\n";
    }
    self.disnode.bot.SendEmbed(command.msg.channel_id, {
      color: 15158332,
      thumbnail: {
        url: "https://cdn.discordapp.com/avatars/332385757668835328/e241d81146c1570f0660ac52e664398d.png?size=256"
      },
      author: {},
      fields: [{
        name: `Hello ${command.msg.author.username}, For more info on our bots commands type "=help <command name>"`,
        inline: true,
        value: msg
      }],
      footer: {}
    })
  }
  commandOwner(command) {
    var self = this;
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":warning: These are commands the only the bot owner *(Far Aiir#8278)* can do.", "To use this please type =owner");
  }
  commandFlip(command) {
    var self = this;
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":white_check_mark: Anyone can use this command.", "To use this please type =flip");
  }
  //commandMod(command) {
    //var self = this;
   // self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":warning: Only server moderator or higher can use this command.", "To use this please type =mod");
  //}
  commandRoll(command) {
    var self = this;
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":white_check_mark: Anyone can use this command.", "To use this please type =roll");
  }
  command8ball(command) {
    var self = this;
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":white_check_mark: Anyone can use this command.", "To use this please type =8ball <message>");
  }
  commandInfo(command) {
    var self = this;
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":white_check_mark: Anyone can use this command.", "To use this please type =info");
  }
    commandCasino(command) {
      var self = this;
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":white_check_mark: Anyone can use this command.", "To use this please type =casino");
    }
}
module.exports = HelpPlugin;

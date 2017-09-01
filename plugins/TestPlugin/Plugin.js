class TestPlugin {
  constructor() {

  }
  commandKill(command) {
    var self = this;
    if (command.params[1] == undefined) {
      self.disnode.bot.SendCompactedEmbed(comand.msg.channel_id, ":warning: Error", "You may have forgot to mention someone. Please try again.")
    } else {
      if (command.params[0]) {
        self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Kill", `you have killed ${command.params}`);
      }
    }
  }

  // default (command) {
  //   var self = this;
  //
  //   self.disnode.bot.SendCompactEmbed("219014202512113664", ":warning: Attention.", "Apotheosis will be offline until further notice. More information here: https://discord.gg/6G4Paj6")
  //   self.disnode.bot.SendCompactEmbed("268251138841772032", ":warning: Attention.", "Apotheosis will be offline until further notice. More information here: https://discord.gg/6G4Paj6")
  //   self.disnode.bot.SendCompactEmbed("306189057065484289", ":warning: Attention.", "Apotheosis will be offline until further notice. More information here: https://discord.gg/6G4Paj6")
  //   self.disnode.bot.SendCompactEmbed("327287207444611073", ":warning: Attention.", "Apotheosis will be offline until further notice. More information here: https://discord.gg/6G4Paj6")
  //   self.disnode.bot.SendCompactEmbed("330476643040886784", ":warning: Attention.", "Apotheosis will be offline until further notice. More information here: https://discord.gg/6G4Paj6")
  //   self.disnode.bot.SendCompactEmbed("336983162154647552", ":warning: Attention.", "Apotheosis will be offline until further notice. More information here: https://discord.gg/6G4Paj6")
  //   self.disnode.bot.SendCompactEmbed("345094248233697293", ":warning: Attention.", "Apotheosis will be offline until further notice. More information here: https://discord.gg/6G4Paj6")
  //   self.disnode.bot.SendCompactEmbed("351170062708768769", ":warning: Attention.", "Apotheosis will be offline until further notice. More information here: https://discord.gg/6G4Paj6")
  //
  //
  //
  // }

}
//made by Aiir
module.exports = TestPlugin;

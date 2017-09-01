class ModeratorPlugin {
  constructor() {

  }
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
          name: `Hello ${command.msg.author.username} these are all of the moderator commands.` + "\n",
          inline: true,
          value: msg,
        },
        {
          name: 'Also' + "\n",
          inline: true,
          value: `For more info you can join our server \nthe invite is https://discord.gg/6G4Paj6.`,
        }
      ],
      footer: {}
    })
  }
  commandDelete(command) {
    var self = this;
        if (command.params[0] == undefined) {
          self.disnode.bot.SendMessage(command.msg.channel_id, ":warning: Pick an amount of messages to delete. (1-100)");
        } else {
          self.disnode.bot.GetMessages(command.msg.channel_id, {
              before: command.msg.id,
              limit: parseInt(command.params[0])
            })
            .then(function(messageArry) {
              var ids = [];
              for (var i = 0; i < messageArry.length; i++) {
                ids.push(messageArry[i].id);
              }
              console.log(ids)
              self.disnode.bot.DeleteMessages(command.msg.channel_id, ids);
              self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
            });
        }
    }

  commandBan(command) {
    var self = this;
    var serverIDs = self.disnode.bot.guilds[command.msg.guildID].id;
    if (command.params[0] == undefined) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":warning:Error", "Your privilege is too low. Or you didn't mention a user.");
    }

    if (uid == undefined) {
      var uid = command.params[0];
      uid = uid.replace(/\D/g, '');
      //var mid = self.disnode.bot.users[uid].username;
      self.disnode.bot.BanUser(ServerIDs, uid);
      // self.caseLog('ban', uid, user.username, command);
    }
  }
  commandUnban(command) {
    var self = this;
    var serverIDs = self.disnode.bot.guilds[command.msg.guildID].id;
    if (command.params[0] == undefined) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":warning:Error", "Your privilege is too low. Or you didn't mention a user.");
    }

    if (uid == undefined) {
      var uid = command.params[0];
      uid = uid.replace(/\D/g, '');
      self.disnode.bot.UnBanUser(ServerIDs, uid);
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":White_check_mark: Success", `User ID - **  ${uid}  ** has been unbanned.`);
    }
  }
  commandKick(command) {
    var self = this;
    var serverIDs = self.disnode.bot.guilds[command.msg.guildID].id;

    if (command.params[0] == undefined) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":warning:Error", "Your privilege is too low. Or you didn't mention a user.");
    }

    if (uid == undefined) {
      var uid = command.params[0];
      uid = uid.replace(/\D/g, '');
      self.disnode.bot.RemoveMember(serverIDs, uid);

    }
}

    commandSoftban(command) {
      var self = this;
      var serverIDs = self.disnode.bot.guilds[command.msg.guildID].id;
      if (command.params[0] == undefined) {
        self.disnode.bot.SendCompactEmbed(command.msg.channel_id, ":warning:Error", "Your privilege is too low. Or you didn't mention a user.");
      }

      if (uid == undefined) {
        var uid = command.params[0];
        uid = uid.replace(/\D/g, '');
        self.disnode.bot.GetUser(uid).then(function(user) {
          //  var mid = self.disnode.bot.users[uid].username;
          self.disnode.bot.BanUser(serverIDs, uid, "1");
          setTimeout(function() {
            self.disnode.bot.UnBanUser(ServerIDs, uid);
          }, 500);
          // self.caseLog('softban', uid, user.username, command);
        });
      }
    }
    // self.caseLog('ban', uid, user.username, command);

    // commandpingaiir(command) {
    //   var self = this;
    //   if (command.msg.author.id == self.disnode.botConfig.ownerid) {
    //     setInterval(function() {
    //       self.disnode.bot.SendMessage("329816484903649280", "<@217215496267890689>");
    //     }, 1500
    //   }
    // }
    AccessDenied(command) {
      var Logging = require('disnode-logger');
      var self = this;
      self.disnode.bot.SendEmbed(command.msg.channel_id, {
        color: 15158332,
        author: {},
        fields: [{
          name: "Stop",
          inline: false,
          value: `**${command.msg.author.username} you do not have access to use =owner**`,
        }],
        footer: {}
      });
      Logging.Warning(command.msg.author.username, command.msg.author.id, "Tried using " + command.msg.content);
    }
  }
  //made by Aiir
  module.exports = ModeratorPlugin;

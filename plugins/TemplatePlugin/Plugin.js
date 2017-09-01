const dateFormat = require('dateformat');

class InfoPlugin {
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
          name: `Hello ${command.msg.author.username}, These are the information commands.` + "\n",
          inline: true,
          value: msg,
        },
        {
          name: 'Also' + "\n",
          inline: true,
          value: `For more info, join our server: https://discord.gg/6G4Paj6`,
        }
      ],
      footer: {}
    })
  }

  commandServer(command) {
    var self = this;
    var id = `${command.msg.guildID}`
    var serv = self.disnode.bot.guilds[id];
    var own = serv.owner_id;
    var now = self.disnode.util.GetSnowflakeDate(command.msg.guildID);
    var roles = "";
    for (var ids in serv.roles) {
      if (serv.roles.hasOwnProperty(ids)) {
        roles += serv.roles[ids].name + '  **|**  ';
      }
    }
    // var status = self.disnode.bot.GetUserStatus(self.server,command.msg.userID );
    var emotes = "";
    for (var ids in serv.emojis) {
      if (serv.emojis.hasOwnProperty(ids)) {
        emotes += "<:" + serv.emojis[ids].name + ':' + serv.emojis[ids].id + '> ';
      }
    }

    self.disnode.bot.SendEmbed(command.msg.channel_id, {
      color: 15158332,
      thumbnail: {},
      author: {
        name: command.msg.author.username
      },
      fields: [{
          name: `Region`,
          inline: true,
          value: serv.region
        },
        {
          name: `ServerID`,
          inline: true,
          value: id
        },
        {
          name: `Roles `,
          inline: false,
          value: roles.slice(11),
        },
        {
          name: `Members `,
          inline: true,
          value: serv.member_count
        },
        {
          name: `Owner`,
          inline: true,
          value: `<@${serv.owner_id}>`
        },
        {
          name: "Owners Account Creation Date",
          inline: true,
          value: dateFormat(self.disnode.util.GetSnowflakeDate(serv.owner_id), "mmmm dS, yyyy, h:MM:ss TT")
        },
        {
          name: "Bot Join Date",
          inline: true,
          value: dateFormat(serv.joined_at,  "mmmm dS, yyyy, h:MM:ss TT"),
        },
        {
          name: "Server Created On",
          inline: true,
          value: dateFormat(now, "mmmm dS, yyyy, h:MM:ss TT"),
        },
        {
          name: `Emojis`,
          inline: false,
          value: emotes
        }
      ],
      footer: {}
    })

  }
  commandUser(command) {
    var self = this;
      var own = self.disnode.bot.command.msg.author
      var status = self.disnode.bot.util.GetUserStatus(command.msg.guildID, command.msg.author.id);
      self.disnode.bot.SendEmbed(command.msg.channel, {
        color: 1752220,
        thumbnail: {
          url: self.avatarCommandUser(command),
        },
        author: {},
        fields: [{
            name: own.username + "#" + own.discriminator,
            inline: true,
            value: (status.game == null) ? status.status + "|Not playing a game" : status.status + "|Playing**" + status.game.name + "**",
          },
          {
            name: "ID",
            inline: true,
            value: own.id,
          },
          {
            name: "Created on",
            inline: false,
            value: dateFormat(now, "mmmmdS,yyyy,h:MM:ssTT"),
          },
          {
            name: "Joined on",
            inline: false,
            value: dateFormat(mem.joined_at, "mmmmdS,yyyy,h:MM:ssTT"),
          },
          {
            name: "Roles",
            inline: false,
            value: '**|**' + rm,
          }
        ],
        footer: {
          text: command.msg.user,
          icon_url: self.avatarCommandUser(command),
        },
        timestamp: newDate(),
      });
  }

  avatarBot(command) {
    var self = this;
    return "https:\/\/cdn.discordapp.com\/avatars\/" + self.disnode.bot.GetBotInfo().id + "\/" + self.disnode.bot.GetBotInfo().avatar + ".jpg?size=1024";
  }
  avatarUser(command) {
    varself = this;
    varuid = command.params[0];
    uid = uid.replace(/\D/g, '');
    varown = self.disnode.bot.GetUserInfo(uid);
    if (own.avatar != null) {
      if (own.avatar.indexOf('_') > -1) {
        return "https:\/\/cdn.discordapp.com\/avatars\/" + uid + "\/" + own.avatar + ".gif";
      } else {
        return "https:\/\/cdn.discordapp.com\/avatars\/" + uid + "\/" + own.avatar + ".png";
      }
    }
  }
  avatarCommandUser(command) {
    varself = this;

    if (command.msg.author.avatar != null) {
      if (command.msg.author.avatar.indexOf('_') > -1) {
        return "https:\/\/cdn.discordapp.com\/avatars\/" + command.msg.userID + "\/" + command.msg.author.avatar + ".gif";
      } else {
        return "https:\/\/cdn.discordapp.com\/avatars\/" + command.msg.userID + "\/" + command.msg.author.avatar + ".png";
      }
    }
  }
  iconServer(command) {
    varself = this;
    varserv = self.disnode.bot.servers[command.msg.server];
    return "https:\/\/cdn.discordapp.com\/icons\/" + serv.id + "\/" + serv.icon + ".png?size=1024";
  }


}
module.exports = InfoPlugin;
//MadebyHazedSPaCE✘#2574

  class OwnerPlugin {
    constructor() {
      // if you want to have global vars in your plugin youd put them here
      this.somear = 'xd';
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
            name: `Hello, ${command.msg.author.username} All of these commands are for the bot owner only.` + "\n",
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



    commandStatus(command) {
      var self = this;
      var message = command.params.slice(11)

      if (self.disnode.botConfig.ownerid.indexOf(command.msg.author.id) != -1) {
        self.disnode.bot.SetStatus(message)
      } else self.AccessDenied(command)
    }
    commandRestart(command) {
      var self = this;
      var start = "node Run.js"
      if (self.disnode.botConfig.ownerid.indexOf(command.msg.author.id) != -1) {
        self.disnode.bot.SendEmbed(command.msg.channel, {
          color: 0x12ff0a,
          author: {},
          fields: [{
            name: "Restarting",
            inline: false,
            value: ":repeat:"
          }],
          footer: {}
        });
        process.Restart();
      } else self.AccessDenied(command)
    }


    commandsay(command) {
      var self = this;
      if (self.disnode.botConfig.ownerid.indexOf(command.msg.author.id) != -1) {
        self.disnode.bot.DeleteMessage(command.msg.channel_id, command.msg.id);
        self.disnode.bot.SendCompactEmbed(command.msg.channel_id, `${command.msg.author.username}'s message:`, command.msg.content.slice(11));
      } else self.AccessDenied(command)
    }

    commandexec(command) {
      var msg = "";
      var exec = require('child_process').exec;
      var self = this;
      if (self.disnode.botConfig.ownerid.indexOf(command.msg.author.id) != -1) {
        var params = command.params.splice(1).join(" ");
        console.log(params)
        exec(params, (error, stdout, stderr) => {
          console.log('Error:', error);
          console.log('Console out:', stdout);
          console.log('Console error:', stderr);
          if (error != null) {
            self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Error", error, 15158332);
            return;
          }

          self.disnode.bot.SendEmbed(command.msg.channel_id, {
            color: 15158332,
            author: {},
            fields: [{
                name: "Results",
                inline: false,
                value: '```' + command.params[0] + '\n' + stdout + '\n```',
              },
              {
                name: 'Error',
                inline: false,
                value: (stderr == '') ? '```\nNo Errors\n```' : '```\n' + stderr + '\n```',
              }
            ],
            footer: {}
          }).catch(function(e) {
            console.error(e)
          })
        });
      } else self.AccessDenied(command)
    }

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

    iconServer(command) {
      var self = this;
      var servid = command.msg.guildID
      var servicon = command.msg.author.avatar
      return "https:\//\//cdn.discordapp.com\//icons\//" + servid + "\//" + servicon + ".png?size=1024";
    }

    commandinfo(command) {
      var self = this;
      if (self.disnode.botConfig.ownerid.indexOf(command.msg.author.id) != -1) {
        var uptime = self.disnode.stats.getUptime();
        // var servers = Object.keys(self.disnode.bot.guilds).length;
        var channels = Object.keys(self.disnode.bot.channels).length;
        var users = Object.keys(self.disnode.bot.users).length;
        var members = self.disnode.bot.guilds[command.msg.guildID].member_count
        var ids = self.disnode.botConfig.ownerid
        // var servers = `${let str = '';for(var id in self.disnode.bot.guilds) {str += self.disnode.bot.guilds[id].name + '\n'} str}`
        self.disnode.bot.SendEmbed(command.msg.channel_id, {
          color: 15158332,
          thumbnail: {
            url: "https://cdn.discordapp.com/avatars/332385757668835328/e241d81146c1570f0660ac52e664398d.png?size=256"
          },
          author: {},
          fields: [{
              name: "Servers:",
              inline: true,
              value: `${servers}`,
            },
            {
              name: 'Channels:',
              inline: true,
              value: `${channels}`,
            },
            {
              name: 'Online Users:',
              inline: true,
              value: `${users}`,
            },
            {
              name: 'Server Members:',
              inline: true,
              value: `${members}`,
            },
            {
              name: 'Bot Owner',
              inline: true,
              value: `Far Aiir#8278`,
            },
            {
              name: 'Bot Uptime:',
              inline: true,
              value: `${uptime}`,
            }
          ],
          footer: {}
        })
      } else self.AccessDenied(command);
    }



    commandeval(command) {
      var self = this;
      var msg = "";
      if (self.disnode.botConfig.ownerid.indexOf(command.msg.author.id) != -1) {
        var code = command.msg.content.split("=owner eval ")[1];
        try {
          var evaled = eval(code);
          console.log(code);
          if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
          if (evaled === undefined) {
            self.disnode.bot.SendMessage(command.msg.channel_id, "```json\n" + e + "\n```");
          }
          self.disnode.bot.SendMessage(command.msg.channel_id, "```json\n" + evaled + "\n```");
        } catch (e) {
          self.disnode.bot.SendMessage(command.msg.channel_id, "```json\n" + e + "\n```");
        }
      } else self.AccessDenied(command);
    }

    // avatarCommandUser(command) {
    //   var self = this;
    //   return self.disnode.bot.SendCompactEmbed(command.msg.channel_id, `${https:\\/\\/cdn.dicord.com\\/attachments\\/346789645700562974\\/347627807184257024\\/6-2-youtube-png-picture.png}`)
    // }


    // commandping(command) {
    //   var self = this;
    //   if (command.msg.author.id == self.disnode.botConfig.ownerid) {
    //     setInterval(function() {
    //       self.disnode.bot.SendMessage("346191776576569344", "<@216681082932822017>");
    //     }, 1500);
    //   }
    // }
    // commandpingaiir(command) {
    //   var self = this;
    //   if (command.msg.author.id == self.disnode.botConfig.ownerid) {
    //     setInterval(function() {
    //       self.disnode.bot.SendMessage("329816484903649280", "<@217215496267890689>");
    //     }, 1500
    //   }
    // }

  }

  module.exports = OwnerPlugin

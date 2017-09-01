class RollDice {
  constructor() {

  }


  default (command) {
    var self = this;
    self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Welcome to the Roll Dice game.", `To get started type ${self.disnode.botConfig.prefix + self.config.prefix} then the number you want. You can choose any number from 1 to 12. Here is a example ${self.disnode.botConfig.prefix + self.config.prefix} 3.`);
  }

  commandroll_1(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 1) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost.`);
    }
  }

  commandroll_2(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 2) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number}`);
    }
  }

  commandroll_3(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 3) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost.`);
    }
  }

  commandroll_4(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 4) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost.`);
    }
  }

  commandroll_5(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 5) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost.`);
    }
  }

  commandroll_6(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 6) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost.`);
    }
  }

  commandroll_7(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 7) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost.`);
    }
  }

  commandroll_8(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 8) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost.`);
    }
  }

  commandroll_9(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 9) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost.`);
    }
  }

  commandroll_10(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 10) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost.`);
    }
  }

  commandroll_11(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 11) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost`);
    }
  }

  commandroll_12(command) {
    var self = this;
    var number = Math.floor(Math.random() * 12 + 1);
    if (number == 12) {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice:", `Congrats the number was ${number} you won!`);
    } else {
      self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Roll Dice", `Sorry the number was ${number} you lost`);
    }
  }



}

//made by Aiir
module.exports = RollDice;

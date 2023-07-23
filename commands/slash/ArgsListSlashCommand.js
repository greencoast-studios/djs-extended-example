const { SlashCommand } = require('@greencoast/discord.js-extended');
const { SlashCommandBuilder } = require('discord.js');

class ArgsListSlashCommand extends SlashCommand {
  constructor(client) {
    super(client, {
      name: 'args_slash',
      description: 'Get list of args.',
      group: 'slash',
      dataBuilder: new SlashCommandBuilder()
        .addStringOption((input) => input.setName('args').setDescription('Arguments...'))
    });
  }

  async run(interaction) {
    await interaction.reply(interaction.options.getString('args'));
  }
}

module.exports = ArgsListSlashCommand;

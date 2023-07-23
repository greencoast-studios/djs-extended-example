import { SlashCommand, ExtendedClient } from '@greencoast/discord.js-extended';
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

class ArgsListSlashCommand extends SlashCommand {
  constructor(client: ExtendedClient) {
    super(client, {
      name: 'args_slash',
      description: 'Get list of args.',
      group: 'slash',
      dataBuilder: new SlashCommandBuilder()
        .addStringOption((input) => input.setName('args').setDescription('Arguments...').setRequired(true))
    });
  }

  async run(interaction: ChatInputCommandInteraction) {
    await interaction.reply(interaction.options.getString('args')!);
  }
}

module.exports = ArgsListSlashCommand;

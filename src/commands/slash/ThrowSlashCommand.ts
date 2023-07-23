import { SlashCommand, ExtendedClient } from '@greencoast/discord.js-extended';
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

class ThrowSlashCommand extends SlashCommand {
  constructor(client: ExtendedClient) {
    super(client, {
      name: 'throw_slash',
      aliases: ['t'],
      description: 'Throws an error.',
      group: 'slash',
      dataBuilder: new SlashCommandBuilder()
    });
  }

  async run(interaction: ChatInputCommandInteraction) {
    await interaction.reply('hi');
    throw new Error('Oops!');
  }
}

module.exports = ThrowSlashCommand;

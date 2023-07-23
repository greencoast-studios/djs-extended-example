import { SlashCommand, ExtendedClient } from '@greencoast/discord.js-extended';
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';


class PingSlashCommand extends SlashCommand {
  constructor(client: ExtendedClient) {
    super(client, {
      name: 'ping_slash',
      description: 'Ping-Pong',
      group: 'slash',
      dataBuilder: new SlashCommandBuilder()
    });
  }

  async run(interaction: ChatInputCommandInteraction) {
    await interaction.reply('Pong!');
  }
}

module.exports = PingSlashCommand;

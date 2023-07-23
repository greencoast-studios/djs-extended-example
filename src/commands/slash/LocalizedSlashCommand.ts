import { SlashCommand, ExtendedClient } from '@greencoast/discord.js-extended';
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

class LocalizedSlashCommand extends SlashCommand {
  constructor(client: ExtendedClient) {
    super(client, {
      name: 'localized',
      description: 'Test localization.',
      group: 'slash',
      guildOnly: true,
      dataBuilder: new SlashCommandBuilder()
    });
  }

  async run(interaction: ChatInputCommandInteraction) {
    const localizer = this.client.localizer!.getLocalizer(interaction.guild!)!;

    await interaction.reply(localizer.t('extra.only_english', { name: interaction.user.username }));
  }
}

module.exports = LocalizedSlashCommand;

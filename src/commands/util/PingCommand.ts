import { RegularCommand, ExtendedClient } from '@greencoast/discord.js-extended'
import { Message } from 'discord.js';

class PingCommand extends RegularCommand {
  constructor(client: ExtendedClient) {
    super(client, {
      name: 'ping',
      description: 'Ping-Pong',
      group: 'util'
    });
  }

  async run(message: Message) {
    await message.reply('Pong!');
  }
}

module.exports = PingCommand;

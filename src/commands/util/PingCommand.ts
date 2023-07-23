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

  run(message: Message) {
    return message.reply('Pong!');
  }
}

module.exports = PingCommand;

import { RegularCommand, ExtendedClient } from '@greencoast/discord.js-extended';
import { Message } from 'discord.js';

class ArgsListCommand extends RegularCommand {
  constructor(client: ExtendedClient) {
    super(client, {
      name: 'args',
      description: 'Get list of args.',
      group: 'misc'
    });
  }

  run(message: Message, args: string[]) {
    return message.reply(args.join('\n- '));
  }
}

module.exports = ArgsListCommand;

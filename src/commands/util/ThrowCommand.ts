import { RegularCommand, ExtendedClient } from '@greencoast/discord.js-extended';

class ThrowCommand extends RegularCommand {
  constructor(client: ExtendedClient) {
    super(client, {
      name: 'throw',
      description: 'Throws an error.',
      group: 'util'
    });
  }

  async run() {
    throw new Error('Oops!');
  }
}

module.exports = ThrowCommand;

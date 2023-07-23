import 'dotenv/config';
import path from 'path';
import logger from '@greencoast/logger';
import { IntentsBitField } from 'discord.js';
import { ExtendedClient, ConfigProvider } from '@greencoast/discord.js-extended';
import { ActivityType } from 'discord-api-types/v10';
import * as locales from './locale';

// The environment object contains the property: DISCORD_TOKEN with the bot's token.
const config = new ConfigProvider({
  env: process.env,
  configPath: path.join(__dirname, '../config/settings.json'),
  default: {
    PREFIX: '!',
    OPTIONAL_NUMBER: null,
    MY_ENUM: 'enum1'
  },
  types: {
    TOKEN: 'string',
    PREFIX: 'string',
    OPTIONAL_NUMBER: ['number', 'null'], // A DISCORD_OPTIONAL_NUMBER env variable which will be cast to a number. It also accepts "null" as value.
    REQUIRED_BOOLEAN: 'boolean', // A DISCORD_REQUIRED_BOOLEAN env variable which will be cast to a boolean.
    MY_ENUM: 'string', // A DISCORD_MY_ENUM env variable that will use a custom validator.
    MY_NUM_ARRAY: 'number[]' // A DISCORD_MY_NUM_ARRAY env variable with comma separated numbers that will turn into an array of numbers.
  },
  customValidators: {
    MY_ENUM: (value) => {
      const validValues = ['enum1', 'enum2', 'enum3'];
      if (!validValues.includes(value as string)) {
        throw new TypeError(`${value} is not a valid value for MY_ENUM, you should use: ${validValues.join(', ')}`);
      }
    }
  }
});

const client = new ExtendedClient({
  prefix: config.get<string>('PREFIX'),
  owner: '191330192868769793',
  debug: true,
  presence: {
    templates: ['{num_guilds} guilds!', 'random number {random}', '{num_members} members!', 'owner: {owner_name}', '{uptime}', '{ready_time}'],
    refreshInterval: 10000, // Presence gets changed every 10 seconds.
    status: 'dnd',
    type: ActivityType.Competing,
    customGetters: {
      random: async() => Math.random().toString()
    }
  },
  config,
  errorOwnerReporting: true,
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent],
  testingGuildID: '756628171494916098',
  localizer: {
    defaultLocale: 'en',
    localeStrings: locales
  }
});

client.registerDefaultEvents()
  .registerExtraDefaultEvents();

client.registry
  .registerDefaults()
  .registerGroups([
    ['util', 'Utility'],
    ['slash', 'Slash Commands']
  ])
  .registerCommandsIn(path.join(__dirname, './commands'));

client.on('ready', async() => {
  logger.info(`Listening for commands with prefix: ${client.prefix}`);

  await client.localizer!.init(); // Initialize the localizer after setting up the data provider.

  client.deployer.rest.setToken(config.get<string>('TOKEN')!);
  await client.deployer.deployToTestingGuild(); // Deploy slash commands to the testing guild.

  logger.info(`My numbers from the environment variable are: ${config.get<string[]>('MY_NUM_ARRAY')!.join(', ')}`);
});

client.login(config.get<string>('TOKEN'));

import 'dotenv/config';
import path from 'path';
import { ExtendedClient, ConfigProvider } from '@greencoast/discord.js-extended';

const config = new ConfigProvider({
  env: process.env,
  configPath: path.join(__dirname, './config/settings.json'),
  types: {
    TOKEN: 'string'
  }
});

const client = new ExtendedClient({
  config,
  intents: []
});

client.registry
  .registerDefaults()
  .registerGroups([
    ['util', 'Utility'],
    ['slash', 'Slash Commands']
  ])
  .registerCommandsIn(path.join(__dirname, './commands'));

client.on('ready', async() => {
  try {
    client.deployer.rest.setToken(config.get<string>('TOKEN')!);
    await client.deployer.deployGlobally();
  } catch (error) {
    console.error('Something happened!', error);
    process.exit(1);
  }
});

client.on('commandsDeployed', (commands) => {
  console.log(`Successfully deployed ${commands.length} commands globally!`);
  process.exit(0);
});

client.login(config.get<string>('TOKEN')!);

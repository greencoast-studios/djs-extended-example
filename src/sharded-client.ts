import 'dotenv/config';
import path from 'path';
import logger from '@greencoast/logger';
import { ShardingManager } from 'discord.js';
import { ConfigProvider } from '@greencoast/discord.js-extended';

// The environment object contains the property: DISCORD_TOKEN with the bot's token.
const config = new ConfigProvider({
  env: process.env,
  configPath: path.join(__dirname, './config/settings.json'),
  types: {
    TOKEN: 'string'
  }
});

const manager = new ShardingManager('./index.js', { token: config.get<string>('TOKEN')! });

manager.on('shardCreate', (shard) => {
  logger.log(`Launched shard with ID: ${shard.id}`);
});

manager.spawn({ amount: 2 });

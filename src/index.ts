import { ApplicationCommandRegistries, SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { BOT_TOKEN, GUILD_ID, NODE_ENV } from './env.config.js';

const client = new SapphireClient({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

if (NODE_ENV === 'dev') {
  ApplicationCommandRegistries.setDefaultGuildIds([GUILD_ID]);
}

await client.login(BOT_TOKEN);

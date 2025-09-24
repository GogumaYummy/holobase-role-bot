import { GatewayIntentBits } from 'discord.js';
import { Client } from 'discordx';
import { NODE_ENV, GUILD_ID, BOT_TOKEN } from './config.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  botGuilds: NODE_ENV === 'dev' ? [GUILD_ID] : undefined,
});

client.once('clientReady', async () => {
  await client.initApplicationCommands();

  console.info(`${client.user!.username} 준비 완료`);
});

client.on('interactionCreate', (interaction) => {
  client.executeInteraction(interaction);
});

await client.login(BOT_TOKEN);

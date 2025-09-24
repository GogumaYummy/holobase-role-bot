if (process.env.NODE_ENV === 'dev') {
  const dotenv = await import('dotenv');
  dotenv.config();
}

import { GatewayIntentBits } from 'discord.js';
import { Client } from 'discordx';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  botGuilds:
    process.env.NODE_ENV === 'dev' ? [process.env.GUILD_ID!] : undefined,
});

client.once('clientReady', async () => {
  console.info(`${client.user!.username} 준비 완료`);

  client.initApplicationCommands();
});

client.login(process.env.BOT_TOKEN!);

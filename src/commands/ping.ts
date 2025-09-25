import { CommandInteraction, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { Discord, Slash } from 'discordx';

@Discord()
export class Ping {
  @Slash(new SlashCommandBuilder().setName('핑').setDescription('봇 응답 테스트용'))
  async ping(interaction: CommandInteraction) {
    await interaction.reply({
      content: '퐁!',
      flags: [MessageFlags.Ephemeral],
    });
  }
}

import { Command } from '@sapphire/framework';
import { MessageFlags } from 'discord.js';

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, { ...options });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand((builder) => builder.setName('핑').setDescription('봇 동작 테스트'));
  }

  public override chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    return interaction.reply({
      content: '퐁!',
      withResponse: true,
      flags: MessageFlags.Ephemeral,
    });
  }
}

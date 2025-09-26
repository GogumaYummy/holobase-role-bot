import { isMessageInstance } from '@sapphire/discord.js-utilities';
import { Command } from '@sapphire/framework';
import { MessageFlags } from 'discord.js';

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, { ...options });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand((builder) => builder.setName('핑').setDescription('봇 동작 테스트'));
  }

  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    const callbackResponse = await interaction.reply({
      content: '핑?',
      withResponse: true,
      flags: MessageFlags.Ephemeral,
    });
    const message = callbackResponse.resource?.message;

    if (message && isMessageInstance(message)) {
      const difference = message.createdTimestamp - interaction.createdTimestamp;
      const ping = Math.round(this.container.client.ws.ping);

      if (ping < 0) {
        return interaction.editReply(`아직 봇이 서버와 연결되지 않았어요 (왕복 시간: ${difference}ms)`);
      }

      return interaction.editReply(`퐁! (왕복 시간: ${difference}ms, 연결 상태: ${ping}ms)`);
    }

    return interaction.editReply('응답에 실패했어요');
  }
}

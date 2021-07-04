import type { Command } from 'commander';
import execa from 'execa';

const command: Slyte.Command = {
  name: 'install',
  arguments: '<URL...>',
  description: 'install a youtube video or playlist',
  aliases: ['i'],
  options: [['-a, --audio-only', 'Extract audio only']],
  execute(this: Command, links: string[]) {
    const { audioOnly } = this.opts();

    for (const link of links) {
      const options: string[] = [
        '--embed-thumbnail',
        ...(audioOnly ? ['-x', '-f', 'm4a'] : ['-f', 'mp4']),
      ];

      const output = execa('youtube-dl', [link, ...options]);
      output.stdout?.pipe(process.stdout);
      output.stderr?.pipe(process.stderr);
    }
  },
};

export = command;

import { readdirSync } from 'fs';
import { join } from 'path';

export const commands: Slyte.Commands = readdirSync(join(__dirname, 'commands'))
  .filter((file) => !file.endsWith('.d.ts'))
  .map((file) => require(join(__dirname, 'commands', file)))
  .reduce((commands, cmd) => ((commands[cmd.name] = cmd), commands), {});

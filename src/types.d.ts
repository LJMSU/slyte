import type * as Commander from 'commander';
import type { execute } from './commands/install';

declare global {
  export namespace Slyte {
    export interface Command {
      name: string;
      arguments?: string;
      options?: Array<[string, string?, (string | boolean)?]>;
      description: string;
      aliases?: string[];
      execute: Parameters<Commander.Command['action']>[0];
    }

    export interface Commands {
      install: typeof execute;
    }
  }
}

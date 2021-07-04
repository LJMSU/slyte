#!/usr/bin/env node
import { Command } from 'commander';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as slyte from '../index';

// Due to typescript's requirement of only importing
// files in rootDir, I have to use this alternative.
const { version } = JSON.parse(
  readFileSync(resolve(__dirname, '../../package.json'), 'utf8')
);

const program = new Command('slyte')
  .version(version, '-v, --version')
  .allowExcessArguments(false)
  .allowUnknownOption(false);

const commands: Slyte.Command[] = Object.values(slyte.commands);

for (const command of commands) {
  const cmd = program
    .command(command.name)
    .arguments(command.arguments ?? '')
    .description(command.description)
    .aliases(command.aliases ?? [])
    .action(command.execute);
  if (command.options)
    for (const option of command.options) cmd.option(...option);
}

program.parse();

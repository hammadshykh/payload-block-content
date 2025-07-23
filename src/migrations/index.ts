import * as migration_20250723_123847_init from './20250723_123847_init';

export const migrations = [
  {
    up: migration_20250723_123847_init.up,
    down: migration_20250723_123847_init.down,
    name: '20250723_123847_init'
  },
];

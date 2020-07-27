import fs from 'fs';
import path from 'path';
import config from 'config';

fs.writeFileSync(
  path.resolve(__dirname, '../build/config.json'),
  JSON.stringify(config)
)

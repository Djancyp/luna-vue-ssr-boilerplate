import fs from 'fs';
import path from 'path';
import config from 'config';

fs.writeFileSync(
  path.resolve(__dirname, '../config.json'),
  JSON.stringify(config)
)

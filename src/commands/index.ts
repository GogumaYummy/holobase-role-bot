import { readdirSync } from 'fs';
import path from 'path';

await Promise.all(
  readdirSync(import.meta.dirname)
    .filter((file) => file.endsWith('.ts') && path.parse(file).name !== 'index')
    .map((file) => import(`./${path.parse(file).name}.js`))
);

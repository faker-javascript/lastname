import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

export default function lastName(options) {
    options = options || {};
    const locale = options.locale || 'en_US';
    const filePath = `./locales/${locale}/lastnames.json`;
    let lastnames = [];
    lastnames = fs.existsSync(path.resolve(filePath)) ? loadJsonFileSync(filePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/lastname/', filePath));
    return lastnames[Math.floor(Math.random() * lastnames.length)];
}

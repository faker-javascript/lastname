import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

export default function lastName(options) {
    options = options || {};
    const filePath = `./locales/${options.locale || 'en_US'}/lastnames.json`;
    let lastnames = [];
    lastnames = fs.existsSync(path.resolve(filePath)) ? loadJsonFileSync(filePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/lastname/', filePath));
    return lastnames[Math.floor(Math.random() * lastnames.length)];
}

import {loadJsonFileSync} from 'load-json-file';

export default function lastName(options) {
    options = options || {};
    const locale = options.locale === undefined ? 'en_US' : options.locale;
    const lastnames = loadJsonFileSync(`./locales/${locale}/lastnames.json`);
    return lastnames[Math.floor(Math.random() * lastnames.length)];
}

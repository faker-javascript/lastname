import test from 'ava';
import lastName from './index.js';

test('lastName return type to be string', t => {
    t.is(typeof lastName(), 'string');
    t.is(typeof lastName({locale: 'en_US'}), 'string');
    t.is(typeof lastName({locale: 'ru_RU'}), 'string');
});

import {expectType} from 'tsd';
import lastName from './index.js';

expectType<string>(lastName());

'use strict';

const web.study = require('..');
const assert = require('assert').strict;

assert.strictEqual(web.study(), 'Hello from web.study');
console.info('web.study tests passed');

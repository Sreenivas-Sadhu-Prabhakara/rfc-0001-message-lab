import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectMessage } from '../core.mjs';
test('header fields are 5/8/1/2 bits', () => assert.deepEqual(inspectMessage('hi',31,255,true).fields, ['11111','11111111','1','00']));
test('8080-bit limit is inclusive', () => { assert.equal(inspectMessage('a'.repeat(1010),0,1).valid,true); assert.equal(inspectMessage('a'.repeat(1011),0,1).valid,false); });
test('counts UTF-8 bytes, not JavaScript characters', () => assert.equal(inspectMessage('🌍',0,1).bodyBits,32));
test('empty body and reserved control link', () => { const x=inspectMessage('',0,0); assert.equal(x.bodyBits,0); assert.equal(x.linkUse,'Control link'); });
test('field capacity is not active link count', () => assert.match(inspectMessage('',0,32).linkUse,/outside/));
test('rejects invalid fields', () => { for(const x of [-1,32,NaN,1.5]) assert.throws(()=>inspectMessage('',x,0)); for(const x of [-1,256,Infinity]) assert.throws(()=>inspectMessage('',0,x)); });

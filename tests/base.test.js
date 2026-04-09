/* global test, expect, beforeEach */

function loadPolyfill() {
    delete String.prototype.includes;
    jest.resetModules();
    require('../string-includes-polyfill');
}

beforeEach(() => {
    loadPolyfill();
});

test('basic substring matching', () => {
    const str = 'Built for developers';

    expect(str.includes('Built')).toEqual(true);
    expect(str.includes('Build')).toEqual(false);
    expect(str.includes('built')).toEqual(false);
    expect(str.includes('Built for')).toEqual(true);
    expect(str.includes(' ')).toEqual(true);
    expect(str.includes('for')).toEqual(true);
    expect(str.includes('for  developers')).toEqual(false);
});

test('start parameter: integer', () => {
    expect('hello'.includes('hello', 0)).toEqual(true);
    expect('hello'.includes('hello', 1)).toEqual(false);
    expect('hello'.includes('ello', 1)).toEqual(true);
    expect('hello'.includes('h', 1)).toEqual(false);
});

test('start parameter: float is floored (not truncated to 0)', () => {
    // 3.5 should be floored to 3; "lo" starts at 3, so should be found
    expect('hello'.includes('lo', 3.5)).toEqual(true);
    // 3.9 floored to 3 — same result
    expect('hello'.includes('lo', 3.9)).toEqual(true);
    // 4.0 floored to 4 — "lo" starts at 3, not found from 4
    expect('hello'.includes('lo', 4.0)).toEqual(false);
});

test('start parameter: string is coerced to number', () => {
    expect('hello'.includes('llo', '2')).toEqual(true);
    expect('hello'.includes('hello', '0')).toEqual(true);
    expect('hello'.includes('hello', '1')).toEqual(false);
});

test('start parameter: negative is clamped to 0', () => {
    expect('hello'.includes('hello', -5)).toEqual(true);
    expect('hello'.includes('hello', -Infinity)).toEqual(true);
});

test('start parameter: NaN is treated as 0', () => {
    expect('hello'.includes('hello', NaN)).toEqual(true);
    expect('hello'.includes('hello', undefined)).toEqual(true);
});

test('start parameter: beyond string length', () => {
    // non-empty search: not found when start is clamped past last occurrence
    expect('hello'.includes('h', 10)).toEqual(false);
    // empty search: per spec start is clamped to len (5), empty string found there → true
    expect('hello'.includes('', 10)).toEqual(true);
});

test('search parameter: null and undefined are coerced to string', () => {
    expect('null'.includes(null)).toEqual(true);
    expect('nullified'.includes(null)).toEqual(true);
    expect('nothing'.includes(null)).toEqual(false);
    expect('undefined'.includes(undefined)).toEqual(true);
    expect('undef'.includes(undefined)).toEqual(false);
});

test('search parameter: empty string is always found', () => {
    expect('hello'.includes('')).toEqual(true);
    expect(''.includes('')).toEqual(true);
    expect('hello'.includes('', 5)).toEqual(true);
});

test('search parameter: RegExp throws TypeError', () => {
    expect(() => 'hello'.includes(/hello/)).toThrow(TypeError);
    expect(() => 'hello'.includes(/./)).toThrow(TypeError);
});

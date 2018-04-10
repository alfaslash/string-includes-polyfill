/* global test, expect */
test('Base tests without types converted', () => {
    String.prototype.includes = undefined;
    require('../string-includes-polyfill');

    const testString = 'Built for developers';

    expect(testString.includes('Built')).toEqual(true);
    expect(testString.includes('Build')).toEqual(false);
    expect(testString.includes('built')).toEqual(false);
    expect(testString.includes('Built for')).toEqual(true);
    expect(testString.includes(' ')).toEqual(true);
    expect(testString.includes('for')).toEqual(true);
    expect(testString.includes('for  developers')).toEqual(false);
});

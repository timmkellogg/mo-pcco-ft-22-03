const { hello, myName } = require('./hello.js');

test('outputs the correct string', () => {
    expect(hello()).toBe('Hello World!');
})

test('checks that name is Tim', () => {
    expect(myName).toBe('Tim');
})
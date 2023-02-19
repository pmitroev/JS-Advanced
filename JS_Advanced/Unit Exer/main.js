const { assert } = require("chai");

function sum(a, b) {
    return a + b;
}

describe('main test', () => {
    it('test with these numbers', () => {
        assert.equal(sum(3,5), 8);
    });
});
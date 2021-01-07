const operations = require('./node_operations');

describe ('Return Head Value', () => {
    it('Head Value of [1,2,3] is 1', () => {
        expect(operations([1,2,3])).toEqual(1);
    });
})


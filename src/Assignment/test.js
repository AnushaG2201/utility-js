const operations = require('./node_operations');

describe ('Return Head Value', () => {
    it('Head Value of [] is undefined', () => {
        expect(operations.head([])).toEqual(undefined);
    });
    it('Head Value of [1,2,3] is 1', () => {
        expect(operations.head([1,2,3])).toEqual(1);
    });
})

describe ('Return Tail value' , () => {
    it('Tail value of [1,2,3] is [2,3]' , () => {
        expect(operations.tail([1,2,3])).toEqual([2,3]);
        });
    it('Tail value of [] is []' , () => {
        expect(operations.tail([])).toEqual([]);
        });
})

describe ('Return Mapped Operation' , () => {
    it('Mapped value of ([],cube) is []', () =>{
        expect(operations.map([2],cube())).toEquals([8]);
        });
     })

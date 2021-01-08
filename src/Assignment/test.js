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
    afterEach(() => {
    sandbox..restore();
    })
    it('Mapped value of ([2,3,4],cube) is [8,27,64]', () =>{
        expect(operations.map([2, 3, 4],operations.storeCube)).toEqual([8, 27, 64]);
        });
    it('Mapped value of [] is []' , () => {
        expect(operations.map([],operations.storeCube)).toEqual([])
        });
     })

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

    it('Mapped value of [] is []' , () => {
       expect(operations.map([],operations.storeCube)).toEqual([])
       });

    it('Mapped value of ([2,3,4],cube) is [8,27,64]', () =>{
        expect(operations.map([2, 3, 4],operations.storeCube)).toEqual([8, 27, 64]);
        });

     })

describe ('Return Value according to filter', () => {

    it('Filter of [],true is []', () =>{
    expect(operations.filter([],true)).toEqual([]);
       });

    it('Filter of [1, 2, 3],true is [1, 2, 3]', () =>{
        expect(operations.filter([1, 2, 3],true)).toEqual([1, 2, 3]);
        });

    it('Filter of [1, 2, 3],false is []', () =>{
        expect(operations.filter([1, 2, 3], false)).toEqual([])
        });

    })

describe('Return the maximum Value in an array', () => {
    it('Maximum of [1,2,3,4] is 4', () => {
        expect(operations.max([1,2,3,4])).toEqual(4)
        });
        })

describe('Return the minimum value in an array', () => {
    it('The minimum of [1,2,3,4] is 1', () => {
        expect(operations.min([1,2,3,4])).toEqual(1)
        });
        })

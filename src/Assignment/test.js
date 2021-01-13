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
        var cube = (num) => Math.pow(num, 3);
       expect(operations.map([],cube)).toEqual([])
       });

    it('Mapped value of ([2,3,4],cube) is [8,27,64]', () =>{
        var cube = (num) => Math.pow(num, 3);
        expect(operations.map([2, 3, 4],cube)).toEqual([8, 27, 64]);
        });

    it('Mapped value of ([2, 3, 4],identity) is [2, 3, 4]', () =>{
            var identity = (num) => num*1;
            expect(operations.map([2, 3, 4],identity)).toEqual([2, 3, 4]);
            });

    it('Mapped value of ({x:10},object) is [11]', () => {
        var a = [{x:10}];
        var object = (num) => (num.x)+1;
        expect(operations.map(a,object)).toEqual([11]);
         });

     })

describe ('Return Value according to filter', () => {

    it('Filter of [],true is []', () =>{
        var returnTrue = (num) => num;
        expect(operations.filter([],returnTrue)).toEqual([]);
       });

    it('Filter of [1, 2, 3],true is [1, 2, 3]', () =>{
        var returnTrue = (num) => num;
        expect(operations.filter([1, 2, 3], returnTrue)).toEqual([1, 2, 3]);
        });

    it('Filter of [1, 2, 3],false is []', () =>{
        var returnFalse = (num) => !num;
        expect(operations.filter([1, 2, 3], returnFalse)).toEqual([]);
        });

    it('Filter of [1,2,3],1 is [2,3]', () => {
        var filterValuesGreaterThanX = (num) => num > 1;
        expect(operations.filter([1, 2, 3], filterValuesGreaterThanX)).toEqual([2, 3]);
        });

    it('Filter of ["a,B,c,D"],filterUpperCase is ["B,D"]', () => {
        var filterUpperCase = (char) => char > 'A' && char < 'Z';
        expect(operations.filter(['a','B','c','D'], filterUpperCase)).toEqual['B','D'];
         });
    })

describe('Return the maximum Value in an array', () => {
    it('Maximum of [1,2,3,4] is 4', () => {
        expect(operations.max([1,2,3,4])).toEqual(4);
        });
})

describe('Return the minimum value in an array', () => {
    it('The minimum of [1,2,3,4] is 1', () => {
        expect(operations.min([1,2,3,4])).toEqual(1)
        });
})

describe('Reduce functionality' , () => {
    var reduce = (x,y) => x+y;
    it('The reduce of [],(x,y) is []', () => {
        expect(operations.reduce([],reduce)).toEqual([]);
    });
    it('The reduce of [1,2,3],(x,y) is [6]', () => {
        expect(operations.reduce([1,2,3],reduce)).toEqual(6);
     });
     it('The reduce of [a,b,c],(x,y) is [abc]', () => {
         expect(operations.reduce(['a','b','c'],reduce)).toEqual('abc');
      });
      it('The reduce of [1,2,3],(x,y,5) is [11]', () => {
         expect(operations.reduce([1,2,3],reduce,5)).toEqual(11);
      });
      it('The reduce of [a,b,c],(x,y) is [abc]', () => {
         expect(operations.reduce(['a','b','c'],reduce,'z')).toEqual('zabc');
      });

})

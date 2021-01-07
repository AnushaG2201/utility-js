const add = require('./add');
const head = require('./head');
describe('Add', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(add(1, 0)).toEqual(1);
    });

})
describe('Return Head', () =>{
    it('Head value of [1,2,3] is 1',() => {
        expect(head([1,2,3])).toEqual(1);
       })
})

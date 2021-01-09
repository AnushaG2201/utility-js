//global.mapResult = [];
const head = (arr) => {
    if(arr == null)
        return undefined;
     return arr[0];
}

const tail = (arr) => {
     if(arr == null)
        return arr;
      return arr.slice(1);
 }

const map = (arr,mapOperation) => {
             var mapResult;
             mapResult = arr.map(mapOperation);
             return mapResult;
 }
var returnCube = (num) => Math.pow(num,3);
var returnIdentity = (num) => num * 1;
var returnObject = (obj) => obj.x+1;

const filter = (arr, filterOperation) => {
      if(arr.length == 0)
        return arr;
       var result;
       result = arr.filter(filterOperation);
       return result;
}

var filterUpperCase = (char) => char > 'A' && char < 'Z';
var returnTrue = (num) => num;
var returnFalse = (num) => !num;
var filterValuesGreaterThanX = (num, x) => num > 1;

const reduce = (arr,reducerFunc) => {
      if(arr.length == 0)
          return arr;
       var result;
       result = arr.reduce(reducerFunc);
       return result;
}

var returnReduce = (x,y) => x+y;

const max = (arr) => {
       return Math.max(...arr);
}

const min = (arr) => {
       return Math.min(...arr);
}



module.exports = {head:head,
tail:tail,
map:map,
returnCube:returnCube,
returnIdentity:returnIdentity,
returnObject:returnObject,
filter:filter,
filterUpperCase:filterUpperCase,
filterValuesGreaterThanX:filterValuesGreaterThanX,
returnFalse:returnFalse,
returnTrue:returnTrue,
max:max,
min:min,
returnReduce:returnReduce,
reduce:reduce};
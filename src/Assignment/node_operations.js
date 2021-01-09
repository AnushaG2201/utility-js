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

 const map = (arr, operation) => {
        mapResult = operation(arr);
        return mapResult;
}
var storeCube = (arr) => {
    var result = arr.map((num) => {
        return Math.pow(num,3)})
    return result;
    }
var returnIdentity = (arr) => {
    var result = arr.map((num) => {
        return num*1;
     })
     return result;
        }
var returnObject = (arr) => {
        var result = arr.map((obj) => {
        return obj.x+1})
       return result;
        }

const filter = (arr,x) => {
    var result ;
    result = arr.filter(x);
    if(x == true)
     result = arr.filter(x => true);
    if(typeof(x) == "number")
     result = filterValuesGreaterThanX(arr, x);
    return result;
    }
var filterUppercase = (arr) => (char => char > 65 && char < 90)
}

var filterValuesGreaterThanX = (arr, x) => {
var res = arr.filter(num => num > x);
return res;
}

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



module.exports = {head:head, tail:tail, map:map, storeCube:storeCube, filter:filter, max:max, min:min,filterUppercase:filterUppercase,filterValuesGreaterThanX:filterValuesGreaterThanX,returnIdentity:returnIdentity,returnObject:returnObject,returnReduce:returnReduce,reduce:reduce};
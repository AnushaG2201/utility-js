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
 var mapResult = [];
 mapFunctions(mapResult,arr,mapOperation);
 return mapResult;
}

var mapFunctions = (mapResult, arr, mapOperation) => {
    if(arr.length != 0){
    var num  = arr.shift();
    mapResult.push(mapOperation(num));
    mapFunctions(mapResult,arr,mapOperation);
    }
}

var returnCube = (num) => Math.pow(num, 3);
var returnIdentity = (num) => num*1;
var returnObject = (num) => (num.x)+1;


const filter = (arr, filterOperation) => {
       var filterResult = [];
       filterFunctions(filterResult, arr, filterOperation);
       return filterResult;
}

var filterFunctions = (filterResult, arr, filterOperation) => {
      if(arr.length != 0){
           var num = arr.shift();
           var result = filterOperation(num);
           if(result)
                filterResult.push(num);
           filterFunctions(filterResult, arr, filterOperation)
           }
}

var filterUpperCase = (char) => char > 'A' && char < 'Z'
var returnTrue = (num) => num;
var returnFalse = (num) => !num;
var filterValuesGreaterThanX = (num) => num > 1;


const reduce = (arr,reducerFunc,additionalValue) => {
    var reduceResult;
    if(arr.length == 0)
        return arr;
    if(!additionalValue){
        if(typeof(arr[0]) == "number")
            reduceResult = 0;
        else if(typeof(arr[0]) == "string")
            reduceResult="";
      }
    else
        reduceResult = additionalValue;
    console.log(reduceResult);
    reduceResult = reducer(reduceResult, arr, reducerFunc);
    return reduceResult;
 }
var reducer = (reduceResult, arr, reducerFunc) => {
    if(arr.length != 0) {
        var num = arr.shift();
    reduceResult = reducerFunc(reduceResult,num);
    return reducer(reduceResult, arr, reducerFunc);
  }
    return reduceResult;
}
var returnReduce = (x,y) => x+y;

const max = (arr) => {
    var max = 0;
    var result = maxFinder(arr, max);
    return result;
}
const maxFinder = (arr, max) => {
    if(arr.length != 0)
    {
    var num = arr.shift();
    max = maxFinder(arr, Math.max(num, max));
    }
return max;
}

const min = (arr) => {
    var min = 9999;
    var result = minFinder(arr, min);
    return result;
}
const minFinder = (arr, min) => {
    if(arr.length != 0)
    {
    var num = arr.shift();
    min = minFinder(arr, Math.min(num, min));
    }
return min;
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
maxFinder:maxFinder,
minFinder:minFinder,
returnReduce:returnReduce,
reduce:reduce,
};
//returnReduceWithValues:returnReduceWithValues};
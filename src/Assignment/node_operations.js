global.array = [];
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

 const map = (arr, cube) => {
    if(arr.length != 0){
        var numToBeCubed=arr.shift();
        var cubedValue = cube(numToBeCubed);
        array.push(cubedValue);
        console.log(array.length);
        map(arr,cube);
        }
        return array;
}
var storeCube = (arrVariable) => {
    var result = arrVariable*arrVariable*arrVariable;
    return result;
    }

const filter = (arr,x) => {
    if(x == true)
    return arr;
    else{
    arr = [];
    return arr;
    }
    }

const max = (arr) => {
       //var maxValue = arr.reduce(function(value1,value2) {
       return Math.max(...arr);
      // });
       }
const min = (arr) => {
       return Math.min(...arr);
       }

module.exports = {head:head, tail:tail, map:map, storeCube:storeCube, filter:filter, max:max, min:min};
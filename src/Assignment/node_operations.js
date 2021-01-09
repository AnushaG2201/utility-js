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
   //console.log(arr,x);
    var result ;
    result = filterUppercase(arr);
    //result = filterValuesGreaterThanX(arr, 1);
    if(x == true)
     result = arr.filter(x => true);
    if(typeof(x) == "number")
     result = arr.filter(num => num > x);
    return result;
    }
var filterUppercase = (arr) => {
var res = arr.filter(char => char > 65 && char < 90)
return res;
}

//var filterValuesGreaterThanX(arr, x) => {
//var res = arr.filter(num => num > x);
//return res;
//}



const max = (arr) => {
       return Math.max(...arr);
       }
const min = (arr) => {
       return Math.min(...arr);
       }

const reduce = (arr,reducer) => {

    }

module.exports = {head:head, tail:tail, map:map, storeCube:storeCube, filter:filter, max:max, min:min,filterUppercase:filterUppercase};
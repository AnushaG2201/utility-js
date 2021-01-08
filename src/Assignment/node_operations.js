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

 const map = (arr, cube => {
 return arr[0]*arr[0]*arr[0]}) => {
 return cube();
 }

module.exports = {head:head, tail:tail, map:map};
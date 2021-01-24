const head = ([head,...tail]) => {
     return head;


const tail = ([first,...tail]) => {
     return tail;
 }

const map = ([head,...tail], operation) => {
        if(head == undefined) return [];
        return tail.length == 0?[operation(head)]:[operation(head)].concat(map(tail,operation))
}

const filter = ([head,...tail],operation) => {
    const cube = operation(head)? [head] : [];
    return tail.length == 0 ? cube :[...cube].concat(filter(tail, operation));
}

const reduce = ([head,...tail],operation,initialValue) => {
if(head == undefined) return [];
if(!initialValue){
    var [ newHead,...newTail] = tail;
    return reduce(newTail,operation,operation(head,newHead));
    }
return tail.length ==0 ? operation(initialValue,head): reduce(tail,operation,operation(initialValue,head));
}

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

module.exports = {
head,
tail,
map,
filter,
reduce,
};

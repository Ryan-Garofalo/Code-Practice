
function dropElements(arr, func) {
console.log(arr.find(func));

}


dropElements([1, 2, 3, 4], function(n) {return n >= 3;})

function diffArray(arr1, arr2) {
    var newArr = [];

    arr1.forEach(num => {
        let index = arr2.indexOf(num);
        if (inOrOut === -1) {
            newArr.push(num);
        }
    });
    arr2.forEach(num => {
        let inOrOut = arr1.indexOf(num);
        if (inOrOut === -1) {
            newArr.push(num);
        }
    });

    console.log(newArr);
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

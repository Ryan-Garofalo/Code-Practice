function factorialize(num) {
    let answer = 1;
    let arr = [];

    if (num === 0) return answer;

    for (var i = 1; i < num + 1; i++) {
        arr.push(i);
    }

    answer = arr.reduce((num1, num2) => num1 * num2);
}

factorialize(0);

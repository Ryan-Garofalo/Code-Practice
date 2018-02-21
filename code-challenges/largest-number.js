function largestOfFour(arr) {
    const answer = [];

    for (var i = 0; i < arr.length; i++) {
        let king = 0;
        for (var b = 0; b < arr[i].length; b++) {
            if (arr[i][b] > king) {
                king = arr[i][b];
            }
        }
        answer.push(king);
    }
    return answer;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

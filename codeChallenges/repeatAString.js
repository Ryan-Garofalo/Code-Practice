function repeatStringNumTimes(str, num) {
    let answer = "";

    for (var i = 0; i < num; i++) {
        answer = answer.concat(str);
    }

    return answer;
}

// repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4)

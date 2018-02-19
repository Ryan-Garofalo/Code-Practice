function titleCase(str) {
    let answer = "";
	let boom = []

    str = str.toLowerCase();
    str = str.split(" ");

    str.forEach(word => {
		console.log(i);
        let capitalLetter = word.charAt(0).toUpperCase();
        let slice = word.slice(1);
        let answer2 = capitalLetter + slice;
        boom.push(answer2)
    });
	return boom.join(' ');
}

titleCase("I'm a little tea pot");

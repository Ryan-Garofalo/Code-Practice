function findUniq(arr) {

	const number= arr[0]


	const answer = arr.filter((num ) => num !== number)

	return answer[0];
}

findUniq([ 1, 1, 1, 2, 1, 1 ]);


function chunkArrayInGroups(arr, size) {
  // Break it up.
 const answer = [];

  for (var i = 0; i < arr.length; i+=size) {
  	answer.push(arr.slice(i, i + size))
  }



console.log(answer);




}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

function findLongestWord(str) {
	let strArr = str.split(' ');

	let lengthArr = strArr.map( string => {
		return string.length
	})

	return Math.max(...lengthArr)
}

findLongestWord("The quick brown fox jumped over the lazy dog");

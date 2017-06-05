
function chunkArrayInGroups(arr, size) {
	var ansArr = [];

	for(var i = 0; i < arr.length; i += size) {
		ansArr.push(arr.slice(i, i + size));
	}

	return ansArr;
}

var ans = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(ans)
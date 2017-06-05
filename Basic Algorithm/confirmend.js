function confirmEnding(str, target) {
	let len = target.length * -1

	return str.substr(len) === target
}

confirmEnding("Bastian", "n");

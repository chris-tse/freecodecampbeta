function truncateString(str, num) {
	if(str.length <= num)
		return str
	else {
		return str.substr(0, num) + "...";
	}
}


console.log(truncateString("Absolutely Longer", 2))
function titleCase(str) {
	var strArr = str.toLowerCase().split(' ');
	for(var i = 0; i < strArr.length; i++) {
		strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
	}
  	return strArr.join(' ');
}

titleCase("I'm a little tea pot");

function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^0-9a-z]/gi,'');
  
  var strArr = str.split('');
  var revArr = strArr.reverse();

  var newstr = revArr.join('');

  if(newstr === str) 
  	return true;
  else
  	return false
}



console.log(palindrome("neye"));
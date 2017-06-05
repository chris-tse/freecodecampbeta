function palindrome(str) {
  str = str.replace(/[\W_]/g, '').toLowerCase()
  console.log(str)
  let arr = Array.from(str.replace(/[\W_]/g, '').toLowerCase())

  let newStr = arr.reverse().join("")
  console.log(newStr)
  return (newStr === str ? true : false)
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));
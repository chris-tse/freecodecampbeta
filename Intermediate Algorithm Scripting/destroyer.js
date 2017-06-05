function kill(arr, target) {
    return arr.filter( el => {
        return el !== target
    })
}

function destroyer(arr) {
    let prevArr = arr
    let newArr
    for(var i = 1; i < arguments.length; i++) {
        newArr = kill(prevArr, arguments[i])
        prevArr = newArr
    }
    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


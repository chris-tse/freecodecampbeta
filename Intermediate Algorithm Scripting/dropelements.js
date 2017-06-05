function dropElements(arr, func) {
    let flag = false
    let result = arr.concat([])
    for (let i = 0; i < arr.length; i++) {
        flag = func(arr[i])

        if (!flag) {
            result.shift()
        } else {
            break
        }
    }
    console.log(result)
    return result
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2; });

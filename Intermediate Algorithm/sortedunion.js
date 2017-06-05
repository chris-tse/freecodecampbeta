function uniteUnique(arr) {
    let result = []

    result = result.concat(arr)

    for(let i = 1; i < arguments.length; i++) {
        result = result.concat(arguments[i].filter( item => {
            if(arr.indexOf(item) < 0)
                return item
        }))
    }

    console.log(result)
    return result
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

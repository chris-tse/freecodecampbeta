function steamrollArray(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce( (acc, next) => {
            return acc.concat(steamrollArray(next))
        }, [])
    } else {
        return arr
    }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))

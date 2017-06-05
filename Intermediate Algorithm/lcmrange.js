function gcd(a, b) {
    while (a !== b) {
        if (a > b)
            a -= b
        else
            b -= a
    }

    return a
}

function lcm(a, b) {
    return (a * b)/gcd(a, b)
}

function range(a, b) {
    let arr = []

    if (a < b)
        for (let i = a; i <= b; i++)
            arr.push(i)
    else
        for (let i = b; i <= a; i++)
            arr.push(i)

    return arr
}

function smallestCommons(arr) {
    let numArr = range(arr[0], arr[1])

    let commonlcm = numArr.reduce( (acc, num) => {
        return lcm(num, acc)
    }, arr[0])

    return commonlcm
}


smallestCommons([23,18]);

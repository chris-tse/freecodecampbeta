function sumFibs(num) {
    if (num <= 0)
        return 0

    if (num === 1)
        return 2

    let prev = 1
    let curr = 1

    let toAdd = [1, 1]

    while (curr <= num) {
        let newCurr = prev + curr
        prev = curr
        curr = newCurr

        if (curr % 2 !== 0 && curr <= num) {
            toAdd.push(curr)
        }
    }

    let sum = toAdd.reduce( (acc, num) => {
        return acc + num
    }, 0)

    return sum
}

sumFibs(75025)
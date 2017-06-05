function isPrime(n) {
    if (n < 2)
        return false
    if (n == 2)
        return true
    else {
        let i = 2
        while (i*i <= n) {
            if (n % i === 0)
                return false
            i++
        }
        return true
    }
}

function getPrimes(num) {
    let arr = [2]

    for (let i = 3; i <= num; i++) {
        if (isPrime(i)) {
            arr.push(i)
        }
    }

    return arr
}

function sumPrimes(num) {
    let primeArr = getPrimes(num)

    let sum = primeArr.reduce( (acc, num) => {
        return acc + num
    }, 0)
    console.log(sum)
    return sum
}

sumPrimes(977);
function addTogether() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return undefined
        }
    }

    console.log("arguments:", arguments)
    if (arguments.length === 1) {
        console.log("length was 1")
        console.log("argument is", arguments[0])
        let oldArg = arguments[0]
        return function (b, a = oldArg) {
            console.log("thing inside func is:", a)
            if (typeof b !== 'number')
                return undefined
            else
                return a + b
        }
    } else {
        console.log("length was more than 1")
        return arguments[0] + arguments[1]
    }
}

console.log(addTogether(2)(3))

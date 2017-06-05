function rot13(str) { // LBH QVQ VG!
    let strArr = Array.from(str)
    let codeArr = strArr.map( char => {
        return char.charCodeAt(0)
    })

    console.log(codeArr)

    let newCodeArr = codeArr.map( code => {
        if (code >= 65 && code <= 90) {
            let newCode = code - 13

            if (newCode >= 65)
                return newCode
            else
                return (90 - (65 - (newCode + 1)))
        } else {
            return code
        }
    })

    let result = String.fromCharCode(...newCodeArr)
    console.log(result)
    return result

}

// Change the inputs below to test
//rot13("ABC XYZ");
rot13("SERR CVMMN!");

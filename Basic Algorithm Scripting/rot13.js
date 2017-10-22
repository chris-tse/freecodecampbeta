function rot13(str) { // LBH QVQ VG!
    // split into array of char codes
    let codeArr = str.split('').map(char => char.charCodeAt())

    // loop through char codes and calculate original char codes
    let origCodeArr = codeArr.map( code => {

        // do computation on char code if it is code of alphabet, else return with no computation
        if (code >= 65 && code <= 90) {
            let newCode = code - 13

            // if subtract 13 doesn't go below 'A' (65) return
            if (newCode >= 65) {
                return newCode
            }
            // else loop around from 'Z' (90)
            else {
                return 90 - (65 - (newCode + 1))
            }
        } else {
            return code
        }
    })

    return String.fromCharCode(...origCodeArr)

}

// Change the inputs below to test
//rot13("ABC XYZ");
console.log(rot13("SERR PBQR PNZC"))
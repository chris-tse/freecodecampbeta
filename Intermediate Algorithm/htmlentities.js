function convertHTML(str) {
    let strArr = Array.from(str)

    strArr = strArr.map( item => {
        switch(item) {
            case '&':
                return "&amp;"
            case '<':
                return "&lt;"
            case '>':
                return "&gt;"
            case '"':
                return "&quot;"
            case "'":
                return "&apos;"
            default:
                return item
        }
    })

    let result = strArr.join("")
    console.log(result)
    return result
}

convertHTML("Dolce & Gabbana");

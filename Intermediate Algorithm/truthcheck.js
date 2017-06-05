function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        console.log(collection[i].hasOwnProperty(pre))
        if (!collection[i].hasOwnProperty(pre)) {
            console.log(collection[i])
            console.log(`Object did not have prop ${pre}`)
            return false
        } else {
            console.log(collection[i])
            console.log(`Object did have prop ${pre}`)
            console.log(collection[i][pre])
            if(!collection[i][pre]) {
                return false
            }
        }
    }
    return true
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
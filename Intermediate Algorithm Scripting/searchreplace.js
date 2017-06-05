function isCapital(char) {
    if (char === char.toUpperCase())
        return true
    else
        return false
}

function myReplace(str, before, after) {
    // let beforeArr = Array.from(before)
    // let afterArr = Array.from(after)

    if (isCapital(before[0]))
        after = after.replace(after[0], after[0].toUpperCase())

    console.log(str.replace(before, after))
    return str.replace(before, after)
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

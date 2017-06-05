function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(char) >= 0
}

function getFirstVowel(str) {
    for (let i = 0; i < str.length; i++) {
        if(isVowel(str[i])) {
            return i
        }
    }
}

function translatePigLatin(str) {
    let firstVowel = getFirstVowel(str)
    console.log(firstVowel)
    if (firstVowel <= 0) {
        console.log(str+"way")
        return str + "way"
    } else {
        let chunk = str.slice(0, firstVowel)
        str = str.replace(chunk, "")
        str += chunk + "ay"
        console.log(str)
        return str
    }
}

translatePigLatin("zzzxxxxzz");

function mutation(arr) {
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();

    for(var i = 0; i < secondWord.length; i++) {
        if(!firstWord.includes(secondWord.charAt(i)))
            return false;
    }
    return true;
}

mutation(["hello", "hey"]);
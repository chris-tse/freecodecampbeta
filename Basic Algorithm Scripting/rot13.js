function rot13(str) { // LBH QVQ VG!
    var codeArr = [];
    for (var i = 0; i < str.length; i++) {
        codeArr.push(str.charCodeAt(i))
    }
    console.log(str.split(''));
    console.log(codeArr);
    for (var i = 0; i < codeArr.length; i++) {
        if(codeArr[i] >= 65 && codeArr[i] <= 90) {
            var change = codeArr[i] - 13;
            if(change >= 65)
                codeArr[i] = change;
            else
                codeArr[i] = 90 - (65 - (change+1));
        }
    }
    console.log(String.fromCharCode.apply(null, codeArr));
    console.log(codeArr);

    return String.fromCharCode.apply(null, codeArr);

}

// Change the inputs below to test
//rot13("ABC XYZ");
rot13("SERR PBQR PNZC");

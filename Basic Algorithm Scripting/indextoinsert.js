function getIndexToIns(arr, num) {
    arr = arr.sort(function(a, b) {
        return a-b;
    });

    for (var i = 0; i < arr.length; i++) {
        if(num <= arr[i])
            return i;
    }
    return arr.length;
}

getIndexToIns([40, 60], 50);
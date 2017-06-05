function kill(num) {
    return function(target) {
        return num !== target;
    };
};

function destroyer(arr) {
    for(var i = 1; i < arguments.length; i++) {

        arr = arr.filter(kill(arguments[i]));
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

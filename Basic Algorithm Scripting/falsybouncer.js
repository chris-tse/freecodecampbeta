
function bouncer(arr) {
    return arr.filter(function(val) {
        if (val !== '' || val !== false) {
            return val;
        }
    });
}

bouncer([7, "ate", "", false, 9]);

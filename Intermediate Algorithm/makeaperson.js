var Person = function(firstAndLast) {

    // Complete the method below and implement the others similarly
    this.getFullName = function() {
        return firstAndLast;
    }

    this.getFirstName = function() {
        return firstAndLast.split(" ")[0]
    }

    this.getLastName = function() {
        return firstAndLast.split(" ")[1]
    }

    this.setFirstName = function(first) {
        let splitName = firstAndLast.split(" ")
        splitName[0] = first
        firstAndLast = splitName.join(" ")
    }
    this.setLastName = function(last) {
        let splitName = firstAndLast.split(" ")
        splitName[1] = last
        firstAndLast = splitName.join(" ")
    }

    this.setFullName = function(full) {
        firstAndLast = full
    }
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName())
console.log(bob.getFullName())
bob.setFirstName("John")
console.log(bob.getFirstName())



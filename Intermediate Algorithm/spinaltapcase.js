
function spinalCase(str) {
    return str.replace(/[\W_]/g, '-')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase()
}

console.log(spinalCase("This Is Spinal Case"))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))

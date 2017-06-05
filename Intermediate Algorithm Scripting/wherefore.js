function whatIsInAName(collection, source) {
    let targetKeys = Object.keys(source)

    for (let i = 0; i < targetKeys.length; i++) {
        let targetKey = targetKeys[i]
        let targetVal = source[targetKey]
        collection = collection.filter( item => {
            if (targetKey in item)
                if (item[targetKey] === targetVal)
                    return item
        })
    }

    return collection
}


console.log(whatIsInAName([{first: "Fat", dingus: "last"}, { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
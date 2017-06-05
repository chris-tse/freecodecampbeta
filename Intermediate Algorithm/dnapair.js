function pairElement(str) {
    let myMap = new Map()

    myMap.set('G', 'C')
    myMap.set('C', 'G')
    myMap.set('A', 'T')
    myMap.set('T', 'A')

    let input = Array.from(str)

    let result = input.map( item => {
        return Array(item, myMap.get(item))
    })

    return result
}

pairElement("GCG");

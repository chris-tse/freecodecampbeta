function convertToRoman(num) {
    let result = ""

    let myMap = new Map()
    myMap.set(0, "")
    myMap.set(1, "I")
    myMap.set(2, "II")
    myMap.set(3, "III")
    myMap.set(4, "IV")
    myMap.set(5, "V")
    myMap.set(6, "VI")
    myMap.set(7, "VII")
    myMap.set(8, "VIII")
    myMap.set(9, "IX")
    myMap.set(10, "X")
    myMap.set(20, "XX")
    myMap.set(30, "XXX")
    myMap.set(40, "XL")
    myMap.set(50, "L")
    myMap.set(60, "LX")
    myMap.set(70, "LXX")
    myMap.set(80, "LXXX")
    myMap.set(90, "XC")
    myMap.set(100, "C")
    myMap.set(200, "CC")
    myMap.set(300, "CCC")
    myMap.set(400, "CD")
    myMap.set(500, "D")
    myMap.set(600, "DC")
    myMap.set(700, "DCC")
    myMap.set(800, "DCCC")
    myMap.set(900, "CM")



    let thousands = Math.floor(num / 1000)

    for (let i = 0 ; i < thousands; i++) {
        result += "M"
    }
    num -= (thousands * 1000)

    let hundreds = Math.floor(num / 100) * 100
    result += myMap.get(hundreds)
    num -= hundreds

    let tens = Math.floor(num / 10) * 10
    result += myMap.get(tens)
    num -= tens

    result += myMap.get(num)



    console.log(result)
    return result;
}

convertToRoman(400)

function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;

    let result = arr.map( item => {
        let r = earthRadius + item.avgAlt

        let period = Math.round(2 * Math.PI * Math.sqrt((Math.pow(r, 3))/GM))


        console.log(period)

        return {
            name: item.name,
            orbitalPeriod: period
        }
    })
    console.log(result)
    return result;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

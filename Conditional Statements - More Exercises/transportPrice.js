function transportPrice(numKilometres, travelDayOrNight) {

    let price = 0;

    if (numKilometres < 20) {
        taxiEntryFee = 0.7;
        if (travelDayOrNight === "day") {
            dayRate = 0.79;
            price = taxiEntryFee + numKilometres * dayRate
        } else if (travelDayOrNight === "night") {
            nightRate = 0.9;
            price = taxiEntryFee + numKilometres * nightRate
        }
    } else if (numKilometres >= 20 && numKilometres <= 99) {
        busRate = 0.09;
        price = busRate * numKilometres;
    } else if (numKilometres >= 100) {
        trainRate = 0.06;
        price = trainRate * numKilometres;
    }

    console.log(price.toFixed(2));

}

transportPrice(25, "day");
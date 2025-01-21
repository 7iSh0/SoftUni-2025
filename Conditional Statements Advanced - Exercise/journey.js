function journey(budget, season) {

    let price = 0;
    let destination = "";
    let holiday = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.3;
            holiday = "Camp";
        } else {
            price = budget *0.7;
            holiday = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.4;
            holiday = "Camp";
        } else {
            price = budget * 0.8;
            holiday = "Hotel";
        }
    } else {
        destination = "Europe";
        price = budget * 0.9;
        holiday = "Camp";
        holiday = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holiday} - ${price.toFixed(2)}`);

}

journey(1500,

    "summer");
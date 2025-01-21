function fishingBoat(budget, season, fishmanCount) {

    price = 0;

    switch(season) {
        case "Spring": 
            price = 3000; 
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if (fishmanCount <= 6) {
        price *= 0.9;
    } else if (fishmanCount <= 11) {
        price *= 0.85;
    } else if (fishmanCount > 12) {
        price *= 0.75;
    }

    if (fishmanCount % 2 === 0 && season != "Autumn") {
        price *= 0.95;
    }

    if (budget >= price) {
        let moneyLeft = budget - price;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = price - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }

}

fishingBoat(2000, "Winter", 13);
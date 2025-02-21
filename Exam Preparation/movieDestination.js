function movieDestination(budget, destination, season, NumOfDays) {

    let price = 0;
    let sum = 0;

    switch(destination) {
        case "Sofia":
            switch(season) {
                case "Winter":
                    price = 17000 * NumOfDays;
                    sum = price + (price * 25) / 100;
                    break;
                case "Summer":
                    price = 12500 * NumOfDays;
                    sum = price + (price * 25) / 100;
                    break;
            } break;
        case "Dubai":
            switch(season) {
                case "Winter":
                    price = 45000 * NumOfDays;
                    sum = price - (price * 30) / 100;
                    break;
                case "Summer":
                    price = 40000 * NumOfDays;
                    sum = price - (price * 30) / 100;
                    break;
            } break;
        case "London":
            switch(season) {
                case "Winter":
                    sum = 24000 * NumOfDays;
                    break;
                case "Summer":
                    sum = 20250 * NumOfDays;
                    break;
            } break;
    }

    if (budget < sum) {
        let moneyNeeded = sum - budget;
        console.log(`The director needs ${moneyNeeded.toFixed(2)} leva more!`);
    } else {
        let moneyLeft = budget - sum;
        console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
    } 
}

movieDestination(400000, "Sofia", "Winter", 20);
movieDestination(1000000, "Dubai", "Summer", 5);
movieDestination(200000, "London", "Summer", 7);
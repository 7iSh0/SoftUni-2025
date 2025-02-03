function matchTickets(budget, category, peopleInGroup) {

    let priceForTicket = 0;

    if (peopleInGroup <= 4) {
        budget *= 0.25
    } else if (peopleInGroup <= 9) {
        budget *= 0.4;
    } else if (peopleInGroup <= 24) {
        budget *= 0.5;
    } else if (peopleInGroup <= 49) {
        budget *= 0.6;
    } else {
        budget *= 0.75;
    }

    if (category === "Normal") {
        priceForTicket = 249.99;
        money = priceForTicket * peopleInGroup;
    } else if (category === "VIP") {
        priceForTicket = 499.99;
        money = priceForTicket * peopleInGroup;
    }

    if (money < budget) {
        let moneyLeft = budget - money;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = money - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }

}

matchTickets(1000, "Normal", 1);
matchTickets(30000, "VIP", 49);
function finalCompetition(numOfDancers, numOfPoints, season, place) {

    let amountWon = numOfDancers * numOfPoints;

    if (place === "Abroad") {
        amountWon += amountWon * 0.50;
    } 

    let amountAfterExpenses = 0;

    switch(place) {
        case "Bulgaria":
            switch(season) {
                case "summer":
                    amountAfterExpenses = 0.05;
                    break;
                case "winter":
                    amountAfterExpenses = 0.08;
                    break;
            }
            break;
        case "Abroad":
            switch(season) {
                case "summer":
                    amountAfterExpenses = 0.10;
                    break;
                case "winter":
                    amountAfterExpenses = 0.15;
                    break;
            }
            break;
    }

    let expensesMoney = amountWon - (amountWon * amountAfterExpenses);
    let moneyForCharity = expensesMoney * 0.75;
    let moneyLeft = expensesMoney - moneyForCharity;
    let moneyForDancers = moneyLeft / numOfDancers;

    console.log(`Charity - ${moneyForCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyForDancers.toFixed(2)}`);
}

finalCompetition(1, 89.5, "summer", "Abroad");
finalCompetition(25, 98, "winter", "Bulgaria");
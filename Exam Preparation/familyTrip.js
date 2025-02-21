function familyTrip(budget, numNights, priceNight, additionalCosts) {

    if (numNights > 7) {
        priceNight *= 0.95;
    }

    let totalSum = priceNight * numNights;
    let budgetOfAdditionalExpenses = budget * (additionalCosts / 100);
    totalSum += budgetOfAdditionalExpenses;

    if (totalSum <= budget) {
        let moneyLeft = budget - totalSum;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    } else {
        let moneyNeeded = totalSum - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }
}

familyTrip(800.50, 8, 100, 2);
familyTrip(500, 7, 66, 15);
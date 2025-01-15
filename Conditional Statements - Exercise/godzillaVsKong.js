function godzillaVsKong(budgetMovie, statsNum, clothOneStats) {

    let decor = budgetMovie * 0.1;
    let priceCloth = statsNum * clothOneStats;

    if (statsNum > 150) {
        priceCloth = priceCloth - priceCloth * 0.1;
    }

    let totalPriceMovie = decor + priceCloth;
    let finalPrice = totalPriceMovie - budgetMovie;

    if (totalPriceMovie <= budgetMovie) {
        let moneyLeft = budgetMovie - totalPriceMovie;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else if (totalPriceMovie > budgetMovie) {
        let moneyNeeded = totalPriceMovie - budgetMovie;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }

}

godzillaVsKong(9587.88, 222, 55.68);
function backToThePast(inheritedMoney, yearUntilLive) {

    let firstAge = 18;

    for (let firstYear = 1800; firstYear <= yearUntilLive; firstYear++) {
        if (firstYear % 2 === 0) {
            inheritedMoney -= 12000;
            firstAge++;
        } else {
            firstAge++;
            inheritedMoney -= 12000 + 50 * firstAge;
        }
    }

    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`);
    } else {
        let moneyNeeded = -inheritedMoney;
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    }
}

backToThePast(50000, 1802);
backToThePast(100000.15, 1808);
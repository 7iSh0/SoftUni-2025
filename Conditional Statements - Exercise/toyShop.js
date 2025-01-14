function toyShop(tripPrice, puzzelCount, dollCount, bearCount, minnionCount, truckCount) {

    let priceOfToys = puzzelCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minnionCount * 8.20 + truckCount * 2;
    let numOfToys = puzzelCount + dollCount + bearCount + minnionCount + truckCount;
    
    if (numOfToys >= 50) {
        priceOfToys *= 0.75;
    }

    let afterRent = priceOfToys * 0.9;

    if (afterRent > tripPrice) {
        let moneyLeft = afterRent - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = tripPrice - afterRent;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}

toyShop(320, 8, 2, 5, 5, 1);
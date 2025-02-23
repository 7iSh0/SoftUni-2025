function miningRig(videoCardPrice, transientPrice, consumedCardPerDay, profitFromOneCard) {

    let numOfCards = 13;
    let transient = 13;
    let remainingComponents = 1000;

    let totalPriceOfCards = videoCardPrice * numOfCards;
    let totalPriceOfTransient = transientPrice * transient;
    let totalMoneySpend = totalPriceOfCards + totalPriceOfTransient + remainingComponents;

    let profitFromCardPerDay = profitFromOneCard - consumedCardPerDay;
    let totalProfitPerDay = numOfCards * profitFromCardPerDay;

    let returnDays = totalMoneySpend / totalProfitPerDay;

    console.log(totalMoneySpend);
    console.log(Math.ceil(returnDays));
}

miningRig(700, 15, 0.20, 2);
miningRig(800, 10, 0.32, 6.4);
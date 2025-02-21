function footballKit(priceOfTshirt, amountToWinBall) {

    let priceOfShorts = priceOfTshirt * 0.75;
    let priceOfSocks = priceOfShorts * 0.20;
    let priceOfButtons = (priceOfTshirt + priceOfShorts) * 2;

    let totalAmount = priceOfTshirt + priceOfShorts + priceOfSocks + priceOfButtons;

    let totalAmountWithDiscount = totalAmount - (totalAmount * 0.15);

    if (totalAmountWithDiscount >= amountToWinBall) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalAmountWithDiscount.toFixed(2)} lv.`);
    } else {
        let neededMoney = amountToWinBall - totalAmountWithDiscount;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
    }
}

footballKit(25, 100);
footballKit(55, 310);
footballKit(59.99, 500);
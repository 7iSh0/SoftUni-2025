function fruitMarket(strawberriesPrice, bananasQuantity, orangesQuantity, raspberriesQuantity, strawberriesQuantity) {

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.8);

    let raspberriesSum = raspberriesPrice * raspberriesQuantity;
    let orangesSum = orangesPrice * orangesQuantity;
    let bananasSum = bananasPrice * bananasQuantity;
    let strawberriesSum = strawberriesPrice * strawberriesQuantity;

    let totalSum = raspberriesSum + orangesSum + bananasSum + strawberriesSum;

    console.log(totalSum.toFixed(2));
}

fruitMarket(48, 10, 3.3, 6.5, 1.7);
fruitMarket(63.5, 3.57, 6.35, 8.15, 2.5);
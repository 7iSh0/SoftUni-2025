function flowerShop(magnoliasNum, hyacinthsNum, rosesNum, cactiNum, giftPrice) {

    let totalPrice = magnoliasNum * 3.25 + hyacinthsNum * 4 + rosesNum * 3.5 + cactiNum * 8;
    let taxes = totalPrice * 0.05;
    let profit = totalPrice - taxes;

    if (giftPrice > profit) {
        remainedMoney =  giftPrice - profit;
        console.log(`She will have to borrow ${Math.ceil(remainedMoney)} leva.`); 
    } else {
        remainedMoney = profit - giftPrice;
        console.log(`She is left with ${Math.floor(remainedMoney)} leva.`);
    }

}

flowerShop(15, 7, 5, 10, 100);
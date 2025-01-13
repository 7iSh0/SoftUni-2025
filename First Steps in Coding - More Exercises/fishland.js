function fishland(priceMackerelKg, priceSpratKg, priceBonitoKg, priceSaffronKg, priceMusselsKg) {

    let priceBonito = priceMackerelKg + priceMackerelKg * 0.60;
    let sumBonito = priceBonitoKg * priceBonito;
    let priceSaffron = priceSpratKg + priceSpratKg * 0.80;
    let sumSaffron = priceSaffronKg * priceSaffron;
    let sumMussels = priceMusselsKg * 7.50;
    let totalSum = sumBonito + sumSaffron + sumMussels;

    console.log(totalSum.toFixed(2));

}

fishland(7.79, 5.35, 9.3, 0, 0);
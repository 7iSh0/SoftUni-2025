function vegetableMarket(priceOfVeg, priceOfFruit, totalKgVeg, totalKgFruit) {

    let bgn = 1;
    let euro = bgn * 1.94;

    let Veg = priceOfVeg * totalKgVeg;
    let Fruit = priceOfFruit * totalKgFruit;
    let totalPrice = (Veg + Fruit) / euro;

    console.log(totalPrice.toFixed(2));
    
}

vegetableMarket(1.5, 2.5, 10, 10);
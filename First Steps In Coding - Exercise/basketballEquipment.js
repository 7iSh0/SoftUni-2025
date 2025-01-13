function basketballEquipment(annualFee) {

    let snickersPrice = annualFee * 0.6;
    let outfitPrice = snickersPrice * 0.8;
    let ballPrice = 1 / 4 * outfitPrice;
    let accessoriesPrice = 1 / 5 * ballPrice;

    let finalPrice = annualFee + snickersPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(finalPrice);
    
}

basketballEquipment(365);

// Цена на тренировките за година: 365 
// Цена на баскетболните кецове: 365 – 40% = 219 
// Цена на баскетболен екип: 219 – 20% = 175.20 
// Цена на баскетболна топка: 1 / 4 от 175.20 = 43.80 
// Цена на баскетболни аксесоари: 1 / 5 от 43.80 = 8.76 
// Обща цена за екипировката: 365 + 219 + 175.20 + 43.80 + 8.76 = 811.7
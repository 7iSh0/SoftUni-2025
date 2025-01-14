function basketballEquipment(annualFee) {

    let snickersPrice = annualFee * 0.6;
    let outfitPrice = snickersPrice * 0.8;
    let ballPrice = 1 / 4 * outfitPrice;
    let accessoriesPrice = 1 / 5 * ballPrice;

    let finalPrice = annualFee + snickersPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(finalPrice);
    
}

basketballEquipment(365);
function suppliesForSchool(penPackage, markerPackage, detergentInLiters, discount) {

    let totalPriceOfPen = penPackage * 5.80;
    let totalPriceOfMarker = markerPackage * 7.20;
    let totalPriceOfDetergent = detergentInLiters * 1.20;
    let totalMaterialsPrice = totalPriceOfPen + totalPriceOfMarker + totalPriceOfDetergent;
    let discountPercent = discount / 100;
    let priceWithDiscount = totalMaterialsPrice * discountPercent;
    let finalPrice = totalMaterialsPrice - priceWithDiscount;

    console.log(finalPrice);
    
}

suppliesForSchool(2, 3, 4, 25);
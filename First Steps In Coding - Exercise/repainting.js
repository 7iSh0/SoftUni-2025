function repainting(naylonCount, paintCount, thinnerCount, hoursMasters) {

    let sumNaylonCount = (naylonCount + 2) * 1.50;
    let sumPaintCount = (paintCount + (paintCount * 0.10)) * 14.50;
    let sumThinnerCount = thinnerCount * 5.00;
    let sumOfBags = 0.40;

    let totalMaterialsPrice = sumNaylonCount + sumPaintCount + sumThinnerCount + sumOfBags;
    let totalSumforMasters = totalMaterialsPrice * 0.3 * hoursMasters;
    let finalPrice = totalMaterialsPrice + totalSumforMasters;

    console.log(finalPrice);
    
}

repainting(10, 11, 4, 8);
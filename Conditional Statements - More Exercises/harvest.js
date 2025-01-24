function harvest(vineyard, grape, wineNeeded, workerCount) {

    let oneLiterWine = 2.5;
    let totalGrape = vineyard * grape;
    let wineProduction = totalGrape * 0.4;
    let totalWine = wineProduction / oneLiterWine;

    if (totalWine >= wineNeeded) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`);
        let wineLeft = totalWine - wineNeeded;
        let wineForPerson = wineLeft / workerCount;
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineForPerson)} liters per person.`);
    } else if (totalWine < wineNeeded) {
        let wineMissing = wineNeeded - totalWine;
        console.log(`It will be a tough winter! More ${Math.floor(wineMissing)} liters wine needed.`);
    }

}

harvest(1020, 1.5, 425, 4);
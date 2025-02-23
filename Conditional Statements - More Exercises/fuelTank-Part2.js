function fuelTank(fuelType, fuelAmount, possessionOfClubCard) {

    let pricePerLiter;

    if (fuelType === "Gasoline") {
        pricePerLiter = 2.22;
    } else if (fuelType === "Diesel") {
        pricePerLiter = 2.33;
    } else if (fuelType === "Gas") {
        pricePerLiter = 0.93;
    } else {
        console.log("Invalid fuel type!");
        return;
    }

    if (possessionOfClubCard === "Yes") {
        if (fuelType === "Gasoline") {
            pricePerLiter -= 0.18;
        } else if (fuelType === "Diesel") {
            pricePerLiter -= 0.12;
        } else if (fuelType === "Gas") {
            pricePerLiter -= 0.08;
        }
    }

    let totalPrice = fuelAmount * pricePerLiter;

    if (fuelAmount >= 20 && fuelAmount <= 25) {
        totalPrice *= 0.92;
    } else if (fuelAmount > 25) {
        totalPrice *= 0.90;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

fuelTank("Gas", 30, "Yes");
fuelTank("Gasoline", 25, "No");
fuelTank("Diesel", 19, "No");
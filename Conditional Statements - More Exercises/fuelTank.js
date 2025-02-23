function fuelTank(fuel, litresOfFuel) {

    fuel = fuel.toLowerCase();

    if (fuel === "diesel" || fuel === "gasoline" || fuel === "gas") {
        if (litresOfFuel >= 25) {
            console.log(`You have enough ${fuel}.`);
        } else {
            console.log(`Fill your tank with ${fuel}!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
}

fuelTank("Kerosene", 200);
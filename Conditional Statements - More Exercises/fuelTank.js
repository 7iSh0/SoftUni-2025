function fuelTank(fuel, litresOfFuel) {

        let validFuel = litresOfFuel >= 25 && litresOfFuel <= 25;
    
        if (!validFuel) {
            console.log("Invalid fuel!");
        } else if (litresOfFuel >= 25) {
            console.log(`You have enough ${fuel}.`);
        } else if (litresOfFuel <= 25) {
            console.log(`Fill your tank with ${fuel}!`);
        } 
    
    }

fuelTank("Kerosene", 200);
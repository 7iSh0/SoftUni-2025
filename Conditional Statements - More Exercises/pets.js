function pets(dayNum, foodLeftInKg, foodPerDayForDog, foodPerDayForCat, foodPerDayForTurtle) {

    let neededFoodForDog = dayNum * foodPerDayForDog;
    let neededFoodForCat = dayNum * foodPerDayForCat;
    let foodPerDayForTurtleInKg = foodPerDayForTurtle / 1000;
    let neededFoodForTurtle = dayNum * foodPerDayForTurtleInKg;

    let totalFood = neededFoodForDog + neededFoodForCat + neededFoodForTurtle;

    if (totalFood <= foodLeftInKg) {
        foodLeft = foodLeftInKg - totalFood;
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else if (totalFood > foodLeftInKg) {
        foodNeeded = totalFood - foodLeftInKg;
        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
    }

}

pets(5, 10, 2.1, 0.8, 321);
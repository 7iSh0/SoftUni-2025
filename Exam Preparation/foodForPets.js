function foodForPets(input) {

    let index = 0;

    let dayCount = Number(input[index]);
    index++;

    let food = Number(input[index]);
    index++;

    let sumTotalEatenFood = 0;
    let sumTotalEatenDog = 0;
    let sumTotalEatenCat = 0;
    let biscuitsCount = 0;

    for (let i = 1; i <= dayCount; i++) {

        let dogEatenFood = Number(input[index]);
        index++;

        let catEatenFood = Number(input[index]);
        index++;

        let sumFoodForDay = dogEatenFood + catEatenFood;

        sumTotalEatenFood += sumFoodForDay;
        sumTotalEatenDog += dogEatenFood;
        sumTotalEatenCat += catEatenFood;

        if (i % 3 === 0) {
            biscuitsCount += sumFoodForDay * 0.10;
        }
    }

    let percentEatenFood = sumTotalEatenFood / food * 100;
    let percentFoodDog = sumTotalEatenDog / sumTotalEatenFood * 100;
    let percentFoodCat = sumTotalEatenCat / sumTotalEatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuitsCount)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);      
    console.log(`${percentFoodDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentFoodCat.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
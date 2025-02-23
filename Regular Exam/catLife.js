function catLife(catBreed, catGender) {

    let catYears = 0;
    let invalidCat = false;

    switch(catGender) {
        case "m":
            switch(catBreed) {
                case "British Shorthair": catYears = 13; break;
                case "Siamese": catYears = 15; break;
                case "Persian": catYears = 14; break;
                case "Ragdoll": catYears = 16; break;
                case "American Shorthair": catYears = 12; break;
                case "Siberian": catYears = 11; break;
                default : console.log(`${catBreed} is invalid cat!`); invalidCat = true; break;
            }
            break;
        case "f":
            switch(catBreed) {
                case "British Shorthair": catYears = 14; break;
                case "Siamese": catYears = 16; break;
                case "Persian": catYears = 15; break;
                case "Ragdoll": catYears = 17; break;
                case "American Shorthair": catYears = 13; break;
                case "Siberian": catYears = 12; break;
                default : console.log(`${catBreed} is invalid cat!`); invalidCat = true; break;
            }
            break;
        default : console.log(`${catBreed} is invalid cat!`); invalidCat = true; break;
    }

    if (!invalidCat) {
        let catMonths = Math.floor((catYears * 12) / 6);
        console.log(`${catMonths} cat months`);
    }
}

catLife("Persian", "m");
catLife("Siamese", "f");
catLife("Siberian", "m");
catLife("Ragdoll", "f");
catLife("Tom", "m");
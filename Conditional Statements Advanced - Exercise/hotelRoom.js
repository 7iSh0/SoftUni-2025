function hotelRoom(month, nightsCount) {

    let studio = 0;
    let apartment = 0;

    switch(month) {
        case "May":
        case "October":
            studio = nightsCount * 50;
            apartment = nightsCount * 65;

            if (nightsCount > 7 && nightsCount <= 14) {
                studio *= 0.95;
            } else if (nightsCount > 14) {
                studio *= 0.7;
            } break;

        case "June":
        case "September":
            studio = nightsCount * 75.20;
            apartment = nightsCount * 68.70;

            if (nightsCount > 14) {
                studio *= 0.8;
            } break;

        case "July":
        case "August":
            studio = nightsCount * 76;
            apartment = nightsCount * 77;
            break;
    } 

    if (nightsCount > 14) {
        apartment *= 0.9;
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
    
}

hotelRoom("May", 15);
function cinema(projection, rows, cols) {

    let ticket = rows * cols;
    let income = 0;

    if (projection === "Premiere") {
        income = ticket * 12;
    } else if (projection === "Normal") {
        income = ticket * 7.5;
    } else if (projection === "Discount") {
        income = ticket * 5;
    }

    console.log(`${income.toFixed(2)} leva`);

}

cinema("Premiere", 10, 12);
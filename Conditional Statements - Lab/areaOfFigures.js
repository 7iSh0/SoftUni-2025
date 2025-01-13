function areaOfFigures(arg1, arg2, arg3) {

    let type = arg1;
    let Number = arg2;
    let result = 0;

    if (type === "square") {
        sideA = arg2;
        result = sideA * sideA;
    } else if (type === "rectangle") {
        sideA = arg2;
        sideB = arg3;
        result = sideA * sideB;
    } else if (type === "circle") {
        r = arg2;
        result = Math.PI * Math.pow(r, 2);
    } else {
        sideA = arg2;
        h = arg3;
        result = sideA * h / 2;
    }

    console.log(result.toFixed(3));

} 

areaOfFigures("rectangle", 7, 2.5);
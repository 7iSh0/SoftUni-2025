function weatherForecast(num) {

    if (num > 35) {
        console.log("unknown");
    } else if (num >= 26) {
        console.log("Hot");
    } else if (num >= 21) {
        console.log("Warm");
    } else if (num >= 15) {
        console.log("Mild");
    } else if (num >= 12) {
        console.log("Cool");
    } else if (num >= 5) {
        console.log("Cold");
    } else if (num < 5) {
        console.log("unknown");
    }
}

weatherForecast(40);
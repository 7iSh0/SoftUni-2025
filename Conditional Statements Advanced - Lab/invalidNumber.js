function invalidNumber(num) {

    let isValid = num >= 100 && num <= 200 || num === 0;

    if (!isValid) {
        console.log("invalid");
    }

}

invalidNumber(150);

// if (num >= 100 && num <= 200 || num === 0) {
//     console.log();
// } else {
//     console.log("invalid");
// }

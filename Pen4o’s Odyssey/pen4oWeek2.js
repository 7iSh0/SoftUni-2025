function pen4oWeek2(num) {

    let doorNumber = num;

    if (doorNumber === 3) {
        console.log(`Congratulations, Pen4o! You found the treasure behind Door ${doorNumber}!`);
    } else if (doorNumber === 1 || doorNumber === 2) {
        console.log("A bucket of cold water splashes on you! Unlucky Pen4o!");
    } else {
        console.log("Invalid choice. Please select Door 1, 2, or 3.");
    }

}

pen4oWeek2(3);


//  let doorNumber = Math.floor(Math.random(num));

// if (doorNumber > 3) {
//     console.log('Invalid choice. Please select Door 1, 2, or 3.');
// } 

// if (num != doorNumber) {
//     console.log('A bucket of cold water splashes on you! Unlucky Pen4o!');
// } else {
//     console.log(`Congratulations, Pen4o! You found the treasure behind Door ${doorNumber}!`);
// }
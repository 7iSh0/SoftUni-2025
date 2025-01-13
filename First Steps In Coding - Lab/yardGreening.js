function yardGreening(squareLandscaped) {

    let totalSqueareLandscaped = squareLandscaped * 7.61;
    let discount = totalSqueareLandscaped * 0.18;
    let totalSum = totalSqueareLandscaped - discount;

    console.log(`The final price is: ${totalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
    
}

yardGreening(550);
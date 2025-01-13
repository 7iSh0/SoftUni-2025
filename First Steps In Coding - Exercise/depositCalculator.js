function depositCalculator(depositSum, depositTerm, annualRate) {

    let interestSum = annualRate / 100;
    let totalInterest = depositSum * interestSum;
    let interestForOneMonth = totalInterest / 12;
    let totalSum = depositSum + depositTerm * interestForOneMonth;

    console.log(totalSum);
    
}

depositCalculator(2350, 6, 7);
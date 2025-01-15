function shopping(budget, videoCard, cpu, ram) {

    let sumVideoCard = videoCard * 250;
    let priceCpu = sumVideoCard * 0.35;
    let sumCpu = cpu * priceCpu;
    let priceRam = sumVideoCard * 0.1;
    let sumRam = ram * priceRam;
    let totalSum = sumVideoCard + sumCpu + sumRam;

    if (videoCard > cpu) {
        totalSum *= 0.85;
    }

    if (budget >= totalSum) {
        let budgetLeft = budget - totalSum;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);
    } else if (budget < totalSum) {
        let moneyNeed = totalSum - budget;
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva more!`);
    }
}

shopping(920.45, 3, 1, 1);
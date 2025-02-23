function pipesInPool(vPool, p1Pipes, p2Pipes, hWorkerDelay) {

    let waterFromPipe1 = p1Pipes * hWorkerDelay;
    let waterFromPipe2 = p2Pipes * hWorkerDelay;
    let totalWater = waterFromPipe1 + waterFromPipe2;

    if (totalWater <= vPool) {
        let percentFull = (totalWater / vPool) * 100;
        let percentPipe1 = (waterFromPipe1 / totalWater) * 100;
        let percentPipe2 = (waterFromPipe2 / totalWater) * 100;
        console.log(`The pool is ${percentFull.toFixed(2)}% full. Pipe 1: ${percentPipe1.toFixed(2)}%. Pipe 2: ${percentPipe2.toFixed(2)}%.`);
    } else {
        let overflow = totalWater - vPool
        console.log(`For ${hWorkerDelay.toFixed(2)} hours the pool overflows with ${overflow.toFixed(2)} liters.`)
    }
}

pipesInPool(1000, 100, 120, 3);
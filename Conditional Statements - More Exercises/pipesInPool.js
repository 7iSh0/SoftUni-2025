function pipesInPool(vPool, p1Pipes, p2Pipes, hWorkerDelay) {

    let pipes1 = p1Pipes * hWorkerDelay;
    let pipes2 = p2Pipes * hWorkerDelay;
    let twoPipes = pipes1 + pipes2;
    let filledPool = twoPipes / 1000;
    let filedPoolProcent = filledPool * 100;
    let p1PipesContr = pipes1 / filedPoolProcent;
    let p2PipesContr = pipes2 / filedPoolProcent;

    if (vPool >= twoPipes) {
        console.log(`The pool is ${filedPoolProcent.toFixed(2)}% full. Pipe 1: ${p1PipesContr.toFixed(3)}%. Pipe 2: ${p2PipesContr}%.`);
    } else {
        let waterMore = twoPipes - vPool;
        console.log(`For ${hWorkerDelay} hours the pool overflows with ${waterMore.toFixed(2)} liters.`)
    }

}

pipesInPool(1000, 100, 120, 3);
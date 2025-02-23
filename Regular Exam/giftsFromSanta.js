function giftsFromSanta(n, m, s) {

    let buff = "";

    for (let i = m; i >= n; i--) {
        if (i % 2 === 0 && i % 3 === 0) {
            if (i === s) {
                break;
            }
            buff += i + " ";
        }
    }
    console.log(buff);
}

giftsFromSanta(1, 30, 15);
giftsFromSanta(1, 36, 12);
giftsFromSanta(20, 1000, 36);
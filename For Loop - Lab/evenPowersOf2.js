function evenPowersOf2(n) {

    for (let i = 0; i <= n; i += 2) {
        console.log(Math.pow(2, i));
    }
}

evenPowersOf2(6);
function sequence2k1(arg) {

    let n = Number(arg);
    let k = 1;

    while(k <= n) {
        console.log(k);

        k = k * 2 + 1;
    }
}

sequence2k1(31);
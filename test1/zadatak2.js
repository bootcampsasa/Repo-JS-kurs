{
    let m = 21;
    let n = 7;
    let s = 0;
    let counter = 0;
    let avg = 0;
    for (i = n; i <= m; i++) {
        if (i % 7 == 0) {
            counter = counter + 1;
            s += i;

        }
        
    }
    avg = s / counter
    console.log(avg)
}//20
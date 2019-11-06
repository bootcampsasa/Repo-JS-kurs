
function maxNumb(a, b, c){
    if(a>b && a>c)
        return a
    if(b>a && b>c)
        return b
    if(c>a && c>b)
        return c
}
console.log(maxNumb(12, 18, 5))
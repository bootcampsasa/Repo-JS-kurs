function cenaPizzePoCmQ(price, r){
    let povrsina=Math.pow(r, 2)*Math.PI;
    let cenaPizzePoCmQ=price/povrsina;
    return cenaPizzePoCmQ;
}
console.log(cenaPizzePoCmQ(1050, 21))

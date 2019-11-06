function cenaPizzePoCmQ(price, r){
    let povrsina=r*r*3.14;
    let cenaPizzePoCmQ=price/povrsina;
    return cenaPizzePoCmQ;
}
console.log(cenaPizzePoCmQ(1050, 21))
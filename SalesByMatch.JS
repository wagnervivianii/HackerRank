function SalesBymath(n, ar){
    let count = 0;
    if(1 <= n <= 100){
        const Myarray = ar.sort();
        for(let i = 0; i<= Myarray.length - 1; i++){
            if(1 <= Myarray[i] <= 100){
                if(Myarray[i] === Myarray[i+1]){
                    count += 2;
                    i += 1;
                }
            }
        }
    }
    return Math.trunc(count/2)
}

console.log(SalesBymath(6,[1,3,1,5,4,5]));
function sum (...num: number[]):number {
    let result = 0;
    for(let i = 0; i < num.length; i++){
        result += num[i];
    }
    return result;
}

console.log(sum(67, 89, 34, 12, +true));
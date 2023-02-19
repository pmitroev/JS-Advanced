function solve(arr) {
    let biggestNum = arr.shift();
    const newArr = [biggestNum];

    for (const num of arr) {
        if (num >= biggestNum) {
            biggestNum = num;
            newArr.push(num);
        }
    }

    

    return newArr
}

solve([
    1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24
])
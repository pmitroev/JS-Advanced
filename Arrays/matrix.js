function solve(arr) {
    let sumRow = 0;
    let sumCol = 0;

    
    for (let i = 0; i < arr.length; i++) {
        let currentRow = arr[i];
        for (let j = 0; j < currentRow.length; j++) {
            sumRow += Number(currentRow[j]);
            sumCol += Number(currentRow[0]);
        }
    }

    if(sumCol === sumRow) {
        console.log('true');
    } else {
        console.log('false');
    }

}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])
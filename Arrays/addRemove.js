function solve(arr) {
    let counter = 1;
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        let currCom = arr[i];
        if(currCom == 'add') {
            result.push(counter++);
        } else if (currCom = 'remove') {
            result.pop(counter++);
        }
    }

    if(!result.length) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

solve(
    ['remove',
    'remove',
    'remove']
)
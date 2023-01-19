function solve(...params) {
    let num = Number(params[0]);

    for (const command of params) {
        switch(command) {
            case 'chop':
                num = num / 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num++;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num *= 0.8;
                console.log(num.toFixed(1));
                break;
        }
    }
}

//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// 16 
// 8 
// 4 
// 2 
// 1

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// //3
// 4
// 2
// 6
// 4.8
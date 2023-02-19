function solve(arr) {
    let obj = {};
    
    for (const city of arr) {
        let [town, product, price] = city.split(' | ');
        if (!obj[town]) {
            obj[product] = {};
        }

        obj[product][town] = Number(price);  
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])
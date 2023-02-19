function solve(arr) {
    let calories = {};

    for (let i = 0; i < arr.length; i++) {
        const product = arr[i];
        const calorie = arr[i+1];

        calories[product] = Number(calorie);
        i++;
    }


    console.log(calories);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
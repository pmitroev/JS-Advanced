function solve(type, weight, ammount) {
    let weightInKg  = weight / 1000;
    let moneyNeeded = weightInKg * ammount;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}

solve('orange', 2500, 1.80)
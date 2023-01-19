function solve(steps, footprint, speed) {
    let distance = steps * footprint;
    let rest = Math.floor(distance / 500);

    let distanceInKm = distance / 1000;
    let time = (distanceInKm / speed) * 60;
    
}

solve(4000, 0.60, 5);
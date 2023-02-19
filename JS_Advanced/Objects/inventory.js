function solve(arr) {
    const result = arr.reduce((acc, curr) => {
        const [name, level, items] = curr.split(' / ');
        const hero = {
            name,
            level : Number(level),
            items : items ? items.split(', ') : [],
        };
        acc.push(hero);
        return acc;
    }, []);

    console.log(JSON.stringify(result));

    
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])


// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
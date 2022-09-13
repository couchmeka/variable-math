let x1 = 20;
let x2 = 15;
let y1 = 30;
let y2 = 5;

let xFormula = x2 - x1;
let yFormula = y2 - y1;

xFormula = xFormula ** 2;
yFormula = yFormula ** 2;

distance = yFormula + xFormula;

distance = Math.sqrt(distance)


console.log(`The distance between (${x1},${y1}) and (${x2},${y2}) is ${distance}`);
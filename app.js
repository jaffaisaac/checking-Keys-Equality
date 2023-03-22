// equality key in Map() 

let mapCheck = new Map();

mapCheck.set(NaN ,'not a number');

console.log(mapCheck.get(NaN)); //not a number 
console.log(mapCheck.get(NaN) === 'not a number'); //true 

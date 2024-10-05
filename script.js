let color = ["red", "blue", "green", "orange", "white"];
let namelist = [];
console.log(color,"  This is color array" );
console.log(namelist, "  This is name list array");
color.push("Grey");
let lastcolor = color.pop();

/*push array*/
let cars = ["BMW", "KIA"]

/*filter array*/
let height = [116, 218, 319, 425];

/*Assessing array*/
console.log(color[0]);
console.log(color[2]);
console.log(color.at(-1));

/* Array peoperty */
console.log(color.length);
console.log(color.length);
color.length=2
console.log(color, color.length, " This is color length at 2");

/* Array Method */

console.log(lastcolor, "last color");
console.log(color, "color array");

console.log(cars, "Before push");
cars.push("Honda")
console.log(cars, " After Push");

console.log(height, "before filter");
let army = height.filter (height => height >= 200); 
console.log(army, "After filter");


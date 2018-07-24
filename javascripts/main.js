console.log("Hello JS");

let softdrinks = ["Coke", "Dr. Pepper", "Sprite", "Root Beer", "Orange"];

console.log("softdrinks.length", softdrinks.length);

//arrays start on 0
//easily add item based on length for position
softdrinks[softdrinks.length] = "7Up"
console.log("softdrinks", softdrinks);

console.log("softdrinks.toString()", softdrinks.toString());
console.log("softdrinks.join()", softdrinks.join(" * ")); //string with character separator

let hotdrinks = ["Coffee", "Tea", "Hot Chocolate"];

console.log("join", softdrinks.concat(hotdrinks)); //join two arrays

console.log("softdrinks.pop()", softdrinks.pop()); //remove last item
console.log("softdrinks.shift()", softdrinks.shift()); //remove first item

softdrinks.push("Grape"); // add to end
console.log("softdrinks", softdrinks);
softdrinks.unshift("Orange"); // add to front

console.log("what are we dealing with:", softdrinks);
console.log("softdrinks.splice(1,2)", softdrinks.splice(1,2)); //starting position and howmany to remove
softdrinks.splice(1,0,"Diet Coke"); //where to start, howmany to remove, items to add
console.log("softdrinks.splice", softdrinks);

let newVersion = softdrinks.slice(1, 3); //slice out items and put into new array
console.log("newVersion", newVersion); //notice original stays intact





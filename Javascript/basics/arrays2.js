var array = "Ned Jon Rob Bran Rickon".split(" ");

console.log(array);

console.log(array.toString());

console.log(array.join(", "));

console.log(array.join(" / "));

array.push("Sansa");

console.log(array.join(" / "));

array.unshift("Sansa");

console.log(array.join(" / "));

array.pop();
console.log(array);

var elemento = array.pop();

console.log(elemento);
console.log(array);

array[1] = "Jon Snow";

var slice = array.slice(3)

console.log(slice);

array.splice(1, 1, "Arya")

console.log(array);


array.slice(3, 1)
console.log(array);
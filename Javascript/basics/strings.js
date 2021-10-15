var s = "The winter is coming. It's really coming!";

console.log(s);
console.log("Essa frase possui " + s.length + " caracteres");
console.log(s.lastIndexOf("coming"));
console.log(s.slice(4, -8));
console.log(s.substr(4, 6));
console.log(s.replace("winter", "summer"));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.concat("!", "!", "!", "?"));

var s = "Ned, Jon, Robb, Sansa, Bran, Arya, Rickon";
console.log(s.split(", "));

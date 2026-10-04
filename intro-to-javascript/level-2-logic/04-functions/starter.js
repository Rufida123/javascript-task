// =============================================================
// Level 2 · Task 1 — Functions
// =============================================================

// Example, already done for you:
function double(n) {
  return n * 2;
}
console.log("double(4) =", double(4));


// TODO 1: function square(n) → returns n times n
//         square(5) should give back 25
function square(n){
  return n*n;
}
square(5);

// TODO 2: function celsiusToFahrenheit(c) → returns c * 9 / 5 + 32
//         celsiusToFahrenheit(100) should give back 212
function celsiusToFahrenheit(c){
  return c*9/5+32;
}
celsiusToFahrenheit(100);

// TODO 3: function greet(name = "friend") → returns `Hello, ${name}!`
//         greet("Sara") → "Hello, Sara!"     greet() → "Hello, friend!"
//         The = "friend" part is a DEFAULT value, used when nothing is passed in.
function greet(name = "friend"){
  return `Hello, ${name}!`;
}
greet("Sara");
greet();

// TODO 4: An ARROW FUNCTION is a shorter way to write a function:
//         const add = (a, b) => a + b;
//         With no { } the result is returned automatically.
const multiply = (a, b) => a * b;
multiply(2, 3);

// TODO 5: function priceWithTax(price, taxRate = 0.15)
//         → returns the price plus tax
//         priceWithTax(100) → 115     priceWithTax(100, 0) → 100
function priceWithTax(price, taxRate = 0.15){
  return price + price * taxRate;
}
priceWithTax(100);

// Try your functions here:
// console.log(square(5), celsiusToFahrenheit(100), greet(), add(2, 3));
console.log(square(5), celsiusToFahrenheit(100), greet(), multiply(2, 3), priceWithTax(100));

// TODO 6: Read this, run it, and answer in a comment:
//         why does `result` show undefined?
function logDouble(n) {
  console.log(n * 2);
}
const result = logDouble(5);
console.log("result is", result);
// Your answer:
//because the value of hte logDouble function is not returned so it is not stored in the variable result
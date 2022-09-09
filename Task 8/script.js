/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calculator(a, b) {
    
    this.sum = function() {
        return a + b;
    };
     this.subtraction = function() {
        return a - b;
     };
     this.multiplikation = function() {
        return a * b;
     };
     this.division = function() {
        return a / b;
     };
    
    }

const myCalculator = new Calculator(5, 3);


console.log(myCalculator.sum());
console.log(myCalculator.subtraction());
console.log(myCalculator.multiplikation());
console.log(myCalculator.division());
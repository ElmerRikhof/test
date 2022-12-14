// let person = {
//     name: 'Elmer',
//     age: 35
// }
// console.log (person ['name']);

// const makePizza = function(item) {
// console.log("Deeg" + item);
// };

// const main_course = "pasta";

// makePizza(main_course);



// const multiply = function(numberA, numberB) {
//     console.log(numberA * numberB);
//     };
    
// multiply(4, 3);

// const age = 5;
// const dogYears = 7;
// multiply(age, dogYears);

// const calculateAvarage = function(numbers) {
// const avarage = numbers.reduce((total, n) => total + n) / numbers.length;
// console.log(avarage);
// };

// const grades = [6,7,8,9,5,6,7,8];
// calculateAvarage(grades);


/* "The wall has been painted red"*/
// const paintWall2 = function(whichWall, color) {
//  console.log('The ' + color + ' wall has been painted ' + whichWall);
 
//     };
//     const whichWall = "red";
//     const color = "blue";

// paintWall2("yellow", "green");
// paintWall2(whichWall, color);
// paintWall2(color, whichWall);


//     const argumentColor = ", maar rood vind ik gewoon mooier.";
//     const argumentColorRed = " Daarbij is rood de kleur van de liefde";
// paintRed(argumentColor + argumentColorRed);

// const biggerThen = function(number) {
//     const sum = number;
//     if (sum < 100) {
//         return "hi";
//     }
//     else if (sum > 200) {
//         return true;
//     }
//     return false;
// }

// const result = biggerThen (101);
// console.log(result);
    


// const aiBouncer = function(number1, number2) {
//     const age = number1; 
//     const people = number2;

//     if (age > 18 && people < 100) {
//         return "come in";
//     }
//     else if (age > 18 && people > 100) {
//         return "its to busy come back later";
//     }
//     return "this is a club for adults";
// }

// const result = aiBouncer (19, 101);
// console.log(result);
    

// const people = function(number) {
//     const sum = number;
//     if (sum < 100) {
//         return "come in";
//     }
//     return "its to busy come back later";
// }

// const avarageNumber = function(number1, number2, number3, number4, number5) {
//   const total = number1 + number2 + number3 + number4 + number5;
//   const avarage = total / 5; 
//   const avarageRounded = Math.round(avarage)
//     return avarageRounded;
// }

// const result = avarageNumber (9,9,8,9,9);
// console.log(result);
 

// function squaded(number1, number2) {
//     const total = (number2 * number1);
//     return total;
//     }
    
//     const result = squaded(6,5);
//     console.log(result);


// const squaded = function (number1, number2) {
// const total = (number2 * number1);
// return total;
// };

// const result = squaded(6,5);
// console.log(result);


// const squaded = (number1, number2) => {
//     const total = (number2 * number1);
//     return total;
//     }
    
//     const result = squaded(6,5);
//     console.log(result);


// const olderThen = function (age) {
//     if (age >= 18) { 
//         return "hello there";
//     } 
//     return "hey kiddo" ;
// };

// const realAge = function () {
//     const adult = olderThen (20);
//     console.log(adult);
// };


// realAge();



// const vatCal = function (number, vat) {
//     const total = number + (number * vat);
//     return total;
// };

// const vatIncl = function (number, vat) {
//     const price = vatCal (number, vat);
//     console.log(price);
// };


// console.log(vatIncl(100, 0.21));


// const calCul = function (number, vat) {
//     const basePrice = number / ((100 + vat) / 100);
//     return basePrice;
// };

// const priceVat = function (number, vat) {
//     const basePrice = calCul (number, vat);
//     const tax = number - basePrice;
//     return [basePrice, tax];
// };


// console.log(priceVat(1210, 21));



// const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
//     const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
//     return basePrice;
// };

// const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
//     const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
//     const VAT = priceIncludingVAT - basePrice;
//     return [basePrice, VAT];
// };

// console.log(calculateBasePriceAndVAT(1210, 21));


// const scream = function(){
// console.log("Aaaaa");
// };

// scream();

// const makeSomeNoise = function() {
//     scream();
// };

// makeSomeNoise();


// const add = function(numberA, numberB) {
//     return numberA + numberB;
// };

// // The add function returns to this line, which is outside of a function.
// const eight = add(3, 5);
// console.log(eight);

// const doCalculation = function() {
//     // The add function returns to this line, which is inside of a function.
//     const six = add(2, 4);
//     console.log(six);
// };

// doCalculation();

// var age = 5;

// while (age < 10) {

//     console.log("your age is less then 10");
//     age++;

// }

// document.write("your age is now over 10")




// for (age = 5; age < 10; age++) {

//     console.log("your age is less then 10");
// }

// document.write("your age is now over 10")


// // while
// let w = 0;
// while (w < 5) {
//   console.log(`This is while iteration number ${w}`);
//   w++;
// }

// for
for (let i = 0; i < 5; i++) {
  console.log(`This is for iteration number ${i}`);
}

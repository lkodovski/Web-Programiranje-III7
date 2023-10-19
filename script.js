// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1245;

// //Camel case
// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// //DataTypes
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");
// javaScriptIsFun = "YES!!";
// console.log(typeof javaScriptIsFun);

// let, const, var

// let age = 30;
// age = 31;

// const birthYear = 1991;

// var job = "Coder";
// job = "teacher";

// basic Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Smetman";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);*/

//Template Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = console.log(
//   "I'm " + firstName + " , a " + (year - birthYear) + " year old " + job + "!"
// );

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);

// console.log(`Ova e samo uste eden string ...`);

// console.log("String with \nmultiple \n\n lines");
// console.log(`String
// multiple
// lines`);

//Ja se vikam $Marija od $III7 klas, i momentalno sum na cas po $programiranje

//Taking Decisions: if/ else statements
// const age = 19;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is to young. Wait antother ${yearsLeft} years `);
// }

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// Type Conversion and Coersion
//Type Conversion

// const inputYear = "1991";
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));

// console.log(String(23), 23);

// type coersion
// console.log("I'm " + 23 + "years old");
// console.log("23" - "10" - 3);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// "==" v.s "==="
// const age = "18";
// if (age === 18) console.log("You just became an adult(strict)");

// if (age == 18) console.log("You just became an adult(loose)");

// //Logical Operators

// const hasDriversLicense = false;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive ...");
// }
//Switch statement III

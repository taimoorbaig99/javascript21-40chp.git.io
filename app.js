// ========================== capitalize prompt =========================================

/*
var a = "karachi" ;
var b = prompt("Enter your city name");

a = a.toUpperCase();
b = b.toUpperCase();

if(a == b) {
    alert("Thanks for your information")
}else {
    alert("Please enter correct data in capital letters")
};
*/

// ============================== Title Case ================================================

/*
var a = "karachi"
var c = prompt("enter city");
var  firstletter  =  a.slice(0 , 1);
var  otherletters =  a.slice(1);

var a = firstletter.toUpperCase() + otherletters.toLowerCase();
console.log(a);
*/


// ================================= Measuring length and extracting parts =================================

/*
var f = prompt("Enter your Favourite Mobile phone brand Name");
for( var i = 0; i < f.length ; i++ ) {
    
    
};
console.log(i);
*/

/*
var a = prompt("Enter your Name");

var b = a.charAt(6);
console.log(b);
*/


// =============================== finding segments =======================================


/*
var p = "Pakistani" ;
for( var i = 0; i < p.length ; i++) {
   var b = p.indexOf("n")
}
console.log(b);
*/


/*
  var a = prompt("Write your Username");
  console.log(a);
  */


  /*
 var f = "The quick brown fox jumps over the lazy dog" ;
 var b ="the"

 for (var  i = 0; i < f.length;  i++ ) {
   var word = f.slice(i , i + 3);
   if(word == b) {
     console.log("found", word);
     console.log(i);

     var startingletters = f.slice(0,i);
     var myword = "the";
     var otherletters = f.slice(i + 4);

    a = startingletters + myword + otherletters;
  }

}
*/

// =================================  finding a character at a location =======================================

/*
var c = "Pakistani";
var b = c.charAt(3);
console.log(b);
*/

// ============================= replacing characters ======================================

/*
var t = "Hyderabad" ;
var b = t.replace(/Hyder/g , "Islam");
console.log(b);
*/


/*
var y = "Ali and Sami are best friends. They play cricket and football together." ;
var g = y.replace(/and/g , "&");
console.log(g);
*/


// ===================================== Rounding Numbers ===================================

// ========== Positive Integer ==========

// var r = Math.round(7.469);
// console.log(r);

// var f = Math.floor(2.789);
// console.log(f);

// var c = Math.ceil(4.23);
// console.log(c);

// ========== Negative Integer ==========

// var t = Math.round(-2.487);
// console.log(t);

// var g = Math.floor(-6.432);
// console.log(g);

// var v = Math.ceil(-3.998);
// console.log(v);

// ==================================== Generating Random numbers ===============================

// var dice = Math.trunc( Math.random() * 6 ) + 1 ;
// console.log(dice);

// var toss = Math.floor(Math.random() * 2 ) + 1 ;
// console.log(toss);



// var number =  prompt("Write a number from 1 to 10");

// switch(true) {
//   case(number == 1) : console.log("You store 1 CONGRATS");
//   break;

//   case(number == 2) : console.log("You store 2 CONGRATS");
//   break;

//   case(number == 3) : console.log("You store 3 CONGRATS");
//   break;

//   case(number == 4) : console.log("You store 4 CONGRATS");
//   break;

//   case(number == 5) : console.log("You store 5 CONGRATS");
//   break;

//   case(number == 6) : console.log("You store 6 CONGRATS");
//   break;

//   case(number == 7) : console.log("You store 7 CONGRATS");
//   break;

//   case(number == 8) : console.log("You store 8 CONGRATS");
//   break;

//   case(number == 9) : console.log("You store 9 CONGRATS");
//   break;

//   case(number == 10) : console.log("You store 10 CONGRATS");
//   break;

//   default  : console.log("Please Enter the number from 1 to 10");
//   break;
// }
// console.log(number);


// ========================= Converting strings to integers and decimals ===============================

// var o = prompt("How much is your weight");
// var weight = parseInt(o);       
// console.log(weight);


// var b = prompt("How much is your weight");
// var n = parseFloat(b);       
// console.log(n);


// ==============================  Converting strings to numbers, numbers to strings ===============================

// ============ String to number ============

// ========== 1 method ========== 

// var i = "472";
// var t = Number(i) ;
// console.log(t);
// var p = typeof t ;
// console.log(p);


// ========== 2 method ==========

// var a = "472";
// a = Number(a);
// console.log(a);
// var d = typeof a;
// console.log(d);


// ============ Number to String ============

// var n = 3536 ;
// var b = n.toString();
// console.log(b);
// var g = typeof b ;
// console.log(g);




//=================================== CHAPTER 31 - 34 =================================


//  var rightnow=new Date();
// document.write(rightnow);
// console.log (rightnow);
// console.log (rightnow.getDate());
// console.log (rightnow.getDay());
// console.log (rightnow.getFullYear());
// console.log (rightnow.getMinutes());
// console.log (rightnow.getSeconds());
// console.log (rightnow.getTime());
// console.log (rightnow.getUTCMilliseconds());
// console.log (rightnow.getMonth()); 


// var a =new Date();
// document.write (a);
// console.log(a.getMonth());
// alert(a.getMonth());



// var rightnow=new Date();
// document.write(rightnow);
// console.log (rightnow);
// console.log (rightnow.getDate());
// console.log (rightnow.getDay());
// console.log (rightnow.getFullYear());
// console.log (rightnow.getMinutes());
// console.log (rightnow.getSeconds());
// console.log (rightnow.getTime());
// console.log (rightnow.getUTCMilliseconds());
// console.log (rightnow.getMonth()); 

// var localDate = new Date();
// var months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// var currentMonth = months[localDate.getMonth()];
//  alert(currentMonth);


//  var localDate = new Date();
//  var Day = [
//      'Sunday',
//      'Monday',
//      'Tuesday',
//      'Wednesday',
//      'Thursday',
//      'Friday',
//    'Saturday',
   

//  ];
 
//  var currentDay = Day[localDate.getDay()];
//   alert(currentDay);

//4
// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var a = b.slice(0,3);
// alert("Today is " + a);
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var a = b.slice(0,3);
// if (a === "Saturday"){
//     alert("It's Fun Day")
// }else if(a === "Sunday"){
//     alert("It's Fun Day")
// }else if(a === "Monday"){
//    document.write("It's work Day")
    
// }else if(a === "Tuesday"){
//     document.write("It's work Day")
   
// }else if(a === "Wednesday"){
//     document.write("It's work Day")
   
// }else if(a === "Thursday"){
//     document.write("It's work Day")
   
// }else if(a === "Friday"){
//     document.write("It's work Day")
   
// }
// alert(a) 




// var d= new Date()
// d.setMonth(7)
// d.setDate(8)
// d.setFullYear(2005)
// d.setHours(1)
// d.setMinutes(30)
// d.setSeconds(50)
// // console.log(d);
// document.write(d);



// var inp=prompt()
// var todayDate = new Date()
// var spaceDateTime = new Date(inp)
//  var spaceDateTime = spaceDateTime.getTime();
// var currentTime = todayDate.getTime();
// var diff = currentTime-spaceDateTime
// var finalDate = diff/(1000*60*60*24*365)
// // console.log(finalDate);
//  var age = Math.round(finalDate)
//  document.write(age)


//changing case
// var a = prompt("Enter Your Name");
//  a = a.toLocaleLowerCase();
//  document.write(a)
//upper
// var a = prompt("Enter Your Name");
//  a = a.toLocaleUpperCase();
//  document.write(a)


// var year_born = prompt("Please enter your date of birth:", "Type here");
// var d = new Date();
// var n = d.getFullYear();
// function getAge(birthYear){
// 	var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     age = currentYear - birthYear;
//     return age;
// }
// calculatedAge = getAge(year_born);
// alert("Hello, " + "you are " + calculatedAge + " years old!");
// units = 1000
// bill = 0
// if(units<=50){
//   bill  = units*1
// }
// else if(units <=150){
//   bill = 50*1 + (units-50)*2
// }
// else if(units <=250){
//   bill = 50*1 + 100*2 + (units-150)*3
// }
// else if(units>250){
//   bill = 50*1 + 100*2 + 150*3 + (units-250) *4
// }

// if(bill>150){
//   bill = bill + bill*0.2
// }
// console.log(bill)


// var month = 1; 
// var d = new Date(2022, month + 11, 0);
// console.log(d.toString());
// record start time

// var startTime = new Date();
// var endTime = new Date();
// var timeDiff = endTime - startTime;
// timeDiff /= 1000;
// var seconds = Math.round(timeDiff % 50);
// timeDiff = Math.floor(timeDiff / 50);
// var minutes = Math.round(timeDiff % 50);
// timeDiff = Math.floor(timeDiff / 50);
// var hours = Math.round(timeDiff % 24);
// timeDiff = Math.floor(timeDiff / 24);
// var days = timeDiff ;
// document.write(timeDiff)

// new Date(1776, 6, 4, 12, 30, 0, 0);
// new Date(-6106015800000);
// new Date("January 31 1980 12:30");
// document.write(new Date);


// ============================================== CHAPTER 35 - 38 ====================================


// var  num1 = parseInt(prompt('Enter the first number '));
// var  num2 = parseInt(prompt('Enter the second number '));
// var sum = num1 + num2;
// document.write(`The sum of ${num1} and ${num2} is ${sum}`);

// function sumOfSquares(num) {
//     var i;

//     for (i=0,i<=num,i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum+ ) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);


// var number = parseInt(prompt('Enter a positive integer: '));

// if (number < 0) {
//     document.write('Error! Factorial for negative number does not exist.');
// }

// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     document.write(`The factorial of ${number} is ${fact}.`);
// }

// var num = Math.ceil(Math.random() * 10);
// document.write(num);
//  var anum = prompt('Guess the number between 1 and 10 inclusive');
//  if (anum == num)
//    document.write('Matched');
//   else
//    document.write('Not matched, the number was '+anum);

// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
//   console.log(pythagorean(4, 3));



// var a = 35.36;
// var b = a.toString();
// console.log(a)
// console.log(typeof b);



// var a = 33.564613214864;
// var num = a.toFixed(0);
// console.log(num);
// console.log(typeof a);





// var todayDate = new Date()
// var hours= todayDate.getHours()
// var minutes=todayDate.getMinutes()
// var seconds=todayDate.getSeconds()
// document.write(hours+":"+minutes+":"+seconds);















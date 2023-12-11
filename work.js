// let a = 10 ;
// let b = "20";
// let c = 80 ;

// // console.log(++a + +b++ + +c++ - +a++);
// // console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b* a + --a - +true);
// let a  = "we love";
// let b = " javascript";

// console.log( ` ${a} \\ "" ${b} `);

// let code =
//     `  <div class="card">
//     <div class="child">
//       <h2>title</h2>
//       <p>paragraph</p>
//     </div>
//   </div>`
// ;

// document.write(code);

// var aabb = 1 ;
// let d= "-100";
// let e = "20";
// let f = 30 ;
// let g = true ;
// console.log(-(--d) + f + +(++e) * +(++g));

// let a = 10 ;

//  a += 20 ;

// console.log(a);
// console.log(Math.round(99.5));

// let a = 1_00 ;
// let b = 2_00.5;
// let c = 1e2 ;
// let d=2.4;
// console.log(Math.ceil((parseInt(b)/Math.ceil(d))));
// // console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(Number.parseInt(d));
// console.log(Math.round(d));
// console.log(2_00.5);
// console.log(Math.trunc(d));
// console.log(a**Math.trunc(d));
// console.log(Math.trunc(Math.min(a,b,c,d)));

// let theName = "  ahmed  ";
// console.log(theName.trim().charAt(2).toUpperCase())
// console.log(theName.trim())
// console.log(theName.charAt(3));
// console.log(theName.length)

// let a = "BasseM";

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web",6));
// console.log(a.lastIndexOf("Sch"));
// console.log(a.lastIndexOf("h")); //14
// console.log(a.indexOf("b")); //9
// console.log(a.lastIndexOf("o")); //5
// console.log(a.indexOf("o")); //5

// console.log(a.slice(7,10))
// console.log(a.slice(-6,-3))

// console.log(a.slice(2,6));
// console.log(a.slice(-13,-9))

// console.log(a.slice(0,10).split(" "))
// console.log(a.substring(6,2))
// console.log(a.slice(2,6))
// console.log(a.endsWith("o"))
// console.log(a.charAt(2).toUpperCase() + a.slice(3,6));
// console.log(a.charAt(2).toUpperCase() + a.slice(3,6));
// console.log(a.charAt(13).toUpperCase().repeat(8));
// console.log(a.split(" ",1))
// console.log(a.substr(0,6)+a.substr(-7,7));
// console.log(a.charAt(0).toLowerCase()+a.slice(1,-1).toUpperCase()+a.charAt(a.length-1).toLowerCase());
// console.log(a.charAt(5));

// let price = 100;
// let discount = false;
// let discountAmount = 30;

// if(discount===true){
//     price -= discountAmount;
// }
// else{
//     price -= 10 ;
// }
// console.log ( price );

// discount === true ? price -= discountAmount : price -=10 ;
// console.log(price);

// let theName = "Ahmed";
// let theGendar = "Male";
// let theAge = 30;

// theGendar === "Male" ? console.log("Mr") : console.log("Mrs");
// let result = theGendar === "Male" ? "Mr" : "Mrs";
// document.write(result);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 60
//   ? console.log("20 To 60")
//   : theAge > 60
//   ? console.log("Larger than 60")
//   : console.log("Unknown");

// let a = 10;

// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 TO 40")
//   : a > 40
//   ? console.log(" > 40")
//   : console.log("Unknown");

// let st = "Elzero Web School";

// // if (typeof "st" === typeof " 34" ){
// //     console.log("good");
// // }

// // if ( typeof"st" === typeof"number"){
// //     console.log("Good");
// // }

// // if( st.slice(0,6).repeat(2) === "ElzeroElzero"){
// //     console.log("Good");
// // }

// if (st.includes("W") === "W".includes("W")) {
//   console.log("good");
// }

// let day = 0;

// switch(day){
//     case 0:
//         console.log("satuerday");
//         break;
//     case 1:
//      console.log("sunday");
//      break;
//      case 2:
//         console.log("monday");
//         break;
//     default :
//     console.log (" Unknown day ")
// }

// let job = "Designer" ;
// let sal = 0 ;

// switch (job){
//  case "Manager" :
//  sal = 8000;
//  document.write(sal);
//  break;
//  case "IT" :
//  case "Spport" :
//  sal = 6000;
//  document.write(sal);
//  break;
//  case "Developer" :
//  case "Designer" :
//  sal = 7000;
//  document.write(sal);
//  break;
//  default :
//  sal = 4000;
//  document.write(sal);
// }

// let holidays = 1;
// let money = 0;

// if ((holidays === 0 )) {
//   money = 5000;
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
// } else if ((holidays === 3)) {
//   money = 2000;
// } else if ((holidays === 4)) {
//   money = 1000;
// } else if ((holidays === 5)) {
//   money = 0;
// } else {
//   money = 0;
// }
// console.log(` My money is ${money} `);

// let myFriends = [ 'Ahmed' , 'SAID' , 'Ali' , "mohamed" ,"Ahmed","mahmoud"];
// let myFriends = [ 10 , "Sayed" , "Mohamed" , "90" , 9000 , 100 , 20 , "10" , -20 , -10]
// console.log(`${myFriends[2][1]}`);
// console.log(`${myFriends[3][1][5]}`);
// console.log(myFriends.length);
// console.log(myFriends[0]);
// myFriends[myFriends.length-1]= "keko";
// console.log(myFriends);

// myFriends.unshift("omar");
// console.log(myFriends);
// myFriends.push("lobna");
// console.log(myFriends)

// let first = myFriends.shift();
// console.log(myFriends);
// console.log(`the first name is ${first}`);
// let last = myFriends.pop();
// console.log(myFriends);
// console.log(`the last name is ${last}`);
// console.log(myFriends);
// console.log(myFriends.includes("Ahmed",2));
// console.log(myFriends.lastIndexOf("Ahmed",-2));
// console.log( myFriends );
// console.log(myFriends.reverse())
// console.log( myFriends.sort() );
// console.log(myFriends.slice(-6,-4));
// console.log(myFriends.slice(2,4));
// console.log(myFriends.slice(-4,-2));
// console.log(myFriends);
// myFriends.splice(0,2,"ali","omar");
// console.log(myFriends);
// let myFriends = [ 'Ahmed' , 'SAID' , 'Ali' , "osama" ,"gamal","ameer"];
// let myNewFriends = ["Samar", "sameh"]
// let schoolFriends = ["haytham","shady"]

// let allFriends = myFriends.concat(myNewFriends , schoolFriends);

// // console.log(allFriends);

// console.log(allFriends.join(" @ "));
// let zero = 0;
// let counter = 3;
//
// // console.log(my.slice(zero,++counter).reverse())
// // console.log(my.slice(++zero,--counter).reverse())
// my.unshift("Elzero");
// console.log(my);
// // console.log(my[++zero][++counter] + my[zero][++counter].toUpperCase())
// // console.log(my[--zero][++counter] + my[zero][++counter].toUpperCase()); // "rO"
// console.log( my[zero].charAt(++counter) + my[zero].charAt(++counter).toUpperCase()  )

// for (let i = 0; i < my.length ; i++) {
//   console.log(my[i]);
// }
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "green", "Blue"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(` # ${products[i]}`);
// nestedLoop: for( let j = 0 ; j < colors.length ; j++ ){
// console.log(` --- ${colors[j]}`);
// if(colors[j] === "green"){
//     break mainLoop;
// }
// }
// }

// let arr = ["Red", 2, "black", 5, "green", "Blue"];

// for (let i = 0; i < arr.length; i++) {
//     if( typeof arr[i] === "number" ){
//       continue ;}
//     console.log(`---> ${ arr[i] }`)

//     }
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
// let colors = ["Red", "Green", "Blue"];
// let no_of_products = 4;

// document.write(` <h1>  Show ${no_of_products} Products </h1>`);
// for (let i = 0; i < no_of_products; i++) {
//   document.write(`<div>`);
//   document.write(`<h3> # ${products[i]}</h3>`);
//   for (let j = 0; j < 1 ; j++) {
//     // document.write(`<p> ----> ${colors[j]} </p>`);
//       document.write( `<p> ${ colors.join( " | " )}</p> `);
//   }
//   document.write(`</div>`);
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
// let index = 0;
// let product = 4;

// // document.write(` <h1> We Have Only ${product} </h1>`);
// // while (index < products.length) {
// //   document.write(`<p> ${products[index]} </p>`);
// //   index++;
// //   if (index === product) {
// //     break;
// //   }
// // }
// do {
//   console.log(index)
//   index++;
// } while(false)
// console.log(index);

// let myAdmins = ["Ahmed", "Ogo", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];
// let admins = 3;
// let noAdmins = 0;
// document.write(`<h1> We Have ${admins} Admins </h1>`);
// for (let i = 0; i < myAdmins.length; i++) {
//   document.write(
//     ` The Admin For Team ${noAdmins + 1} Is ${myAdmins[i]} </b></>`
//   );
//   noAdmins++;
//   document.write(`<h2>Team Members : </h2>`);
//   for (let employee = 0; employee < myEmployees.length; employee++) {
//     if (myEmployees[employee][0] === myAdmins[i][0]) {
//       document.write(` <h4> ${myEmployees[employee]} </h4>`);
//     }
//   }
//   if (i === admins - 1) {
//     break;
//   }
// }
// console.log(typeof console.log);
// a = 0;
// document.write(`<h1> We Have ${admins} Admins </h1>`);
// while (a < myAdmins.length){
//   document.write(` <h2> The Admin For Team ${a + 1} Is ${myAdmins[a]}</h2> `);
//   a++;
//   document.write(` <h3> Team Members : </h3> `);
//   let k = 1;
//   for (j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[a][0] === myEmployees[j][0]) {
//       document.write(`${k} - ${myEmployees[j]}<br><br> `);
//       k++;
//     }
//   }
//   if (a === admins) {
//     break;
//   }
// }

// document.write(`<div> We Have ${admins} Admins </div>`)
// for( let i=0 ; i<myAdmins.length ; i++ ){
//   document.write( `<h4> The Admin for Team ${i+1} Is ${myAdmins[i]} <h4> ` )
//   if( i === admins  ){
//     break;
//   }

// function sayHello(userName, age) {
//   if (age < 20) {
//     document.write(`<h1>This app not suitable For You </h1>`);
//   } else {
//     document.write(` <h1> Hello ${userName}<br>  your Age is ${age} </h1>`);
//   }
// }
// sayHello("Ahmed", 23);
// sayHello("Mahmoud", 25);
// sayHello("Ali", 15);

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     document.write(`<h1> ${i} </h1>`);
//   }
// }
// generateYears(2010, 2020, 2015);

// function calc(num1, num2) {
//   return num1 + num2;
// }
// let result = calc(10, 50);
// document.write(`<h1>${result}</h1>`);

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i === 15) {
//       return `interrptting`;
//     }
//     document.write(`<h2> ${i} </h2>`);
//   }
// }
// generate(10, 20);

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {

// }

// function showDetails(...data) {
//   let a = 0,
//     b = 0,
//     c = 0;
//   for (let i = 0; i < 3; i++) {
//     typeof data[i] === "string"
//       ? (a = data[i])
//       : typeof data[i] === "number"
//       ? (b = data[i])
//       : data[i] === false
//       ? (c = "Not Availble")
//       : (c = "Availble");
//   }
// return console.log(`Hi ${a}
// Your Age Is ${b}
// You Are ${c} For Hire`);
// }
// showDetails( true, "Mohamed" , 38);

// function showDetails(...data) {
//   let a = 0,
//     b = 0,
//     c = 0;
//   for (let i = 0; i <= 3; i++) {
//     typeof data[i] === "string"
//       ? a === data[i]
//       : typeof data[i] === "number"
//       ? b === data[i]
//       : data[i] === false
//       ? (c = "Not available")
//       : (c = " available");
//   }
//   return console.log(`Hi ${a}
// your age is ${b}
// you Are ${c} for Hire `);
// }
// function showDetails(...data) {
//   let a = 0,
//     b = 0,
//     c = 0;
//   for (let i = 0; i < 3; i++) {
//     typeof data[i] === 'string'
//       ? (a = data[i])
//       : typeof data[i] === 'number'
//       ? (b = data[i])
//       : data[i] === false
//       ? (c = 'Not Availble')
//       : (c = 'Availble');
//   }
//   return console.log(`Hi ${a}
// Your Age Is ${b}
// You Are ${c} For Hire`);
// }
// showDetails( false, 'Mohamed', 38);
// if (typeof name === "string"){
// document.write(`<h2> my name is ${name} </h2>`);}
// if (typeof age === "number"){
//     document.write(`<h2> my age is ${age} </h2>`);
//   }
// if (status === true) {
//   document.write(`<h2> you are avaliable for hire </h2> `);
// }
// else{
//   document.write(`<h2> you are NoT avaliable for hire </h2> `);
// }

// showDetails("ahmed", 23, true);

// function showInfo(...info) {
//   let a = 0,
//     b = 0,
//     c = 0;
//   for (let i = 0; i < 3; i++) {
//     if (typeof info[i] === "string") {
//       a = info[i];
//     } else if (typeof info[i] === "number") {
//       b = info[i];
//     } else if ((info[i] = false)) {
//       c = "Not Avalibale";
//     } else {
//       c = "Avaliable";
//     }
//     // typeof info[i] === 'string'
//     //   ? (a = info[i])
//     //   : typeof info[i] === 'number'
//     //   ? (b = info[i])
//     //   : info[i] === false
//     //   ? (c = 'Not Avaliable')
//     //   : (c = 'Avaliable');
//   }
//   return console.log(`hi ${a} , your age is ${b} , you are ${c} for hire`);
// }
// showInfo(23, "ahmed", false);

// function showDetails(...data) {
//   let a, b, c;
//   for (let i = 0; i < 3; i++) {
//     typeof data[i] === "string"
//       ? (a = data[i])
//       : typeof data[i] === "number"
//       ? (b = data[i])
//       : data[i] === false
//       ? (c = "Not Availble")
//       : (c = "Availble");
//   }
//   return console.log(`Hi ${a}, Your Age Is ${b} ,You Are ${c} For Hire`);
// }
// showDetails(true, "Mohamed", 38);
// showDetails(true, 38, "Mohamed");
// showDetails("Mohamed", true, 38);
// showDetails(false, 38, "Mohamed");

// function showInfo(name,age,boolean){
// let [name,age,boolean]=0;
// }g
// showInfo("ahmed",22,true)

// let calculator = function (num1, num2) {
//   return num1 + num2;
// };
// document.write(calculator(50, 20));

// document.getElementById("show").onclick = function () {
//   console.log(calculator(50, 20));
// };

// setTimeout(function () {
//   console.log("GOOD");
// }, 2000);

// function sayMessag(fName, Lname) {
//   let message = `Hello`;
//   function concatMsg() {
//     message = `${message} ${fName} ${Lname}`;
//   }
//   concatMsg();
//   return message;
// }
// console.log(sayMessag("ahmed", "abozied"));

// let print = _ => 20;

// let print = (num1, num2) => num1 + num2;
// console.log(print(10, 20));

// let x = 10 ;

// if (10 === 10) {
//     let x = 50 ;
//     console.log(`From if Block ${x}`)
// }
//     console.log(`From global ${x}`);

// let names = (...name) => {
// return `String ${name} => Done!`;
// };
// console.log(names(`[osama] , [mohamed] , [ali]`));

// let names = (...name) => {
//   return `String [${name.join("],[")}]  => Done!`;
// };
// console.log(names("osama", "mohamed", "ali"));

// // let names = (...input) => {
// // return `String [${input.join("], [")}] => Done !`;
// // };

// // console.log(names("A", "B", "C", "d", "e"));
// let myNmbers = [20, 50, 10, 20, 60];
// let calc = (one, two, ...nums) => {
//   return one + two + nums[0] + nums[1];
// };
// console.log(calc(myNmbers[0], myNmbers[1], myNmbers[2], myNmbers[3]));
// 100
// let myNumbers = [20, 50, 10, 60];

// let calc = (one, tow, ...nums) => one + tow + nums[0];

// console.log(calc(10, myNumbers[0], myNumbers[1])) // 80
// let myNms = [1, 2, 3, 4, 5, 6];
// let newArr = [];
// for (let i = 0; i < myNms.length; i++) {
//   newArr.push(myNms[i] + myNms[i]);
// }
// document.write(`<b> ${newArr} </b></>`);

// let addSelf = myNms.map(function (ele, index, arr) {
//   console.log(`Element => ${ele}`);
//   console.log(`index => ${index}`);
//   console.log(`arr => ${arr}`);
//   console.log(`this => ${this}`);
//   return ele + ele;
// }, 5);

// let swappingCases = "elZERo";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");
// console.log(sw);
// // ---------------------------------------------------
// let invertedNmbers = [1, -10, -20, 25];

// // let inv = invertedNmbers.map(function (ele) {
// //   return -ele;
// // })
// // console.log(inv);

// //Arrow Function
// let inv = invertedNmbers.map((ele) => -ele);
// console.log(inv);
// // ---------------------------------------------------
// let ignoreNumbers = "Elz123er4o";

// // let ign = ignoreNumbers
// //   .split("")
// //   .map(function (ele) {
// //     return isNaN(parseInt(ele)) ? ele : "";
// //   })
// //   .join("");
// // console.log(ign)

// //Arrow Function
// let ign = ignoreNumbers
//   .split("")
//   .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
//   .join("");
// console.log(ign);

// let number = [11, 2, 4, 5, 13, 17];

// let addMap = number.map(function (ele) {
//   return ele + ele;
// });
// console.log(addMap);

// let addFilter = number.filter(function (ele) {
//   return ele + ele;
// });
// console.log(addFilter);

// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa"];
// // map
// // let fr = friends.map(function (ele) {
// //   return ele.startsWith("A") ? ele : '' ;
// // }).join(" ");
// // console.log(`[${fr}]`);

// //filter
// let fr = friends.filter(function (ele) {
//   return ele.startsWith("A");
// });
// console.log(fr);

// let number = [11, 2, 4, 5, 13, 17];

// let nm = number.filter(function (ele) {
//   return ele % 2 === 0;
// });
// console.log(nm);

// let sentence = "I Love Foood Code Too Playing Much";

// let sn = sentence
//   .split(" ")
//   .filter(function (ele) {
//     return ele.length <= 4;
//   })
//   .join(" ");
// console.log(sn);
// // // ---------------------------------------------------
// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers
//   .split("")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   .join("");
// // console.log(ign);
// // // ---------------------------------------------------
// let mix = "Al3BS2ZX";
// let num = mix
//   .split("")
//   .filter(function (ele) {
//     return !isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele * ele;
//   }).join(" ");
// console.log(num);
// // ---------------------------------------------------
// // let nums = [10, 70, 5];

// // let add = nums.reduce(function (acc, current, index, arr) {
// //   return acc + current;
// // },15);
// // console.log(add);
// // // ---------------------------------------------------
// // let theBiggest = ["Bla", "Progrpsdss", "Other", "asied "];
// // // let big = theBiggest.reduce((acc, curr) =>
// // //   acc.length < curr.length ? curr : acc
// // // );
// // // console.log(big);

// // let removeChars = ["A", "@", "H", "@", "M", "@", "E", "@", "D"];
// // let char = removeChars
// //   .filter(function (ele) {
// //     return !ele.includes("@");
// //   })
// //   .reduce(function (acc, curr) {
// //     return `${acc}${curr}`;
// //   });
// // console.log(char);

// // let all = document.querySelectorAll("ul li");
// // let allDivs = document.querySelectorAll(".content div");
// // all.forEach(function (ele) {
// //   ele.onclick = function () {
// //     all.forEach(function (ele) {
// //       ele.classList.remove("active");
// //     });
// //     this.classList.add("active");
// //     allDivs.forEach(function (ele) {
// //       ele.style.display = "none";
// //     });
// //   };
// // });
// // let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,Z";

// // let str = myString
// //   .split(",")
// //   .filter(function (ele) {
// //     return isNaN(parseInt(ele));
// //     //EElzero_web_SchoolZ
// //   })
// //   .map(function (ele) {
// //     return ele === "_" ? "" : ele;
// //   })
// //   .reduce(function (acc, curr) {
// //     return `${acc} ${curr}`;
// //   })
// //   .slice(+true, -true);
// // console.log(str);

// // let employee = {
// //   theName: "Ahmed",
// //   theAge: 23,
// //   yourSkills: function () {
// //     return "html , css , javaScript , React";
// //   },
// // };

// // console.log(employee.theName);
// // console.log(employee.theAge);
// // // console.log(employee.yourSkills());
// // let myVar = "country";
// // let user = {
// //   theName: "Ahmed",
// //   country: "Egypt",
// // };
// // console.log(user.theName);
// // console.log(user["country"]);
// // console.log(user[myVar]);
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// //                     Nested Object
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // let available = true;
// // let user = {
// //   name: "Ahmed",
// //   Age: 23,
// //   Skiils: ["Html", "Css", "Js"],
// //   available: false,
// //   adresses: {
// //     Ksa: "Gadah",
// //     Egypt: {
// //       one: "Cairo",
// //       Two: "Portsaid",
// //     },
// //   },
// //   chkAvaliable: function () {
// //     if (user.available === true) {
// //       return `Free for Work`;
// //     } else {
// //       return `Not Free`;
// //     }
// //   },
// // };
// // console.log(user.name);
// // console.log(user.Age);
// // console.log(user.Skiils);
// // console.log(user.Skiils[2]);
// // // console.log(user.avaliable);
// // console.log(user.adresses);
// // console.log(user.adresses.Ksa);
// // console.log(user.adresses.Egypt);
// // console.log(user.adresses.Egypt.one);
// // console.log(user.chkAvaliable());
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// //                New Keyword For Create Object
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let user = new Object({
//   name: "Ahmed",
// });
// user.age = 23;
// user.skills = ["html", "js", "react"];
// user["country"] = "egypt";
// user["sayHello"] = function () {
//   return "Good For Work";
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.skills[1]);
// console.log(user.country);
// console.log(user.sayHello());
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// //                     This KeyWord
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// console.log(this);
// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let employee = {
//   age: 23,
//   ageInDays: function () {
//     return this.age * 365;
//   },
// };
// console.log(employee["age"]);
// console.log(employee.ageInDays());
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                    create object with =====> Create
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let user = {
//   age: 40,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };
// let copyObj = Object.create(user);
// copyObj.age = 50;
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());
// let user = new Object({
//   age: 40,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// });
// let newObj = Object.create(user);
// newObj.age = 100;
// console.log(newObj.age);
// console.log(newObj.doubleAge());
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                    create object with =====> Assign
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };
// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };
// let taregetObject = {
//   prop1: 100,
//   prop3: 3,
// };
// let finalObj = Object.assign(taregetObject, obj1);
// console.log(finalObj);

// finalObj.prop1 = 500;
// finalObj.prop3 = 1000;

// let newObj = Object.assign({}, obj2, { prop: 8 });
// console.log(newObj);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                   DOM &&& select Element
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let formId = document.getElementsByClassName("form1");
// let selectors = document.querySelector(".my-span");
// let selectorsAll = document.querySelectorAll(".my-span");
// let tags = document.getElementsByTagName("p");
// console.log(formId);
// console.log(selectors);
// console.log(selectorsAll[1]);
// console.log(tags[0]);
// console.log(document.title);
// console.log(
//   (document.links[1].href =
//     "https://www.youtube.com/watch?v=XssakiLXCws&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&index=5")
// );
// console.log((document.forms[0].one.value = "Name"));
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//          get  set elemnts content and attributes
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <span> Js </span> File ";
// myElement.textContent = "Text From <span> Js </span> File ";
// // console.log(document.images[0]);
// document.images[0].src = "https://google.com";
// document.images[0].alt = "alternate";
// document.images[0].title = "picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://music.youtube.com/");
// myLink.setAttribute("title", "Youtube Music");
// // document.getElementById("cl").onclick = function () {
// //   console.log(this);
// // };
// let myButt = document.querySelector(".btn");
// console.log(myButt.innerHTML);
// myButt.innerHTML = " Button ";
// myButt.textContent = " Button";
// console.log(myButt.getAttribute("class"));
// myButt.setAttribute("id", "btn-id");
// console.log(myButt.getAttribute("id"));
// myButt.setAttribute("name", "helloButton");
// // myButt.setAttribute("disabled", "");
// document.getElementById("btn-id").onclick = function () {
//   console.log(this);
// };
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//             check attribues and examples
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// console.log(document.getElementsByTagName("p")[0].attributes);
// let prg = document.getElementsByTagName("p")[0];
// if (prg.hasAttribute("title")) {
//   console.log(`p Has attribute`);
//   prg.removeAttribute("title");
//   prg.setAttribute("title", "new");
// } else {
//   console.log(`p Has not attribute`);
// }

// let dv = document.getElementsByTagName("div")[0];
// if (dv.hasAttributes()) {
//   console.log(`Has attrbute`);
// } else console.log(`div has no attribute`);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//               create and append elements
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let myElement = document.createElement("p");
// let cl = document.createAttribute("data-custom");
// let txt = document.createTextNode("Product One");
// let comment = document.createComment("leaning java");

// console.log(myElement);
// myElement.className = "product";
// myElement.setAttributeNode(cl);
// myElement.setAttribute("data-test", "testing");
// myElement.appendChild(txt);
// myElement.appendChild(comment);
// document.body.appendChild(myElement);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//         product with title & description practice
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for (let i = 1; i <= 100; i++) {
//   let element = document.createElement("div");
//   let head = document.createElement("h2");
//   let txtHead = document.createTextNode(" Text About Header" + [i]);
//   let para = document.createElement("p");
//   let txtPara = document.createTextNode(" Text About Paragraph " + [i]);
//   element.className = "product";
//   head.appendChild(txtHead);
//   para.appendChild(txtPara);
//   element.appendChild(head);
//   element.appendChild(para);
//   document.body.appendChild(element);
// }
// console.log(element);
// console.log(head);
// console.log(para);
// document.body.appendChild(head);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                     deal with children
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let element = document.querySelector("div");
// console.log(element);
// console.log(element.children);
// console.log(element.children[1]);
// console.log(element.childNodes);
// console.log(element.childNodes[0]);
// console.log(element.firstChild);
// console.log(element.lastChild);
// console.log(element.firstElementChild);
// console.log(element.lastElementChild);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                         DOM Events
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let myBtn = document.getElementById("btn");

// myBtn.onload = function () {
//   console.log("clicked");
// };

// window.onresize = function () {
//   console.log("scroll");
// };
// window.onload = function() {
//   console.log("page is fully loaded")
// };

// let form = document.getElementById("form");
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//               validate and prevent default
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");
// // console.log(userInput);
// // console.log(ageInput);

// document.forms[0].onsubmit = function (e) {
//   let uservalid = false;
//   let agevalid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     uservalid = true;
//   }
//   if (ageInput.value !== "") {
//     agevalid = true;
//   }
//   if (uservalid === false || agevalid === false) {
//     e.preventDefault();
//   }
// };
// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//         Dom [ Event simualtion ] (clck - focus - blur)
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// let app = (one.oninput = function () {
//   if (one.value.length === 1) {
//     one.blur();
//     two.focus();
//   }
// });
// window.onload = function () {
//   console.log(two.focus());
// };

// one.onblur = function () {
//   document.links[0].click();
// };
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//               class list object and methods
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let ele = document.getElementById("my-div");
// console.log(ele.classList);
// console.log(typeof ele.classList);
// console.log(ele.classList.contains("osama"));
// console.log(ele.classList.contains("show"));
// console.log(ele.classList.item("0"));

// ele.onclick = function () {
//   // ele.classList.add("three");
//   // ele.classList.remove("one", "two");
//   ele.classList.toggle("show");
// };
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                         css style
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let ele = document.getElementById("my-div");

// ele.style.color = "red";
// ele.style.textAlign = "center";

// ele.style.cssText = "font-weight: bold; color: green ; opacity:0.5";

// ele.style.removeProperty("color");
// ele.style.setProperty("font-size", "50px", "important");

// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty("background-color", "pink");
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//           Before , After , preprend , Append , Remove
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let ele = document.getElementById("my-div");
// let createrP = document.createElement("p");
// ele.append(createrP);
// createrP.append("hello js");
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                       DOM Traversing
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let span = document.querySelector(".two");
// console.log(span.parentElement);
// span.onclick = function () {
//   span.parentElement.style.opacity = "0.5";
//   // span.parentElement.remove();
// };
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                       DOM CLONING
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");
// myDiv.appendChild(myP);
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                      addEventListener
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let myP = document.querySelector("p");

// // myP.onclick = one;

// // function one() {
// //   console.log("Message Fom On click 1 ");
// // }
// // function two() {
// //   console.log("Message Fom On click 2 ");
// // }

// // myP.addEventListener("click", two);
// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   document.body.appendChild(newP);
//   newP.id = "clone";
//   console.log(newP);
// };

// // let cloned = document.querySelector("#clone");

// // cloned.onclick = function () {
// //   console.log("Im Cloned");
// // };

// document.addEventListener("click", function (e) {
//   if (e.target.id === "clone") {
//     console.log("Im Cloned");
//   }
// });
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                          Task
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let myElement = document.createElement("title");
let myTextEle = document.createTextNode("Elzero");

myElement.appendChild(myTextEle);

document.body.appendChild(myElement);
console.log(myElement);

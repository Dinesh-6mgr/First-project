// let sName = prompt("enter your Name");

// const { useId } = require("react");
// const { markAsUncloneable } = require("worker_threads");

// const { log } = require("console")


// const { log } = require("console");

// let English = Number(prompt("Enter your obtain mark in English"));

// let Math = Number(prompt("Enter your obtain mark in Math"));

// let Nepali = Number(prompt("Enter your obtain mark in Nepali"));

// let Social = Number(prompt("Enter your obtain mark in Social"));

// let totalMark = English + Math + Nepali + Social;
// let percentage = totalMark * 100 / 400;
// let GPA = (percentage / 25).toFixed(2);

// if (
//     English >= 35 && Math >= 35 && Nepali >= 35 && Social >= 35

// ) {
//     console.log("Congratulations " + sName + ", You passed the exam");
//     console.log("Total Marks:", totalMark);
//     console.log("Percentage:", percentage + "%");
//     console.log("GPA:", GPA);
// } else {
//     console.log("Sorry " + sName + ", You are Failed");
// }



// if( hour < 12){

//     const hour = t.getHours();

// }
// else
//     let myName = "Dinesh Rana Magar"
// console.log(myName.toUpperCase());
// console.log(myName.toLocaleLowerCase());
// console.log(myName.includes("din"));
// console.log(myName.startsWith("Di"));
// console.log(myName.endsWith("Din"));
// console.log(myName.slice(0,6));
// console.log(myName.replace("Dinesh",""));

// const student = {
//     Math: 56,
//     Science: 85,
//     Social: 95,
//     Health: 65,
//     Nepali: 85,
// };

// const avg = (
//     student.Math +
//     student.Science +
//     student.Social +
//     student.Health +
//     student.Nepali
// ) / 5;

// console.log(avg);
// let users = [
//     { username: "admin", password: "1234" },
//     { username: "user", password: "abcd" }
// ];

// let userName = prompt("Enter Your username");
// let passWord = prompt("Enter your password");


//         let login= false;
//         for (let user of users){
//             if (user.username === userName && user.password === passWord)
//             {
//                 login = true;
//                 break;

//             }
//         }
//         if ( login == true){
//             console.log("Login sucessful")
//         }
//         else{
//             console.log("Incorrect user and password")
//         }




// let person= [

//     {pname:'Dinesh',age: 23},
//     {pname:'Dilan', age: 23}
// ]
// for( let key in person)
// {
//     console.log(key, person[key]);
//     console.log(key, person[key.age]);
// }

// const Item = ['Ball','Bat','Tree']
// Item.forEach(element => {
//     console.log(element)
// });

// let N=32;
// let M = 12;

// function helloworld(N,M){
// return N+M;
// }
// let Multi=helloworld(N,M)
// console.log(Multi)

// let t= new Date()
// const fulldate= t.getMinutes();
// console.log('minute:'+fulldate);
// const students = [
//     {
//         sName: "Dinesh",
//         mark: { math: 35, social: 34 }
//     },
//     {
//         sName: "Hari",
//         mark: { math: 43, social: 45 }
//     }
// ];

// let sumAll = 0;

// students.forEach(student => {

//     const marks = Object.values(student.mark);
//     let sum = 0;
//     for (let m of marks) {
//         sum += m;
//     }
//     const avg = sum / marks.length;
//     console.log("Name:", student.sName, "Average:", avg);

//     sumAll += sum;
// });

// console.log("Total sum of all marks:", sumAll);

//     const students = [
//         {
//             name: "Dinesh",
//             marks: { math: 60, science: 55, english: 65 }
//         },
//         {
//             name: "Hari",
//             marks: { math: 4, science: 45, english: 50 }
//         }
//     ];

//  students.forEach(Element =>{

//     let mark = Object.values(Element.marks);
//     let totalMark = 0;
//     for (key of mark){
//         totalMark += key;


//     }
//      avg = totalMark / mark.length;

//     console.log( "Total mark of",Element.name,"is",totalMark)
//      console.log("Total average of", Element.name, "is", avg)

//      const passed = mark.every(m => m >= 35);
//      console.log(passed ? "Passed" : "Fail");
//  })
// let no = "12.3";
// console.log( no);
//  no2= no;
// console.log()
//  console.log(typeof(no2));
//  console.log(Math.floor(no2))
//  console.log(Math.ceil(no2))
//  console.log(Math.max(12,3,24,5))
//  console.log(Math.min());
// const a = [12,43,2,34,5,6]
// console.log(a.length)



// const arry =[1,23,4,56,7,6]
// const arry2 = arry.map(num => num+2)
// console.log("value:",arry2)
// const arry3 = arry.filter(num => num %2===0)
// console.log(arry3);

// let users = [
//     {
//         userName: "Dinesh Rana",
//         passWord: "Iam9821@"
//     }
// ]

// let students = [
//     {
//         sName: "Hari Sapkota",
//         mark: {
//             math: 45,
//             social: 75,
//             Health: 48,
//             Science: 66
//         }
//     },
//     {
//         sName: "Ram Parsad Aryal",
//         mark: {
//             math: 85,
//             social: 95,
//             Health: 86,
//             Science: 89
//         }
//     }
// ];
// const uid = "Dinesh Rana";
// const uPassword = "Iam9821@";




// users.forEach(user => {

//     if (user.passWord === uPassword && user.userName === uid) {
//         let totalMark = 0;
//         console.log("Loging sucessful")


//         students.forEach(student => {

//             let mark = Object.values(student.mark)
//             let sNam = student.sName;
//             totalMark = 0;
//             for (m of mark) {

//                 totalMark += m;

//             }
        
            

//             for (m of mark) { }
//             let Av = totalMark / mark.length;

//             console.log(`Name: ${sNam.toUpperCase()} `)
//             console.log(`Total Mark: ${totalMark}`)
//             console.log(`avrage Mark: ${Av}`)

//             console.log("...........................")
//         })



//     }
//     else if (user.userName === uid) {

//         console.log("Wrong password")

//     }
//     else {
//         console.log("Invalid User and password")

//     }
// })


// user data (database)
// let users = [
//     {
//         userName: "Dinesh Rana",
//         passWord: "Iam9821@"
//     }
// ];

// // DOM elements
// const loginBtn = document.getElementById("loginBtn");
// const message = document.getElementById("message");

// loginBtn.addEventListener("click", () => {

//     const uid = document.getElementById("username").value;
//     const pwd = document.getElementById("password").value;

//     let isLoggedIn = false;

//     users.forEach(user => {
//         if (user.userName === uid && user.passWord === pwd) {
//             isLoggedIn = true;
//         }
//     });

//     if (isLoggedIn) {
//         message.innerText = "Login Successful ";
//         message.style.color = "green";
//     } else  {
//         message.innerText = "Invalid Username or Password ";
//         message.style.color = "red";
//     }
// });


// 1. Write a program that takes two user inputs for first and 


// var a = prompt("Enter you name")
//  var b = prompt("Enter your last name")
//  alert("welcome "+""+a+b);



// // 2. Write a program to take a user input about his favorite 

// var text = "samsung galaxy s8 plus";
// var length = text.indexOf("s");
// console.log (length)

// 3. Write a program to find the index of letter “n” in the word 


// var a = "pakistan";
// var b = a.indexOf("n")
// console.log("The index of n"+""+b)






// 4. Write a program to find the last index of letter 

// var a = "Hello world";
// var b = a.lastIndexOf("l");
// document.write("The last index of l"+" "+b);



// 5. Write a program to find the character at 3rd 


// var a ="pakistani";
// var c = a.indexOf("i")
// document.write("the index of i is"+""+c);



// 6. Repeat Q1 using string concat() method


// var a = ["Firstname","","Talha"];
// var b = a.concat("Lastname"+"Haroon");
// document.write(b)


// 7. Write a program to replace the “Hyder” to “Islam” 

// var par = "Hyderabad";
// var dot = par.replace("Hydera","Islama")
// document.write("City "+""+hyderabad +"<br>"+dot);



// 8. Write a program to 

// var d = "ali and zain are best friend";
// var c = d.replace("zain","usama")
// console.log(c)





// 9. Write a program that converts a string “472” to a number 


// var a = 472;
// var b = a.toString();
// document.write(b)


// 10. Write a program that takes user input. Convert 

// var a = prompt("Enter your input");
// var b= a.toUpperCase(a);
// document.write(b)




// 11. Write a program that takes user input. Convert and 

// var a = prompt("Enter your skills");
// var b = a.toLowerCase(a);
// document.write(b);



// 13. Write a program to take user input and store usernam

// var name = prompt("Enter your username");
// if (name==="ALI@"){
//     alert("Enter a valid username");
// }
// if(name==="Ali"){
//     alert("your name is"+name)
// }




// 14. You have an array 

// var a = ["bread","milk","cookie"];
// var search = prompt("Enter your product");
// if (a.indexOf(search)!== -1){
//     alert("yes"+search+"is available"+);

// }
// else{
//     alert("no"+search+"is available")
// }


// 16. Write a program to convert 

// var uni = "University of Karachi";
// var count = uni.split("");
// document.write(count);






// 17. Write a program to display the last character 


// var count= "Pakistan";
// var b = count.charAt(7);
// document.write("User input"+count+"<br>"+"last character of input"+ " " +b)




                            //    Assignment # 26-3



//    1. Write a program that takes a positive integer   



// var a = 3.45214;
// var b = Math.round (a)
// document.write("round off value "+b);



// var a = 3.45214;
// var b = Math.floor (a)
// document.write("floor value of the number"+ " " +b);




// var a = 3.45214;
//  var b = Math.ceil(a)
//  document.write("Ceil value of the number"+ " " +b);




// 4. Write a program that simulates a dice using random



// var i = Math.random()*5
// console.log(i);



// 5. Write a program that simulates a coin toss using 


// var head = prompt("Enter heads username");
// var tail= prompt("Enter tails username");
// var toss = Math.random()*2
// var floor =Math.floor (toss)
// if(floor === 0){
//     alert("heads"+head +" "+"win the toss")
// }
// else{
//     alert("Tails"+" "+tail+"win the toss")
// }



// 7. Write a program that asks the user about his weight

// var a  = prompt("Enter your weight");
// document.write("your  weight is "+a+ "  " +"kg")


// 8. Write a program that stores 

// var a = prompt("Enter  secret number 1 to 10");
// if(a==3){
//     alert("correct answer")
// }
// else{
//     alert("wrong Answer")
// }





                                //   Assignment # 31-34 





//  1. Write a program that displays current 

// var a = new Date();
// document.write(a);




// 2. Write a program that alerts the current month in words. For example December. 

// var dayNames = ["jan", "feb", "mar", "april", "may", "june", "july"]; 
//  var now = new Date(); 
//   var theDay = now.getMonth(); 
//    var nameOfToday = dayNames[theDay];
//   document.write("Current Month is "+"  "+nameOfToday)


// 3. Write a program that alerts the first 3 letters of the current 
 

// // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// //  var now = new Date(); 
// //   var theDay = now.getDay(); 
// //   var nameOfToday = dayNames[theDay];
// //  document.write("Today is"+"  "+nameOfToday)




// 5. Write a program that shows the message “First 


// var a = new Date();
// var b  = a.getDate();
// if(b < 15){
//     alert("first fifteen days of month")
// }
// else if (a >16){
//     alert("last days of month")
// }


// 6. Write a program that determines the minutes since 

// var a = new Date();
// var b = a.getMilliseconds()
// var c = a.getMinutes();
// document.write(a+"<br>"+b+"<br>"+c)





// 7. Write a program that tests whether 

// var a = new Date();
// var b = a.getHours();
// if(b>=5){
//     alert("its am")
// }
// else{
//     alert("its pm")
// }



// var a = new Date();
// var b = a.setMonth();
// console.log(b)



// 8. Write a program that creates a Date object for the last day 


// var doomsday = new Date("dec 31, 2020");
// console.log(doomsday)


// 9. Create a date object of the starting date of this Ramadan 


//  var a = new Date();
//  var b = a.getUTCDate();
//  var c  = new Date("21 may")
//  var e = c.getUTCDate();
//  var f = b+e;
//  document.write(f+""+" days Passed");


// 10. Write a program that displays in your browser 

// var d = Date.parse("March 21, 2015");

// document.write(d)



// 11. Create a Date object for the current date 

// var a = new Date();
// var b = a.getHours()
// document.write("todays date"+a)
// document.write(b+1+"add 1 hour")





// 12. Write a program that creates a date object 

// var a = new Date();
// document.write(a+"<br>");
// var b = new Date("june 21,1915")
// document.write("100 years back"+""+b)




// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
 
 

//      var dob = new Date(prompt("Enter your date of bith","Jan 1, 1970"))
//      var dobmili = dob.getTime();
//     var today = new Date();
//     var todaymili = today.getTime()
//     var diff = todaymili - dobmili;
//     var accuage = Math.floor(diff/(1000*60*60*24*30*12))
//     document.write(accuage);
     


   //  function


//    1. Write a function that display

// var a = new Date();
// function date(){
//     alert(a)
// }
// date();


//    2. 
 
 

// function name (){
//     alert("Hello Talha")
    
// }

// name()



// 3. Write a function that adds two numbers  
 




    
// function add (a,b,c){
//     var b = a+b+c
//      return b;

// }
//  var f = add(2,3,4);
//  alert(f)


// task no 4

// function calc(num1,opr,num2){
//         if(opr === "+"){
//              return num1 + num2
//          }
//         else if(opr === "-"){
//              return num1 - num2
//          } 
//          else if(opr === "*"){
//              return num1 * num2
//        }else{
//              return "Incorrect Operator!"
//          }
//      }
//      var result = calc(5,"+",5);
//      var result1 = calc(4,"-",6);
//      var result2 = calc(4,"*",9)
//      console.log(result)
//      console.log(result1)
//      console.log(result2)
    




// 6. Write a function that computes factorial of a number


// function add (a,b,c,d,e,f,g){
//          var b = a*b*c*d*e*f*g;
//           return b;
    
//      }
//       var f = add(2,3,4,5,6,7,8);
//       alert(f)







// 7. Write a function that take start and e

// function main (){
// for (var b = 1;b<= 10;b++){
//          document.write(b)
//        }
//       }
// main();



function code(){
    var a = "lazy dog "
    var b = a.toUpperCase();
    alert(b)
}
code();






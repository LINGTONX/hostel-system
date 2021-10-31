//FUNCTIONS
// var age=prompt("Enter Your Age");
//  if (age < 18){
//        alert("Sorry, you are too young to drive this car. Powering off");
//     } 
// else if ( age > 18){
//     alert("Powering On. Enjoy the ride!");
// }
// else if ( age = 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

// function SayHello(){
//     console.log("hello")
// }
// SayHello();

// //OR

// var sayBye = function(){
//     console.log("Bye")
// }
// sayBye();

// function add(a,b){
//     return a+b;
// }
// add(5,10);

function checkDriverAge(){
    var age = prompt("What is your Age");
    if (age < 18){
        alert("Sorry, you are too young18 to drive this car. Powering off"); 
    }
    else if (age > 18){
        alert("Powering On. Enjoy the ride!") ;
    }
    else if (age = 18){
        alert("Congratulations on your first year of driving. Enjoy the ride!") ;
    }
}
checkDriverAge();
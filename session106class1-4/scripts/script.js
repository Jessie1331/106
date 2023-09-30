// section 106 class 1

//function sayHello(name,lastName){


// console.log("Hello"+" "+ name+" "+ lastName);
// var color = "green";

// function sum(num1, num2){
//     var res = num1 + num2;

// }
// }

// function printNumbers(){
//     //print numbers from 1 to 10
//     //except the 3 and the 7 cuz i dont like it 
//     for (let i = 1; i <=10; i++)
//     if (i !=3 && i !=7)
//       //! = not  //for ()and if() is the scope
//                      // when u create an new it distrots the old 
//      //&& = and
//      //|| = or
 
//     list = [121,1515,534,115,54,854,9752,3654,21,54,162,158];
//      // 1. PRINT PRINT EVERY NUMBER BY SEPERATED
//      //2. print the sum of all the numbers
//      for let i=0; i<list.length; i++){
//         let num = list[i];
//         console.log(num);
//         //2 
//         sum += num; // this is = to sum = sum + num
//         // print the numbers that are grater then 200
//         let num = list[i];
//         if num > 200; i<list.length; i++
//      }
//            console.log(num)
   
// }

//      console.log(i);

   
//      // dry (dont repeat yourself) -jquery
//      //srp (single responsability principle)
//      //kiss (keep it simple)

//      function init(){
//         const name = "jesenia";
//         console.log("Hello World");
//         sayHello(name,"Guerrero");
//         sayHello("jane","doe");
      
    
//     }
//  window.onload = init;

// Assignment 1,2,3 is to push to git hub provide git hub-link
// dom->father->child  modify the dom to creat dynamic pages
// css gose from top to bottom and left to right
//jave modifies the DOM
// brush up on jquery  
//Learn about AJEX
// emmit documentaion/ abrivations


// CLASS 2 

function saveTask(){
    console.log("saveTask");

}
function taggleImportant(){
    const nonImportantIcon = 'fa-regular fa-circle-check';
    const importantIcon = "fa-solid fa-circle-check";

    // $("#iImportant").removeclass(nonImportantIcon);
    // $("#iImportant").addclass(ImportantIcon);
    //or

     $("#iImportant").removeclass(nonImportantIcon).addclass(ImportantIcon);
   
    
}
function init(){
    console.log("taskManager");
    //load data

    $("#btnSave").click(saveTask)
    //document.getElementById("btnSave").click();''

    //create a functionname toggled important, then just console.log
     // a message when the user clicks on it 

$("#iImportant").click(toggleImportant);

}

window.onload = init;
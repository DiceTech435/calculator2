 let num1 = document.getElementById("num1");
 let num2 = document.getElementById("num2");

// keyup
// keypress
// change
// blur

num1.addEventListener("keyup", function(){
    
    // let num1 = ;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
     
    let value1 = parseInt(num1);
    let value2 = parseInt(num2);

    // define Regex rule
    let rule = /^[0-9]+$/;

    if(!rule.test(num1) || !rule.test(num2)){
    document.getElementById("answer").value ="Enter valid numbers";
    return false;
    }else{

    document.getElementById("answer").value = value1 + value2;

    }
   
    
 });

 
num2.addEventListener("keyup", function(){
    
    // let num1 = ;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
     
    let value1 = parseInt(num1);
    let value2 = parseInt(num2);

    // define Regex rule
    let rule = /^[0-9]+$/;

    if(!rule.test(num1) || !rule.test(num2)){
    document.getElementById("answer").value ="Enter valid numbers";
     return false;
    }else{

    document.getElementById("answer").value = value1 + value2;

    }
   
    
 });





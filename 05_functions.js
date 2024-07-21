function oddEven(num1){
    if (num1%2==0){
        console.log("Number is Even")
    }
    else{
        console.log("Number is Odd")
    }

}
//oddEven(8)

function square(num2){
    return num2 * num2;
}
//console.log(square(4))


function max(num1 , num2){
    if(num1 > num2){
        return num1
    }
    else if (num2 > num1){
         return num2
    }
    else{
        return "both are equal";
}
}

//console.log(max(5,5))

function concate(str1 , str2){
    return str1 + str2 ;
}

//console.log(concate("Anmol ","Pandey"))

const sumOfTwo = (num1 , num2)=>{
    return num1 + num2;
}
//console.log(sumOfTwo(4,7))


const containsLetter = (str1 , str2 ) => {
    for(let i = 0; i < str1.length; i++) {
        if(str1[i]===str2){
            
            return true
        }    
    }
    return false
}
//console.log(containsLetter("Anmol" ,"p"))


function product( a , b = 10){
    return a * b
}

//console.log(product(2))
//console.log(product(2,4))


function greeting(name , age = 18){
    return `Hi my name is ${name} and my age is ${age}`
}

//console.log(greeting("Anmol" , 12 ))

// higher order functions
function multipleExe( anotherfunction , number){
          for (let index = 0; index < number; index++) {
                anotherfunction();
            
          }
}

function callYourself(){
    console.log("Hi My name is Anmol")
}

 //multipleExe(callYourself , 4)

 //higher order - 2

 const hof = (func1 , func2 , value) =>{
    const result = func1(value);
    return func2(result)
 }

 function one(num1){
    return num1 +1;
 }

 function two(num2){
    return num2-2;
 }
console.log(hof(one , two , 5));
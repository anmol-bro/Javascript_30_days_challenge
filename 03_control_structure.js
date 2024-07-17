let number = -5

if(number > 0){
    console.log("Number is Positive")
}
else if(number<0){
    console.log("Number is Negative")
}
else {
    console.log("Number is Zero")
}


let age = 18

if (age >=18){
    console.log("Eligible for Vote")
}
else{
    console.log("Not eligible for vote")
}

// largest number among three variables

let num1 = 5
let num2 = 7
let num3 = 2

if(num1>num2){
    if(num1 > num3){
        console.log(`${num1} is largest`)
    }
    else{
        console.log(`${num3} is largest`)
    }
}
else{
    if (num2 > num3){
        console.log(`${num2} is largest`)
    }
    else{
        console.log(`${num3} is largest`)
    }
}

//  switch case to determine the day of the week in javascript

let day = 0
switch(day){
    case 0 : console.log("Sunday")
    break;
    case 1 : console.log("Monday")
    break;
    case 2 : console.log("Tuesday")
    break;
    case 3 : console.log("wed")
    break;
    case 4 : console.log("Thurs")
    break;
    case 5 : console.log("Fri")
    break;
    case 6 : console.log("Sat")
    break;
    default :
    console.log("enter the valid date")
}


//  switch case to assign on the basis of score 
let score = 20
switch (true){
    case (score>=80 && score<=100 ): console.log("A")
    break;
    case (score>=60): console.log("B")
    break;
    case (score>=50): console.log("C")
    break;
    case (score>=40): console.log("D")
    break;
    case (score<30): console.log("E")
    break;
    default: console.log("ENTER A VALID SCORE")
}

//leap year program 

let year = 2021
if ( year%400==0){
    console.log("Leap Year")
}
else if (year%4 ==0 && year % 100 !=0){
    console.log("Leap Year")
}else{
    console.log("Not leap year")
}

//printing 1-10 numbers using for loop
for (let i = 1; i <= 10; i++) {
    const element = i;
   // console.log(element)
    
}
//table of 5 
for (let j = 1; j <= 10; j++) {
    const element = 5 * j;
    //console.log(element)
}
//sum of numbers from 1 to 10
let n = 1;
let sum = 0
while (n<=10){
    sum += n;
    n++;
}
//console.log(sum)
// print numbers from 10 - 1

let number = 10
while (number!=0){
   // console.log(number)
    number -=1
}

// do while to print 1 to 5
let num1 = 1
do{
   // console.log(num1);
    num1 +=1;
}
while(num1 <= 5)

// factorial using do while 

let num2 = 5
let fact = 1
do{
    fact = fact * num2 ;
    num2 -= 1;
}
while (num2>0)
   // console.log(fact)

// pattern using nested for loop

for (let k = 1; k <= 5; k++) {
    let pattern = " "
    for (let l = 1; l <= k; l++) {
        pattern += "* "
    } 
   // console.log(pattern)  
}

// use continue to skip 5 while printing 1 to 10
// use break to exit loop when 7 occour
let num3 = 10
for (let i = 0; i <= 10; i++) {
    if (i === 5){
        continue;
    }
  //  console.log(i)
    
}

for (let j = 0; j < 10; j++) {
    if(j === 7 ){
        break;
    }
    console.log(j)

    
}
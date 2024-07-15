let num1 = 8
let num2 = 5

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)

num1 += 1
num2 -= 1

// console.log(num1)
// console.log(num2)

let var1 = 6
let var2 = 5


console.log(var1 > var2);
console.log(var1 < var2);
console.log(5<=5)
console.log(5>="6")      // 6 in string will be treated as integer in comparision

console.log(2=="2")
console.log(2==="2")      //strict check , type should be same



if (5==5 && 2<9){              // and
    console.log(`condition is true`)
}

if (5==5 || 2>9){            // or
    console.log(`condition is true`)
}

if (5!=4){               
    console.log(`condition is true`)
}

console.log( var1===0 ? 'zero' : var1 > 0 ? 'positive' : 'negative')

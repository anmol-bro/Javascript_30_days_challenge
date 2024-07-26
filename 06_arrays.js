const arr1 = [1,2,3,4,5]
//console.log(arr1);

//console.log(arr1[0]);
//console.log(arr1[arr1.length - 1]); 
//arr1.push(8); //push operation to append the number in array
//arr1.pop() ; //pop operation to delete the last element in the array
//arr1.unshift(8);
//arr1.shift();
//console.log(arr1)


//map , double the numbers

const myArray = [1,2,3,4,5,6]

const myNewArray = myArray.map( (num) => num * 2 );
//console.log(myNewArray);

//filter , give even numbers

const myArray1 = [1,2,3,4,5,6,7,8]
const myNewArray1 = myArray1.filter( (nums)=> nums % 2==0);
//console.log(myNewArray1);

//reduce , sum of all the numbers in the array

const myArray2 =[1,2,3,4,5,6,7,8,9,10]
const myNewArray2 = myArray2.reduce( (acc , nums) => acc + nums , 0 );
//console.log(myNewArray2);

//for loop

const arr2 = [1,2,3,4,5]
for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
   // console.log(element)
   
}
//for Each

const arr3=[1,2,3,4,5]
//const newarr3 = arr3.forEach( (nums)=> {console.log(nums)} )

// matrics 

const matrix = [[1,2,3] , [4,5,6] ,[7,8,9]]

for(i = 0 ; i<matrix.length ; i++ ) {
    let smallMatrix =[]
    for(j = 0 ; j<matrix[i].length ; j++){
        smallMatrix.push(matrix[i][j])
    }
    console.log(smallMatrix)
    smallMatrix=[]
}


console.log(matrix[2][1])

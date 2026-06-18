//task present and absent; by using foEach method & of operator & for loop simple.

let arr = [1,0,1,0,1,1];

let present = 0;
let absent = 0;

// for(let i =0;i<arr.length;i++){
//     if(arr[i] === 1){
//         present++;
//     }else{
//         absent++;
//     }
// }


// console.log(`present = ${present} absent = ${absent}`);



// of looping statement to get 

// for(let num of arr){
//     if(num === 1){
//         present++;
//     }else{
//         absent++;
//     }
// }
//  console.log(`present = ${present} absent = ${absent}`);


//for using the forEach method;

arr.forEach((a)=>{
    if(a===1){
        present++;
    }else{
        absent++
    }
})

console.log(`present = ${present} absent = ${absent}`);


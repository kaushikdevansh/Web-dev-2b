//TDZ: when ew declare the variable with let and constt without its proper initialization then the variable lies in temporal dead zone until iths propre initialialization

//  let arr1 = [32 , 12 , 33 , 40 , 22 , 17 , 31 , 39 , 18 , 11]
// let arr2 = arr1.filter((x)=>{
//     if(x>=16){
//         console.log(x , "pass")
//     }
//     else{
//         console.log(x , "fail")
//     }
// });
// console.log(arr2 ,)

//Q - 2)
let arr3 = [1 , 2 , 3 , 4 , 5]
let sum = 0
for(let i = 0; i<=arr3.length;i++){
    sum = sum + arr3[i];
}
console.log(sum)




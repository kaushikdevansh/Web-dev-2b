// let array = ["apple" , "cherry" , "banana"]
// let newlength = array.pop("apple");
// console.log(newlength)

// let arr = [1 , 2 , 3 , 3 ,  4 , 5]
// let rev = []
// while(arr.length>0){
//     rev.push(arr.pop())
// }
// console.log(rev);

// let arr = [ 1 , -2 , 6 , -11 , 7]
// let res = []

// while(arr.length>0){
//     let val = arr.shift();
//     if(val>0){
//         res.push(val);
//     }
// }
// console.log(res)

//Q --3) check if an array is palindrome
function palindrome() {
let arr = [1 , 2 , 3 , 2 , 1]
let original = []
let reverse = []

for (let i=0;i<arr.length;i++){
    original.push(arr[i]);
}

while(arr.length>0){
    reverse.push(arr.pop())
}

for(i=0;i<original.length;i++){
    if(original[i] !== reverse[i]){
        return "not a palindrome"
        
    }

    
    
}
return "palindrome"
}
console.log(palindrome())


// let abc = 123;

// function test(){
//     //let abc = 567;
//     console.log(abc);

//     if(true){
//         var abc = 789
//         console.log(abc)
//     }
// }
// test()
// console.log(abc)





let abc = 123

function outer(){

    let num = 1;

    function inner(){
        console.log(num,abc)
        num++;
    }

    return inner;
}

let fn = outer();
fn();
fn();
fn();
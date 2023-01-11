import '../styles/style.css';


// vid 1
//     console.log("start");
//     setTimeout(()=>{
//         console.log("Timer");
//     }, 3000);
//     console.log("end");


// vid 2
//     function greet(name){
//         const greetPromise = new Promise(function(resolve, reject){
//             resolve(`Hello ${name}`);
//         });
//         return greetPromise;
//     }

//     const suzie = greet("suzie");

//     console.log(suzie); // shows the promise/receipt

//     suzie.then((result)=>{   // shows the result/product
//         console.log(result);       
//     });

const URL = "https://api.pinterest.com/v5/ad_accounts";

async function getData(URL){
    const response = await fetch(URL);
    console.log(response);
}

getData(URL);
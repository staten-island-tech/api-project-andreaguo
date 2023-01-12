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

const URL = "https://rickandmortyapi.com/api/character/";

async function getData(URL){
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const array = data.array
        console.log(data);
        document.getElementById("cold").textContent = data.results[0].gender;
        hug();
    } catch (error) {
        console.log(error);
    }
    
}

function hug(){


}

getData(URL);
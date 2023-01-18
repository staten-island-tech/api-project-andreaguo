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
        if (response.status < 200  || response.status >299) {
            console.log(response.status);
            throw error(response);
        } else {
            const data = await response.json();
            cards(data);
        }    
    } catch (error) {
        console.log(error);
    }
}

function cards(data){
    const array =  data.results;
        console.log(array);
        console.log(data);
        array.forEach((el)=> document.getElementById("cold").insertAdjacentHTML(
            "afterbegin",
            `<div class="character">
            <p>${el.name}</p>
            </div>`
        )) 
}

getData(URL);

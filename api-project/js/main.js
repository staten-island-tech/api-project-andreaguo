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

import { cardFunctions, buttonFunctions } from "./functions.js";

const DOMSelectors={
    home: document.querySelector(".home"),
    male: document.querySelector(".male"),
    female: document.querySelector(".female"),
    human: document.querySelector(".human"),
    alien: document.querySelector(".alien"),

};

const URL = "https://rickandmortyapi.com/api/character/"

async function getData(URL){
    try {
        const response = await fetch(URL);
        if (response.status < 200  || response.status >299) {
            console.log(response.status);
            throw error(response);
        } else {
            const data = await response.json();
            const array =  data.results;
            cards(array);
            homeBTN(array);
            buttonG(DOMSelectors.male, array, "Male");
            buttonG(DOMSelectors.female, array, "Female");
            buttonS(DOMSelectors.human, array, "Human");
            buttonS(DOMSelectors.alien, array, "Alien");
        }    
    } catch (error) {
        console.log(error);
    }
}

getData(URL);

document.querySelector(".color").addEventListener("click", function () {
    if (document.body.classList.contains("cool")) {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
    } else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
    }
});
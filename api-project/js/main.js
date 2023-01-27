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

import { DOMSelectors } from "./DOM.js";


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


function cards(array){
    console.log(array);
    array.forEach((el)=> document.getElementById("cold").insertAdjacentHTML(
        "afterbegin",
        `<div class="flip-card">
        <div class="flip-card-inner">
        <div class="flip-card-front">
            <h3>${el.name}</h3>
            <img src=${el.image} alt="character image">
        </div>
        <div class="flip-card-back">
            <h3>${el.name}</h3>
            <h3>${el.gender}</h3> 
            <h3>${el.origin.name}</h3>
        </div>
        </div>
        </div>
    </div>`
    )) 
}

function homeBTN(array){
    DOMSelectors.home.addEventListener("click", function(){
    remove();
    cards(array);         
})
}

function buttonG(DOM, array, type){
    DOM.addEventListener("click", function(){
    remove();
    const name = filterGender(array, `${type}`)
    const newArr = Array.from(name)
    cards(newArr);
    })
}

function buttonS(DOM, array, type){
    DOM.addEventListener("click", function(){
    remove();
    const name = filterSpecies(array, `${type}`)
    const newArr = Array.from(name)
    cards(newArr);
    })
}

function filterGender(array, type){
    return array.filter((el)=> el.gender === `${type}`)
}

function filterSpecies(array, type){
    return array.filter((el)=> el.species === `${type}`)
}

function remove(){
    document.querySelectorAll(".flip-card").forEach((e)=> e.remove()); 
}

document.getElementById("picture").addEventListener("click", function () {
    if (document.body.classList.contains("cool")) {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
    } else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
    }
});
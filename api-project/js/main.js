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
            const malefilter = filterGender(array, "male");
            const array1 = Array.from(malefilter);
            cards(array);
            homeBTN(array);
            maleBTN(array1);
        }    
    } catch (error) {
        console.log(error);
    }
}

function cards(array){
        console.log(array);
        array.forEach((el)=> document.getElementById("cold").insertAdjacentHTML(
            "afterbegin",
            `<div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <h3>${el.name}</h3>
                <img src=${el.image} alt="">
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
    document.querySelectorAll(".flip-card").forEach((e)=> e.remove());
    cards(array);         
})
}
//you only need one of the functions that allows any filter/button
//that you want to press to filter through that when you pass that
//specific property in through the paraeter
// ie:
// function button(home, array1)
//const array1 = Array.from() <-- this will map a new array specific to each filter

function maleBTN(array1){
    DOMSelectors.male.addEventListener("click", function(){
    document.querySelectorAll(".flip-card").forEach((e)=> e.remove()); 
    cards(array1);
    })
}

function filterGender(array, type){
    return array.filter((el)=> el.gender === `${type}`)
}

getData(URL);


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

export { buttonFunctions, cardFunctions };
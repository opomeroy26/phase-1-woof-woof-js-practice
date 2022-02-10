//Global Variable
const URL = "http://localhost:3000/pups"

//DOM Selectors
const topDogBar = document.querySelector("#dog-bar")
const dogInfo = document.querySelector("#dog-info")
const btn = document.querySelector("#good-button")

//const btn = document.querySelector('#good-dog-filter')




//Listeners
//btn.addEventListener("click", () => toggleButton(e))

//Fetcher
function getAllDogInfo () {
    return fetch(URL)
    .then(resp => resp.json())
    
}

//Render Functions
function renderPupArr(pupArr) {
    pupArr.forEach(pupObj => renderSpan(pupObj))
}

function renderSpan(pupObj){
    //console.log('obj: ', pupObj)
    const span = document.createElement('span')
    topDogBar.append(span)
    span.textContent = pupObj.name

    span.addEventListener("click", () => addPupInfo(pupObj))
}

function addPupInfo(pupObj){
    dogInfo.innerHTML = `
    <img src="${pupObj.image}" />
    <h2>${pupObj.name}</h2>
    <button id="good-button">${goodDog(pupObj)}" </button> `
    const btn = document.querySelector("#good-button")
    btn.addEventListener("click", () => switchGood(pupObj))

    function switchGood(pupObj){
        //console.log(switchGood)
        if (pupObj.isGoodDog === true) {
            return btn.textContent = "Bad Dog!"
        } else if (pupObj.isGoodDog === false){
            return btn.textContent = "Good Dog!"
        }
        
        }
  
}

    

function goodDog(pupObj) {
    if (pupObj.isGoodDog === true) {
        return "Good Dog!"
    } else {
        return "Bad Dog!"
    
    }
    
}

//Event Handlers

function toggleButton(pupObj) {
    console.log("btn pressed")
}

//Initialize Functions 
getAllDogInfo().then(pupArr => renderPupArr(pupArr))

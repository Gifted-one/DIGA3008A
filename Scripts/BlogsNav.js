const listElements = document.querySelectorAll(".nav li");
const leftButton = document.querySelector(".bar-btn.left");
const rightButton = document.querySelector(".bar-btn.right");

let elementIndex = 0;
let visibleElements  = 4;

function displayFour(){

    listElements.forEach((listElement) => {
        listElement.classList.add("hidden");
    });

    for (let i = elementIndex; i < visibleElements + elementIndex; i++){

        listElements[i].classList.remove("hidden");
    }

    if(elementIndex === listElements.length - visibleElements)
    {
        rightButton.classList.add("hidden");
    }
    else{
        rightButton.classList.remove("hidden");
    }

    if(elementIndex === 0){

        leftButton.classList.add("hidden");
    }
    else{
        leftButton.classList.remove("hidden");
    }

    if(isMobile){
        visibleElements = 2;
    }
    else{
        visibleElements = 4;
    }


}

function isMobile() {
    return window.innerWidth <= 1200;
  }

leftButton.addEventListener("click", () => {
    if (elementIndex > 0) {
        elementIndex--;
        displayFour();
    }
});
  
rightButton.addEventListener("click", () => {
    if (elementIndex < listElements.length - visibleElements) {
        elementIndex++;
        displayFour();
    }
});
  

displayFour();
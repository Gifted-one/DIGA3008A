const listElements = document.querySelectorAll(".nav li");
const leftButton = document.querySelector(".bar-btn.left");
const rightButton = document.querySelector(".bar-btn.right");
const pageKey = 'scrollProgress_' + window.location.pathname;

const Navigation = document.getElementsByClassName("Top_Nav");

let elementIndex = 0;
let visibleElements = 4;

let lastScrollTop = 0;

function displayFour(){

    checkMobile();
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


}

function checkMobile() {

    if(window.innerWidth <= 850){
        visibleElements = listElements.length;
    }
    else{
        visibleElements = 4;
    }
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

let maxScroll = parseFloat(localStorage.getItem(pageKey)) || 0;


window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
  
    if (scrolled > maxScroll) {
      maxScroll = scrolled;
      localStorage.setItem(pageKey, maxScroll); // Save progress using page-specific key
    }
  
    document.getElementById('progress-bar').style.width = `${maxScroll}%`;
    document.getElementById('progress-label').textContent = `${Math.round(maxScroll)}%`;

});
  

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // Scrolling down
      Navigation[0].classList.add("hidden2");
    } 
    else {
      // Scrolling up
      Navigation[0].classList.remove("hidden2");
    }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});
  
  
window.addEventListener("resize", displayFour);
checkMobile();
displayFour();

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('progress-bar').style.width = `${maxScroll}%`;
  document.getElementById('progress-label').textContent = `${Math.round(maxScroll)}%`;

});

  
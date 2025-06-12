
const pageKey = 'scrollProgress_' + window.location.pathname;
let maxScroll = parseFloat(localStorage.getItem(pageKey)) || 0;

const Navigation = document.getElementsByClassName("Top_Nav");

let lastScrollTop = 0;

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

  
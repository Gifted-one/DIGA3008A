
const pageKey = 'scrollProgress_' + window.location.pathname;
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
  


  
  
window.addEventListener("resize", displayFour);
checkMobile();
displayFour();

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('progress-bar').style.width = `${maxScroll}%`;
  document.getElementById('progress-label').textContent = `${Math.round(maxScroll)}%`;
});

  
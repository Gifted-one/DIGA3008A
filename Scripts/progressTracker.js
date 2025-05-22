document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#blogs li");

    items.forEach(item => {
      const path = item.getAttribute("data-path");
      const key = "scrollProgress_" + path;
      const value = localStorage.getItem(key);
      const percent = value ? Math.round(parseFloat(value)) : 0;
      const link = item.querySelector("a");

      // Create progress label
      const pTag = document.createElement("p");
      pTag.textContent = "Progress: " + `${Math.round(value)}%`;
      if(window.innerWidth <= 850){

        pTag.classList.add("progressTrackMobile");
        link.appendChild(pTag);

      }
      else{

        pTag.classList.add("progressTrackDesktop");
        item.appendChild(pTag);

      }


    });


  });
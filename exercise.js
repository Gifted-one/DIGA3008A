const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".carousel li");
const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

let currentIndex = 1;
const visibleCards = 3;
let previousIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const carouselWrapper = document.querySelector(".bar");

carouselWrapper.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  false
);

carouselWrapper.addEventListener(
  "touchend",
  (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  },
  false
);

function isMobile() {
  return window.innerWidth <= 900;
}

function updateCarousel() {
  // Clear all classes
  cards.forEach((card) => {
    card.classList.remove(
      "dominant",
      "hidden",
      "card-left",
      "card-center",
      "card-right",
      "slide-in-left",
      "slide-in-right"
    );
    card.classList.add("hidden");
  });

  const direction = currentIndex > previousIndex ? "right" : "left";
  const centerCard = cards[currentIndex];

  // Show the center card always
  centerCard.classList.remove("hidden");
  centerCard.classList.add("card-center", "dominant", `slide-in-${direction}`);
  centerCard.addEventListener(
    "animationend",
    () => {
      centerCard.classList.remove(`slide-in-${direction}`);
    },
    { once: true }
  );

  // Only show side cards on non-mobile
  if (!isMobile()) {
    if (cards[currentIndex - 1]) {
      cards[currentIndex - 1].classList.remove("hidden");
      cards[currentIndex - 1].classList.add("card-left");
    }
    if (cards[currentIndex + 1]) {
      cards[currentIndex + 1].classList.remove("hidden");
      cards[currentIndex + 1].classList.add("card-right");
    }
  }

  // Disable buttons at edges
  leftBtn.disabled = currentIndex === 0;
  rightBtn.disabled = currentIndex === cards.length - 1;
}

function handleGesture() {
  const swipeThreshold = 50; // minimum distance to count as a swipe

  if (
    touchEndX < touchStartX - swipeThreshold &&
    currentIndex < cards.length - 1
  ) {
    // Swiped left
    previousIndex = currentIndex;
    currentIndex++;
    updateCarousel();
  } else if (touchEndX > touchStartX + swipeThreshold && currentIndex > 0) {
    // Swiped right
    previousIndex = currentIndex;
    currentIndex--;
    updateCarousel();
  }
}

leftBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    previousIndex = currentIndex;
    currentIndex--;
    updateCarousel();
  }
});

rightBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    previousIndex = currentIndex;
    currentIndex++;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);
updateCarousel();

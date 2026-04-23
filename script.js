// ✅ LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1500);
});

// ✅ SLIDER DATA
const slidesData = [
  {
    title: "<span class='highlight'>CONNECT</span>.<span class='highlight'> CELEBRATE</span>.<br>EXPERIENCE MORE",
    desc: "Discover <span class='highlight'>Nutritious Meal Plans</span> And Quick Bites Designed To Fit Your Lifestyle."
  },
  {
    title: "WEAR YOUR ENERGY.<br>LIVE YOUR <span class='highlight'>STYLE</span>",
    desc: "From <span class='highlight'>Activewear To Streetwear</span>, Find Pieces That Inspire Confidence."
  },
  {
    title: "FUEL YOUR BODY WITH <span class='highlight'>SMART, DELICIOUS CHOICES</span>",
    desc: "Discover Nutritious Meal Plans And Quick Bites."
  }
];

let current = 0;

const slides = document.querySelectorAll(".slide");
const title = document.getElementById("hero-title");
const desc = document.getElementById("hero-desc");
const dotsContainer = document.getElementById("dots");

// ✅ CREATE DOTS ONCE
slidesData.forEach((_, i) => {
  const dot = document.createElement("div");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("div");

// ✅ UPDATE FUNCTION
function updateSlider() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === current);
  });

  title.innerHTML = slidesData[current].title;
  desc.innerHTML = slidesData[current].desc;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}

// ✅ AUTO SLIDE
setInterval(() => {
  current = (current + 1) % slidesData.length;
  updateSlider();
}, 4000);

// INITIAL LOAD
updateSlider();
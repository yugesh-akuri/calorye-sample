const slidesData = [
  {
    title: "<span class='highlight'>CONNECT</span>.<span class='highlight'> CELEBRATE</span>.<br>EXPERIENCE MORE",
    desc: "Discover <span class='highlight'>Nutritious Meal Plans</span> And Quick Bites Designed To Fit Your Lifestyle, Powered By Calor'ye Hive."
  },
  {
    title: "WEAR YOUR ENERGY.<br>LIVE YOUR <span class='highlight'>STYLE</span>",
    desc: "From <span class='highlight'>Activewear To Streetwear</span>, Find Pieces That Inspire Confidence — Inside And Out."
  },
  {
    title: "FUEL YOUR BODY WITH <span class='highlight'>SMART, DELICIOUS CHOICES</span>",
    desc: "Discover <span class='highlight'>Nutritious Meal Plans</span> And Quick Bites — Designed To Fit Your Lifestyle."
  }
];

let current = 0;

const slides = document.querySelectorAll(".slide");
const title = document.getElementById("hero-title");
const desc = document.getElementById("hero-desc");
const dotsContainer = document.getElementById("dots");

function updateSlider() {

  // Update images
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === current);
  });

  // Update text (IMPORTANT: using innerHTML)
  title.innerHTML = slidesData[current].title;
  desc.innerHTML = slidesData[current].desc;

  // Update dots
  dotsContainer.innerHTML = slidesData.map((_, i) =>
    `<div class="${i === current ? 'active' : ''}"></div>`
  ).join("");
}

// Auto slide
setInterval(() => {
  current = (current + 1) % slidesData.length;
  updateSlider();
}, 3000);

// Initial load
updateSlider();
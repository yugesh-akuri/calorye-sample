document.addEventListener("DOMContentLoaded", () => {

  const slidesData = [
    {
      title: "<span class='highlight'>CONNECT</span>.<span class='highlight'> CELEBRATE</span>.<br>EXPERIENCE MORE",
      desc: "Discover Nutritious Meal Plans And Quick Bites."
    },
    {
      title: "WEAR YOUR ENERGY.<br>LIVE YOUR <span class='highlight'>STYLE</span>",
      desc: "From Activewear To Streetwear, Find Confidence."
    },
    {
      title: "FUEL YOUR BODY WITH SMART CHOICES",
      desc: "Healthy meals made simple."
    }
  ];

  let current = 0;

  const slides = document.querySelectorAll(".slide");
  const title = document.getElementById("hero-title");
  const desc = document.getElementById("hero-desc");
  const dotsContainer = document.getElementById("dots");

  if (!dotsContainer) {
    console.error("DOTS CONTAINER NOT FOUND ❌ Check HTML id='dots'");
    return;
  }

  dotsContainer.innerHTML = "";

  slidesData.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";

    dot.addEventListener("click", () => {
      current = i;
      update();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function update() {
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dots.forEach((d, i) => d.classList.toggle("active", i === current));

    title.innerHTML = slidesData[current].title;
    desc.innerHTML = slidesData[current].desc;
  }

  setInterval(() => {
    current = (current + 1) % slidesData.length;
    update();
  }, 4000);

  update();
});
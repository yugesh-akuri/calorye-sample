document.addEventListener("DOMContentLoaded", () => {
  const slidesData = [
    {
      desc: "Calor'ye Hive is building a refined digital presence around lifestyle discovery, brand identity, and future-ready experiences."
    },
    {
      desc: "A minimal public-facing website created to establish the official online presence of the Calor'ye Hive brand."
    },
    {
      desc: "This page is intentionally simple, focused on brand introduction, visual identity, and trust."
    }
  ];

  let current = 0;

  const slides = document.querySelectorAll(".slide");
  const desc = document.getElementById("hero-desc");
  const dotsContainer = document.getElementById("dots");

  if (!dotsContainer || !desc || slides.length === 0) return;

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
    slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
    desc.textContent = slidesData[current].desc;
  }

  setInterval(() => {
    current = (current + 1) % slidesData.length;
    update();
  }, 4000);

  update();
});

// // Set launch date
// const launchDate = new Date("2026-01-01T00:00:00").getTime();
// const countdownEl = document.getElementById("countdown");
// const yearEl = document.getElementById("year");

// // Countdown timer
// const timer = setInterval(() => {
//   const now = new Date().getTime();
//   const distance = launchDate - now;

//   if (distance <= 0) {
//     clearInterval(timer);
//     countdownEl.textContent = "Launched! 🎉";
//     return;
//   }

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
// }, 1000);

// Dynamically update the year in footer
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

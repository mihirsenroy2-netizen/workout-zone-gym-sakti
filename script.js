document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("show"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("show")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.getElementById("joinForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const goal = document.getElementById("goal").value;
  const message = document.getElementById("message").value.trim();

  // Replace this number with the real gym WhatsApp number before publishing.
  const whatsappNumber = "910000000000";
  const text = `Hello Workout Zone Gym!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AGoal: ${encodeURIComponent(goal)}%0AMessage: ${encodeURIComponent(message)}`;
  status.textContent = "Opening WhatsApp for your enquiry...";
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
});

document.getElementById("whatsappBtn").addEventListener("click", e => {
  e.preventDefault();
  const whatsappNumber = "910000000000"; // CHANGE THIS
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Workout Zone Gym! I want to know more about joining the gym.")}`, "_blank");
});
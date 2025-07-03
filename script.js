emailjs.init("e_ZtfdVSvmavWPzUa");

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_qm3p2qk', 'template_l2fvgml', '#contact-form')
    .then(() => {
      alert("✅ Message sent successfully!\nI'll get back to you soon.");
      document.getElementById("contact-form").reset();
    }, (error) => {
      console.error("❌ EmailJS Error:", error);
      alert("❌ Failed to send message.\n\nError: " + error.text);
    });
}

var typed = new Typed("#typed-text", {
  strings: ["AI/ML Developer", "IoT Innovator", "Visionary Engineer", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

function toggleTheme() {
  document.body.classList.toggle("light");
  const button = document.querySelector(".theme-toggle");
  button.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
}

window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});

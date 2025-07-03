emailjs.init("e_ZtfdVSvmavWPzUa");

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_qm3p2qk', 'template_l2fvgml', '#contact-form')
    .then(() => {
      alert("✅ Message sent successfully!\nI'll get back to you soon.");
      document.getElementById("contact-form").reset();
    }, (error) => {
      console.error("❌ EmailJS Error:", error);
      alert("❌ Failed to send message. Please check your internet connection or try again later.\n\nError: " + error.text);
    });
}

var typed = new Typed("#typed-text", {
  strings: ["AI/ML Developer", "IoT Innovator", "Visionary Engineer", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

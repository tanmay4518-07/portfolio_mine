// === VanillaTilt for Parallax Effect on Project Cards ===
VanillaTilt.init(document.querySelectorAll('.project-card'), {
  max: 10,
  speed: 400,
  glare: true,
  'max-glare': 0.5,
});

// === Scroll Animation for Fade-in Effect ===
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// === Back to Top Button ===
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Contact Form Submission using EmailJS ===
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = {
    from_name: formData.get('name'),
    from_email: formData.get('email'),
    message: formData.get('message'),
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
    .then(response => {
      alert('Message sent successfully!');
      form.reset();
    })
    .catch(error => {
      alert('Something went wrong, please try again later.');
      console.error('Error sending message:', error);
    });
});

// === Theme Toggle (Light/Dark) ===
const themeToggleButton = document.querySelector('.theme-toggle');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  // Change theme toggle button text
  if (document.body.classList.contains('dark-theme')) {
    themeToggleButton.textContent = 'Light Mode';
  } else {
    themeToggleButton.textContent = 'Dark Mode';
  }
});

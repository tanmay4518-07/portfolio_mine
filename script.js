// EmailJS Configuration
emailjs.init("e_ZtfdVSvmavWPzUa");

// Email sending function
function sendEmail(e) {
  e.preventDefault();
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  
  emailjs.sendForm('service_qm3p2qk', 'template_l2fvgml', '#contact-form')
    .then(() => {
      // Success
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.style.background = '#10b981';
      
      // Show success message
      showNotification('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
      
      // Reset form
      document.getElementById("contact-form").reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 3000);
      
    }, (error) => {
      // Error
      console.error("❌ EmailJS Error:", error);
      submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed to Send';
      submitBtn.style.background = '#ef4444';
      
      showNotification('❌ Failed to send message. Please try again.', 'error');
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 3000);
    });
}

// Notification system
function showNotification(message, type) {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span>${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : '#ef4444'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    max-width: 400px;
    animation: slideInRight 0.3s ease;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  `;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
  const typed = new Typed("#typed-text", {
    strings: [
      "AI/ML Developer",
      "Full-Stack Developer", 
      "IoT Innovator",
      "Computer Vision Engineer",
      "Problem Solver"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
});

// Theme toggle functionality - Updated for dark theme as default
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  
  body.classList.toggle('light');
  
  // Update icon - reversed logic since dark is default
  if (body.classList.contains('light')) {
    themeIcon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme - Updated for dark theme as default
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');
  
  // Default to dark theme
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    themeIcon.className = 'fas fa-moon';
  } else {
    // Dark theme is default, so set sun icon
    themeIcon.className = 'fas fa-sun';
  }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});

// Back to top button functionality
window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('backToTop');
  
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Observe sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Observe cards
  const cards = document.querySelectorAll('.project-card, .skill-category');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Navbar background on scroll - Updated for glassmorphism
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 50) {
    navbar.style.background = document.body.classList.contains('light') 
      ? 'rgba(255, 255, 255, 0.15)' 
      : 'rgba(255, 255, 255, 0.05)';
  } else {
    navbar.style.background = document.body.classList.contains('light') 
      ? 'rgba(255, 255, 255, 0.25)' 
      : 'rgba(255, 255, 255, 0.05)';
  }
});

// Preloader (optional)
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 300);
  }
});

// Form validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });
    
    input.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        validateField(this);
      }
    });
  });
  
  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Validate based on field type
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      showFieldError(field, 'This field is required');
    } else if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        showFieldError(field, 'Please enter a valid email address');
      }
    }
    
    return isValid;
  }
  
  function showFieldError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    `;
    field.parentNode.appendChild(errorDiv);
  }
});

// Initialize 3D Tilt Effects
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tilt for project cards
  const projectCards = document.querySelectorAll('.project-card[data-tilt]');
  projectCards.forEach(card => {
    VanillaTilt.init(card, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      perspective: 1000,
      scale: 1.02
    });
  });

  // Initialize tilt for skill categories
  const skillCategories = document.querySelectorAll('.skill-category[data-tilt]');
  skillCategories.forEach(category => {
    VanillaTilt.init(category, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.15,
      perspective: 1000,
      scale: 1.05
    });
  });
});

// Resume download functionality
document.addEventListener('DOMContentLoaded', function() {
  const resumeLink = document.querySelector('a[href="resume_tanmay1.pdf"]');
  if (resumeLink) {
    resumeLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = 'resume_tanmay1.pdf';
      link.download = 'Tanmay_Tripathi_Resume.pdf';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show notification
      showNotification('📄 Resume download started!', 'success');
    });
  }
});

// Add CSS for error states and glassmorphism
const style = document.createElement('style');
style.textContent = `
  .contact-form input.error,
  .contact-form textarea.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
  
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0;
    font-size: 1rem;
  }
  
  .nav-link.active {
    color: var(--primary-color);
  }
  
  .nav-link.active::after {
    width: 100%;
  }
  
  /* Enhanced glassmorphism effects */
  .glass-effect {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
  }
  
  /* Improved mobile glassmorphism */
  @media (max-width: 768px) {
    .nav-menu {
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
    }
  }
`;
document.head.appendChild(style);
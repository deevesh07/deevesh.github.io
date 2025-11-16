/* ==========================================
   Global JavaScript for All Pages
   School of Computing Website
========================================== */

// ========== 1. Fade-in on Scroll ==========
const fadeElements = document.querySelectorAll('.fade-in');

function handleScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// ========== 2. Dark Mode Toggle ==========
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = "🌙 Toggle Dark Mode";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "10px 15px";
darkModeBtn.style.border = "none";
darkModeBtn.style.borderRadius = "5px";
darkModeBtn.style.background = "#0059b3";
darkModeBtn.style.color = "white";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.style.zIndex = "999";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
  }
});

// ========== 3. Scroll-to-Top Button ==========
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scrollTop';
scrollBtn.innerHTML = '⬆';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '70px';
scrollBtn.style.right = '20px';
scrollBtn.style.display = 'none';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.width = '40px';
scrollBtn.style.height = '40px';
scrollBtn.style.fontSize = '18px';
scrollBtn.style.background = '#0059b3';
scrollBtn.style.color = '#fff';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.zIndex = '998';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== 4. Typing Effect (Home Page Only) ==========
const typingText = document.querySelector('.typing');
if (typingText) {
  const fullText = typingText.textContent;
  typingText.textContent = '';
  let i = 0;
  function typeEffect() {
    if (i < fullText.length) {
      typingText.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeEffect, 80);
    }
  }
  typeEffect();
}

// ========== 5. Image Popup (Projects Page) ==========
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    overlay.innerHTML = `<img src="${img.src}" alt="popup">`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});

// ========== 6. Simple Form Validation (Contact & Admission Pages) ==========
const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let valid = true;
    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        valid = false;
        input.style.border = '2px solid red';
      } else {
        input.style.border = '1px solid #ccc';
      }
    });
    if (!valid) {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }
  });
});

// ========== 7. Password Strength Checker (Admissions Page) ==========
const passwordInput = document.querySelector('#password');
const strengthText = document.createElement('p');
if (passwordInput) {
  strengthText.style.marginTop = '-10px';
  strengthText.style.fontSize = '0.9rem';
  passwordInput.insertAdjacentElement('afterend', strengthText);

  passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    let strength = '';
    if (value.length < 6) {
      strength = 'Weak';
      strengthText.style.color = 'red';
    } else if (value.match(/[A-Z]/) && value.match(/[0-9]/)) {
      strength = 'Strong';
      strengthText.style.color = 'green';
    } else {
      strength = 'Medium';
      strengthText.style.color = 'orange';
    }
    strengthText.textContent = `Password Strength: ${strength}`;
  });
}

// ========== 8. Smooth Scrolling for Internal Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== 9. Table Row Highlight (Programmes Page) ==========
const tableRows = document.querySelectorAll('table tr');
tableRows.forEach(row => {
  row.addEventListener('mouseover', () => {
    row.style.background = '#d6e4ff';
  });
  row.addEventListener('mouseout', () => {
    row.style.background = '';
  });
});

// ========== 10. Live Clock (Footer) ==========
const footer = document.querySelector('.site-footer p');
if (footer) {
  const clock = document.createElement('span');
  clock.style.marginLeft = '15px';
  footer.appendChild(clock);

  function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();
}

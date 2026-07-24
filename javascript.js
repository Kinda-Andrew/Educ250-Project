// =========================================================
// mobile nav bar stuff and the typewriter effect on the title bit
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initTypewriter();
});

/* ---------------------------------------------------------
   mobile nav 
--------------------------------------------------------- */
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu after a link is chosen (mobile)
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------------------------------------------------
   typing effect
--------------------------------------------------------- */
function initTypewriter() {
  const el = document.getElementById('typedTitle');
  const cursor = document.getElementById('cursor');
  if (!el) return;

  const message = 'Test Time'; // text change here for changes
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    el.textContent = message;
    if (cursor) cursor.classList.add('done');
    return;
  }

  let index = 0;
  const typingSpeed = 75; // ms per character as it displays 

  function typeNextCharacter() {
    if (index <= message.length) {
      el.textContent = message.slice(0, index);
      index += 1;
      setTimeout(typeNextCharacter, typingSpeed);
    } else if (cursor) {
      cursor.classList.add('done');
    }
  }

  typeNextCharacter();
}
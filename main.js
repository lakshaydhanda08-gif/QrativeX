function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('open');
}
function handleWaitlist() {
  const input = document.getElementById('emailInput');
  const note = document.getElementById('waitlistNote');
  if (!input || !note) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    note.textContent = '⚠️ Please enter a valid email.';
    note.style.color = '#f87171';
    return;
  }
  input.value = '';
  note.textContent = '✅ You\'re on the list! We\'ll be in touch soon.';
  note.style.color = '#a78bfa';
}
// Custom Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  }, 80);
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    ring.style.opacity = '0';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.opacity = '1';
  });
});

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Booking Submit
function handleBooking() {
  alert('✅ تم إرسال طلب الحجز بنجاح!\nسنتواصل معك خلال دقائق لتأكيد الحجز 🎮');
}

// Mobile Menu
function toggleMenu() {
  const ul = document.querySelector('nav ul');
  const isOpen = ul.style.display === 'flex';
  ul.style.display = isOpen ? 'none' : 'flex';
  ul.style.flexDirection = 'column';
  ul.style.position = 'fixed';
  ul.style.top = '70px';
  ul.style.right = '0';
  ul.style.left = '0';
  ul.style.background = 'rgba(5,10,18,0.98)';
  ul.style.padding = '24px';
  ul.style.gap = '24px';
  ul.style.backdropFilter = 'blur(20px)';
  ul.style.borderBottom = '1px solid rgba(0,245,255,0.15)';
}

// Stats Counter Animation
window.addEventListener('load', () => {
  document.querySelectorAll('.stat-num').forEach(el => {
    const raw = el.textContent.trim();
    const target = parseInt(raw);
    if (!target) return;
    const hasPlus = raw.includes('+');
    let count = 0;
    const step = Math.ceil(target / 40);
    const t = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + (hasPlus ? '+' : '');
      if (count >= target) clearInterval(t);
    }, 30);
  });
});
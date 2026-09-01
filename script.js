// ── Theme Toggle ──
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
    // Update nav background based on current scroll position
    updateNavBg();
});

// ── Typed animation ──
const typed = document.getElementById('typed-text');
const phrases = ['Python Developer', 'Odoo Developer'];
let pIdx = 0, cIdx = 0, deleting = false;

function typeLoop() {
    const current = phrases[pIdx];
    if (!deleting) {
        typed.textContent = current.slice(0, ++cIdx);
        if (cIdx === current.length) { deleting = true; setTimeout(typeLoop, 2000); return; }
    } else {
        typed.textContent = current.slice(0, --cIdx);
        if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; setTimeout(typeLoop, 400); return; }
    }
    setTimeout(typeLoop, deleting ? 50 : 80);
}
typeLoop();

// ── Nav: smooth highlight on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.4 });
sections.forEach(s => navObs.observe(s));

// ── Hamburger menu ──
const hamburger = document.querySelector('.nav-hamburger');
const navList = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navList.classList.toggle('open'));
navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

// ── Nav background on scroll ──
function updateNavBg() {
    const nav = document.querySelector('nav');
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
        nav.style.background = window.scrollY > 50
            ? 'rgba(248,250,252,0.98)'
            : 'rgba(248,250,252,0.85)';
    } else {
        nav.style.background = window.scrollY > 50
            ? 'rgba(5,15,9,0.97)'
            : 'rgba(5,15,9,0.75)';
    }
}
window.addEventListener('scroll', updateNavBg);

// ── Parallax tilt on hero content (subtle) ──
document.addEventListener('mousemove', e => {
    const hero = document.querySelector('.hero-content');
    if (!hero) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;
    hero.style.transform = `translate(${x}px, ${y}px)`;
});
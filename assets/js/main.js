document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Icons ---------- */
const icons = {
  vip: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2 3 7v6c0 5 4 8.5 9 9 5-.5 9-4 9-9V7l-9-5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12.5 11 14.5 15.5 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  standard: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  fridge: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M5 10h14M9 5.5v2M9 13v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
};

/* ---------- Data ---------- */
const services = [
  { icon:'vip', title:'VIP Flush Toilets', desc:'Premium flushing toilets with hand basins, mirrors and a hotel-grade finish for guests who expect more.',
    items:['Weddings','Corporate Events','VIP Functions','Festivals','Sporting Events'] },
  { icon:'standard', title:'Standard Toilets', desc:'Durable, hygienic portable toilets built for heavy daily use on long-term sites and projects.',
    items:['Construction','Mining','Government Projects','Road Construction','Long-term Rentals'] },
  { icon:'fridge', title:'Mobile Fridge Hire', desc:'Reliable mobile cold storage keeping drinks and perishables cold for events of any size.',
    items:['Weddings','Catering','Events','Outdoor Functions','Beverage Storage'] },
];

const whyUs = [
  { title:'Clean & Sanitized', desc:'Every unit is professionally cleaned and sanitized before and during every hire period.' },
  { title:'Reliable Delivery', desc:'On-time delivery and collection, so your event or site is never left waiting.' },
  { title:'Affordable Pricing', desc:'Transparent, competitive rates with no hidden costs.' },
  { title:'Professional Service', desc:'A trained team that treats every job — big or small — with the same care.' },
  { title:'Nationwide Capability', desc:'From Limpopo to Gauteng and Mpumalanga, we deliver across South Africa.' },
  { title:'Fast Response', desc:'Quick quote turnaround and rapid deployment when you need it most.' },
];

const industries = ['Construction','Mining','Municipalities','Government','Events','Private Functions','Agriculture','Churches','Schools','Festivals'];

const galleryItems = [
  { img:'gallery-delivery-1.jpg', tag:'Delivery', wide:true },
  { img:'vip-interior.jpg', tag:'VIP Interiors' },
  { img:'gallery-event-1.jpg', tag:'Events', tall:true },
  { img:'construction.jpg', tag:'Construction Sites' },
  { img:'fridge.jpg', tag:'Mobile Fridges' },
  { img:'gallery-event-2.jpg', tag:'Events' },
  { img:'gallery-delivery-2.jpg', tag:'Delivery' },
  { img:'gallery-vip-2.jpg', tag:'VIP Interiors', wide:true },
];

const areas = [
  { name:'Polokwane', desc:'VIP &amp; standard toilet hire with fast local delivery across Polokwane.' },
  { name:'Limpopo', desc:'Province-wide toilet and mobile fridge hire for events, farms and sites.' },
  { name:'Mokopane', desc:'Reliable sanitation hire for construction and mining projects.' },
  { name:'Tzaneen', desc:'VIP and standard toilets for events, agriculture and municipal work.' },
  { name:'Gauteng', desc:'Toilet and mobile fridge hire across the greater Gauteng region.' },
  { name:'Pretoria', desc:'Professional VIP and standard toilet hire for events and sites.' },
  { name:'Johannesburg', desc:'Fast-response toilet hire for corporate events and construction.' },
  { name:'Mpumalanga', desc:'Toilet and mobile fridge hire for mining, farms and functions.' },
];

const insights = [
  { img:'blog-count.jpg', tag:'Event Planning', title:'How Many Portable Toilets Do I Need For An Event?' },
  { img:'vip-interior.jpg', tag:'Buyer’s Guide', title:'VIP Toilet Hire vs Standard Toilets: Which Do You Need?' },
  { img:'blog-construction.jpg', tag:'Construction', title:'Why Construction Sites Need Portable Toilets' },
  { img:'fridge.jpg', tag:'Mobile Fridges', title:'Mobile Fridge Hire Guide: Keeping Your Event Cool' },
  { img:'blog-checklist.jpg', tag:'Event Planning', title:'The Ultimate Event Planning Checklist' },
];

/* ---------- Renderers ---------- */
const servicesGrid = document.getElementById('servicesGrid');
services.forEach(s => {
  const card = document.createElement('div');
  card.className = 'service-card reveal';
  card.innerHTML = `
    <div class="service-icon">${icons[s.icon]}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
    <ul class="service-list">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
  `;
  servicesGrid.appendChild(card);
});

const whyGrid = document.getElementById('whyGrid');
whyUs.forEach(w => {
  const card = document.createElement('div');
  card.className = 'why-card reveal';
  card.innerHTML = `
    <div class="why-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <h3>${w.title}</h3><p>${w.desc}</p>`;
  whyGrid.appendChild(card);
});

const industriesGrid = document.getElementById('industriesGrid');
industries.forEach(i => {
  const pill = document.createElement('div');
  pill.className = 'industry-pill reveal';
  pill.textContent = i;
  industriesGrid.appendChild(pill);
});

const galleryGrid = document.getElementById('galleryGrid');
galleryItems.forEach(g => {
  const item = document.createElement('div');
  item.className = 'gallery-item reveal' + (g.wide ? ' wide' : '') + (g.tall ? ' tall' : '');
  item.innerHTML = `<img src="assets/img/${g.img}" alt="${g.tag} — Muandi Rentals" loading="lazy"><span class="gallery-tag">${g.tag}</span>`;
  galleryGrid.appendChild(item);
});

const areasGrid = document.getElementById('areasGrid');
areas.forEach(a => {
  const card = document.createElement('div');
  card.className = 'area-card reveal';
  card.innerHTML = `
    <div class="area-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.6" stroke="currentColor" stroke-width="1.6"/></svg></div>
    <h3>Toilet Hire ${a.name}</h3>
    <p>${a.desc}</p>`;
  areasGrid.appendChild(card);
});

const insightsGrid = document.getElementById('insightsGrid');
insights.forEach(i => {
  const card = document.createElement('div');
  card.className = 'insight-card reveal';
  card.innerHTML = `
    <div class="insight-media" style="background-image:url('assets/img/${i.img}')"></div>
    <div class="insight-body"><span class="tag">${i.tag}</span><h3>${i.title}</h3></div>`;
  insightsGrid.appendChild(card);
});

/* ---------- Header scroll state + progress bar ---------- */
const header = document.getElementById('siteHeader');
const progressBar = document.getElementById('progressBar');

function onScroll(){
  header.classList.toggle('scrolled', window.scrollY > 40);
  const h = document.documentElement;
  const scrollPct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressBar.style.width = scrollPct + '%';
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

/* ---------- Mobile menu ---------- */
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Active nav link on scroll ---------- */
const sections = ['home','about','services','gallery','areas','blog','contact'].map(id => document.getElementById(id));
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => s && sectionObserver.observe(s));

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- Contact form ---------- */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  form.querySelectorAll('[required]').forEach(field => {
    const wrapper = field.closest('.form-field');
    const ok = field.type === 'email'
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())
      : field.value.trim().length > 0;
    wrapper.classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  });

  if (!valid) return;

  formSuccess.classList.add('show');
  form.reset();
  setTimeout(() => formSuccess.classList.remove('show'), 6000);
});

form.querySelectorAll('input, select, textarea').forEach(field => {
  field.addEventListener('input', () => field.closest('.form-field').classList.remove('invalid'));
});

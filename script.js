// ===============================
// PROFILE DATA
// ===============================
const PROFILE = {
  summary: `Data Analyst with 3+ years of experience across consulting and business analytics environments, specializing in Python, SQL, Power BI, Tableau, and machine learning–driven analytics. I've redesigned 50+ business workflows and SQL processes, automated dashboards adopted by cross-functional teams to monitor sales, logistics, and performance KPIs, and delivered predictive and AI-supported analytics solutions driving pricing, inventory, and customer-behavior decisions.`,

  about: `Currently pursuing my Master's in Business Analytics at UMass Amherst (GPA 3.8/4.0), I turn complex, messy data into decisions leaders can act on. My work spans supply-chain analytics at Accenture's Flo Group, automated reporting for retail operations at Poona Agro Cart, and machine-learning projects predicting car prices and customer behavior.

I'm most interested in roles where analytics meets automation — building pipelines and dashboards that stop being "reports" and start being the system of record teams operate from.`,

  stats: [
    { value: "3+",  label: "Years Experience" },
    { value: "50+", label: "Workflows Built" },
    { value: "30+", label: "OIC Integrations" },
    { value: "92%", label: "ML Accuracy" }
  ],

  education: [
    {
      school: "University of Massachusetts Amherst",
      program: "Master's in Business Analytics",
      dates: "Sep 2024 – May 2026",
      location: "Amherst, MA",
      details: [
        "Cumulative GPA: 3.8 / 4.0",
        "Coursework: Business Intelligence, Data Visualization, Statistics for Business, Python, Machine Learning, Advanced Excel"
      ]
    },
    {
      school: "Pune Institute of Computer Technology",
      program: "Bachelor's in Electronics & Telecommunication",
      dates: "Jul 2017 – Sep 2021",
      location: "Pune, India",
      details: [
        "Coursework: OOP, Engineering Mathematics, Data Structures & Algorithms, DBMS"
      ]
    }
  ],

  experience: [
    {
      company: "Poona Agro Cart",
      role: "Business Analyst Intern",
      dates: "Aug 2024 – Dec 2024",
      location: "Remote",
      bullets: [
        "Automated Excel dashboards using Power Query, PivotTables, and charts — cutting reporting time by 70% for daily sales and vendor performance tracking.",
        "Built 5+ interactive Tableau dashboards analyzing product-wise sales, seasonal demand, and pricing trends, enabling management to track performance across 30+ SKUs.",
        "Consolidated and cleaned 10,000+ transaction records from multiple sources in Power Query, building 10+ KPI metrics to monitor sales growth, vendor performance, and margins."
      ]
    },
    {
      company: "Flo Group (Part of Accenture)",
      role: "Business Analyst",
      dates: "Jul 2023 – Jun 2024",
      location: "Pune, India",
      bullets: [
        "Analyzed 50+ workflows in Oracle Transportation Management (OTM) and refined SQL processes, contributing to a 5% reduction in order-tracking discrepancies and improving on-time delivery by 3%.",
        "Developed Oracle BI dashboards to monitor freight costs and performance, helping cut expedited shipping costs by 3%.",
        "Produced weekly and monthly analytical reports combining OTM and BI data across 5+ operational teams, improving forecasting accuracy and strategic logistics decisions.",
        "Automated data extraction and transformation processes using SQL, reducing manual effort by 15 hours weekly and improving daily sales performance tracking.",
        "Created and optimized 30+ Oracle Integration Cloud (OIC) integrations, automating SQL/PL-SQL workflows connecting ServiceNow and Transporeon — improving logistics efficiency by ~5%."
      ]
    },
    {
      company: "Flo Group (Part of Accenture)",
      role: "Associate Analyst",
      dates: "Jul 2021 – Jun 2023",
      location: "Pune, India",
      bullets: [
        "Queried and validated data across 15 SQL databases to prevent critical order failures.",
        "Implemented a new data-validation process that identified and rectified data errors, improving the accuracy of vendor-performance data by 8% across all reports.",
        "Created ad-hoc SQL reports and KPI dashboards tracking shipment time, carrier compliance, and exception rates across multiple logistics workflows."
      ]
    }
  ],

  academicProjects: [
    {
      title: "Car Price Prediction System",
      subtitle: "Pre-Owned Vehicles",
      stack: ["Python", "XGBoost", "Random Forest", "OLS Regression"],
      bullets: [
        "Engineered an end-to-end ML pricing engine with OLS, Random Forest, and XGBoost to forecast used-car market values across 200+ vehicles and 25+ features.",
        "Performed feature engineering and multicollinearity treatment (VIF); evaluated models with RMSE/MAE — XGBoost emerged as the best performer.",
        "Delivered a 92%-accuracy predictive model producing actionable insights for dealership valuation and pricing strategy."
      ],
      link: "https://github.com/jaswanth343"
    },
    {
      title: "Customer Behavior Analysis",
      subtitle: "End-to-End Pipeline",
      stack: ["Python", "SQL", "Power BI", "Analytics"],
      bullets: [
        "Extracted behavioral patterns from large-scale customer and marketing data to uncover engagement drivers and conversion trends.",
        "Engineered automated data pipelines and interactive Power BI dashboards with 12+ KPIs tracking customer segments and business performance.",
        "Generated data-driven insights supporting customer targeting, campaign optimization, and business strategy."
      ],
      link: "https://github.com/jaswanth343"
    }
  ],

  skills: {
    "Programming & Analytics": [
      "SQL", "Python (Pandas, NumPy, Scikit-learn)", "Machine Learning",
      "Predictive Modeling", "AI-driven Analytics", "Statistical Analysis", "A/B Testing"
    ],
    "Visualization & BI": [
      "Power BI", "Tableau", "Oracle BI Analytics",
      "Dashboard Development", "KPI Design", "ETL Processes", "Data Cleaning"
    ],
    "Data & Cloud": [
      "Snowflake", "Data Warehousing", "Data Modeling",
      "PL/SQL", "XML", "Oracle Cloud", "AWS", "Alteryx"
    ],
    "Platforms & Tools": [
      "Oracle Transportation Management", "Oracle Integration Cloud", "Looker",
      "CRM Tools", "Jira", "ServiceNow", "Git", "Excel (Power Query, PivotTables, VBA)"
    ]
  },

  certifications: [
    { name: "Data Analytics Essentials", org: "Cisco", issued: "Jul 2025" },
    { name: "Financial Analyst – Equity Markets", org: "Finlatics", issued: "Aug 2023" },
    { name: "Power BI for Business Intelligence", org: "Udemy", issued: "May 2022" },
    { name: "SQL (Basic)", org: "HackerRank", issued: "Mar 2022" },
    { name: "ITIL Foundation – IT Service Management", org: "PeopleCert", issued: "Jan 2022" },
    { name: "Oracle Cloud Support Accreditation", org: "Oracle", issued: "Oct 2021" },
    { name: "Foundations: Data, Data, Everywhere", org: "Google (Coursera)", issued: "Sep 2021" },
    { name: "Data Fluency: Exploring & Describing Data", org: "LinkedIn", issued: "Aug 2021" },
    { name: "Learning Data Analytics", org: "LinkedIn", issued: "Aug 2021" },
    { name: "Financial Modeling and Valuation", org: "Internshala", issued: "Jul 2021" }
  ],

  contact: {
    email: "jaswanth.reddy060@gmail.com",
    phone: "(413) 510-7534"
  }
};

// ===============================
// PARTICLE NETWORK BACKGROUND
// ===============================
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [], mouse = { x: -999, y: -999 };
  const PARTICLE_COUNT = 120;
  const CONNECT_DIST = 160;
  const MOUSE_RADIUS = 180;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });

  const COLORS = [
    '0,240,255',   // cyan
    '255,0,170',   // magenta
    '168,85,247',   // purple
    '57,255,20',    // green
    '255,107,43'    // orange
  ];

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - .5) * .5;
      this.vy = (Math.random() - .5) * .5;
      this.r = Math.random() * 2.5 + .6;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.baseAlpha = Math.random() * .4 + .3;
      this.pulse = Math.random() * Math.PI * 2;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      this.pulse += .02;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;

      // mouse interaction — attract nearby, push very close
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < MOUSE_RADIUS && dist > 40) {
        // gentle attraction
        this.x -= dx / dist * .6;
        this.y -= dy / dist * .6;
      } else if (dist <= 40) {
        // repel when too close
        this.x += dx / dist * 2;
        this.y += dy / dist * 2;
      }
    }
    draw() {
      const alpha = this.baseAlpha + Math.sin(this.pulse) * .15;
      // glow effect
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${alpha * .12})`;
      ctx.fill();
      // core
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, w, h);

    // mouse glow
    if (mouse.x > 0) {
      const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
      grd.addColorStop(0, 'rgba(0,240,255,.06)');
      grd.addColorStop(.5, 'rgba(255,0,170,.03)');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.fillRect(mouse.x - 200, mouse.y - 200, 400, 400);
    }

    particles.forEach(p => { p.update(); p.draw(); });

    // connecting lines
    particles.forEach(p => { p.update(); p.draw(); });

    // draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * .18;
          const alpha = (1 - dist / CONNECT_DIST) * .15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,240,255,${alpha})`;
          ctx.lineWidth = .7;
          ctx.stroke();
        }
      }

      // also connect to mouse
      if (mouse.x > 0) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < MOUSE_RADIUS) {
          const alpha = (1 - dist / MOUSE_RADIUS) * .3;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255,0,170,${alpha})`;
          ctx.lineWidth = .8;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

// ===============================
// TYPEWRITER EFFECT
// ===============================
(function typewriter() {
  const el = document.getElementById('typed-target');
  if (!el) return;

  const lines = [
    'Data Analyst · MSBA @ UMass Amherst',
    'SQL · Python · Power BI · Tableau · ML',
    '3+ yrs turning raw data into strategic decisions.',
    'Let\'s build something data-driven together.'
  ];

  let lineIdx = 0, charIdx = 0, deleting = false, pause = 0;

  function tick() {
    const line = lines[lineIdx];
    if (pause > 0) { pause--; requestAnimationFrame(tick); return; }

    if (!deleting) {
      charIdx++;
      if (charIdx > line.length) { pause = 120; deleting = true; }
    } else {
      charIdx--;
      if (charIdx < 0) {
        charIdx = 0;
        deleting = false;
        lineIdx = (lineIdx + 1) % lines.length;
        pause = 30;
      }
    }

    el.innerHTML = line.substring(0, charIdx) + '<span class="typed-cursor"></span>';
    const speed = deleting ? 1 : (Math.random() > .92 ? 8 : 2);
    setTimeout(() => requestAnimationFrame(tick), speed * 16);
  }
  tick();
})();

// ===============================
// NAV TOGGLE (MOBILE)
// ===============================
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    links.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
}

document.querySelectorAll("#nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    links?.classList.remove("active");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================
const sectionEls = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sectionEls.forEach(sec => {
    if (scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

// ===============================
// FOOTER YEAR
// ===============================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===============================
// CONTACT EMAIL & PHONE
// ===============================
const emailText = document.getElementById("email-text");
const emailLink = document.getElementById("email-link");
const phoneText = document.getElementById("phone-text");
const phoneLink = document.getElementById("phone-link");

if (emailText && emailLink) {
  emailText.textContent = PROFILE.contact.email;
  const subj = encodeURIComponent("Portfolio Inquiry");
  const body = encodeURIComponent("Hi Jaswanth,\n\nI'm reaching out after viewing your portfolio.\n\n");
  emailLink.href = `mailto:${PROFILE.contact.email}?subject=${subj}&body=${body}`;
}
if (phoneText && phoneLink) {
  phoneText.textContent = PROFILE.contact.phone;
  phoneLink.href = `tel:${PROFILE.contact.phone.replace(/[^\d+]/g, "")}`;
}

// ===============================
// RENDER SECTIONS
// ===============================
function renderSummary() {
  const el = document.getElementById("summary-content");
  if (!el) return;
  el.innerHTML = `<p class="lede">${PROFILE.summary}</p>
    <p class="about-extra">${PROFILE.about.replace(/\n\n/g, "</p><p class='about-extra'>")}</p>`;
}

function renderStats() {
  const el = document.getElementById("stats-strip");
  if (!el) return;
  el.innerHTML = PROFILE.stats.map(s => `
    <div class="stat">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

function renderEducation() {
  const el = document.getElementById("education-content");
  if (!el) return;
  el.innerHTML = PROFILE.education.map(ed => `
    <div class="card">
      <h3>${ed.school}</h3>
      <div class="meta">${ed.program} &bull; ${ed.dates}</div>
      <div class="meta" style="margin-top:4px; opacity:.85">${ed.location}</div>
      <ul class="bullets">
        ${ed.details.map(d => `<li>${d}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function renderExperience() {
  const el = document.getElementById("experience-content");
  if (!el) return;
  el.innerHTML = PROFILE.experience.map(ex => `
    <div class="role">
      <div class="card">
        <div class="role-head">
          <h3>${ex.role} <span class="at">@ ${ex.company}</span></h3>
          <div class="meta">${ex.dates} &bull; ${ex.location}</div>
        </div>
        <ul class="bullets">
          ${ex.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

function renderAcademicProjects() {
  const el = document.getElementById("academic-projects");
  if (!el) return;
  el.innerHTML = PROFILE.academicProjects.map(p => `
    <div class="project-card featured">
      <h3>${p.title}</h3>
      <div class="meta" style="margin-bottom:6px">${p.subtitle}</div>
      <div class="tech-row">
        ${p.stack.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
      <ul class="bullets">
        ${p.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
      <a href="${p.link}" target="_blank" rel="noreferrer" class="proj-link">
        <i class="fa-brands fa-github"></i> View on GitHub &rarr;
      </a>
    </div>
  `).join("");
}

function renderSkills() {
  const el = document.getElementById("skills-content");
  if (!el) return;
  el.innerHTML = Object.entries(PROFILE.skills).map(([cat, items]) => `
    <div class="skill-category">
      <h4 class="skill-heading">${cat}</h4>
      <div class="skills-grid">
        ${items.map(s => `<span class="pill">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderCertifications() {
  const el = document.getElementById("certifications-content");
  if (!el) return;
  el.innerHTML = PROFILE.certifications.map(c => `
    <div class="card cert-card">
      <h3>${c.name}</h3>
      <div class="meta">${c.org}${c.issued ? ` &bull; ${c.issued}` : ""}</div>
    </div>
  `).join("");
}

renderSummary();
renderStats();
renderEducation();
renderExperience();
renderAcademicProjects();
renderSkills();
renderCertifications();

// ===============================
// SCROLL REVEAL (STAGGERED)
// ===============================
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("revealed");
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.06, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll(".section, .hero-card").forEach((el, i) => {
  el.classList.add("reveal");
  // stagger delay
  const delay = Math.min(i * 0.05, 0.3);
  el.style.transitionDelay = delay + "s";
  revealIO.observe(el);
});

// Also reveal cards inside sections with stagger
const cardRevealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("revealed");
      cardRevealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

document.querySelectorAll(".card, .project-card, .contact-card, .skill-category").forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = (i % 6) * 0.08 + "s";
  cardRevealIO.observe(el);
});

// ===============================
// TILT EFFECT ON HERO CARD
// ===============================
(function tiltHero() {
  const card = document.querySelector('.hero-card');
  if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;
    card.style.transform = `perspective(1000px) rotateY(${x*3}deg) rotateX(${-y*3}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    card.style.transition = 'transform .4s ease';
    setTimeout(() => card.style.transition = '', 400);
  });
})();

// ===============================
// CONTACT FORM
// ===============================
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("form-status");
    if (status) status.textContent = "Transmission received! Use the Email button above to reach me directly.";
    this.reset();
  });
}

// ===============================
// GITHUB PROJECTS
// ===============================
const GITHUB_USERNAME = "jaswanth343";
const MAX_PROJECTS = 6;

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short" });
}

function createProjectCard(repo) {
  const card = document.createElement("div");
  card.className = "project-card reveal";
  card.innerHTML = `
    <h3>${repo.name}</h3>
    <p>${repo.description || "No description yet."}</p>
    <p class="repo-meta">
      Updated ${formatDate(repo.updated_at)}${repo.language ? " &bull; " + repo.language : ""}
      ${repo.stargazers_count ? " &bull; ★ " + repo.stargazers_count : ""}
    </p>
    <a href="${repo.html_url}" target="_blank" rel="noreferrer" class="proj-link">
      <i class="fa-brands fa-github"></i> View Repo &rarr;
    </a>
  `;
  return card;
}

async function loadGitHubProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = `<div class="muted">Loading projects...</div>`;

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error(res.status);
    const repos = await res.json();
    const selected = repos.filter(r => !r.fork && r.name !== `${GITHUB_USERNAME}.github.io`).slice(0, MAX_PROJECTS);

    grid.innerHTML = "";
    if (!selected.length) { grid.innerHTML = `<div class="muted">No public repos yet.</div>`; return; }
    selected.forEach((repo, i) => {
      const card = createProjectCard(repo);
      card.style.transitionDelay = i * .08 + "s";
      grid.appendChild(card);
      cardRevealIO.observe(card);
    });
  } catch (e) {
    grid.innerHTML = `<div class="muted">Couldn't load GitHub projects right now.</div>`;
    console.error(e);
  }
}

loadGitHubProjects();

// ===============================
// EDIT YOUR INFO HERE
// ===============================
const PROFILE = {
  about: `Master’s-prepared Business & Data Analyst with 3+ years of experience delivering data-driven insights, process optimization, and supply chain analytics across global consulting projects. Skilled in SQL, Python, Tableau, and Power BI, I specialize in transforming complex datasets into actionable strategies that improve forecasting, reduce costs, and enhance decision-making.

In my recent role at Flo Group (part of Accenture), I automated SQL workflows, built BI dashboards that helped reduce shipping costs, and led cross-functional workshops to align business and IT goals. Alongside my professional work, I’ve applied machine learning models to predict customer behavior and drive targeted marketing insights.

I’m passionate about AI-driven analytics and data visualization to solve complex business challenges, improve efficiency, and support strategic growth.`,
  education: [
    {
      school: "University of Massachusetts Amherst",
      program: "Master’s in Business Analytics",
      dates: "Expected Graduation: May 2026",
      location: "Amherst, MA",
      details: [
        "Cumulative GPA: 3.7/4.0",
        "Coursework: Business Intelligence, Data Visualization, Statistics for Business, Python, Machine Learning, Excel"
      ]
    },
    {
      school: "Pune Institute of Computer Technology",
      program: "Bachelor’s in Electronics and Telecommunication",
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
      dates: "Jul 2024 – Dec 2024",
      bullets: [
        "Developed automated Excel dashboards and Power BI reports using Power Query, PivotTables, and charts, saving ~10 hours/month while tracking vendor performance (50–100 vendors).",
        "Designed Tableau visualizations for product sales, seasonal demand, and pricing trends—supporting data-driven recommendations and improving sales by ~10%.",
        "Consolidated raw transaction data from multiple sources into a cleaned dataset using Power Query and built KPI metrics for growth and margin analysis."
      ]
    },
    {
      company: "Flo Group (Part of Accenture)",
      role: "Business Architecture Analyst",
      dates: "Jul 2023 – Jun 2024",
      bullets: [
        "Analyzed ~50 workflows in Oracle Transportation Management (OTM) and redesigned SQL processes, reducing order tracking issues by ~5%.",
        "Produced forecasting and decision-support reports by combining OTM and BI data for stakeholders.",
        "Trained a team of 10 on OTM, SQL, and BA skills, improving resolution rates from ~90% to ~95%.",
        "Automated freight data aggregation and visualization via Oracle BI, reducing weekly reporting time by ~2 hours.",
        "Spearheaded a 15-member team to design/optimize 30+ Oracle Integration Cloud (OIC) integrations, automating SQL/PL-SQL workflows and improving efficiency by ~5%."
      ]
    },
    {
      company: "Flo Group (Part of Accenture)",
      role: "Associate Analyst",
      dates: "Jul 2021 – Jun 2023",
      bullets: [
        "Queried and validated data across 15 SQL databases to prevent critical order failures.",
        "Coordinated between IT, logistics, and finance teams; provided project updates and aligned delivery expectations.",
        "Documented business requirements and process maps for new OTM modules, reducing approval time by ~25%.",
        "Created ad-hoc reports and dashboards to track KPIs such as shipment times and carrier compliance."
      ]
    }
  ],
  certifications: [
    { name: "Data Analytics Essentials", org: "Cisco", issued: "Jul 2025" },
    { name: "Financial Analyst – Equity Markets Analyst", org: "Finlatics", issued: "Aug 2023" },
    { name: "Data Science with Python", org: "Finlatics", issued: "—" },
    { name: "Microsoft Power BI Desktop for Business Intelligence", org: "Udemy", issued: "May 2022" },
    { name: "SQL (Basic)", org: "HackerRank", issued: "Mar 2022" },
    { name: "ITIL Foundation Certification in IT Service Management", org: "PeopleCert", issued: "Jan 2022" },
    { name: "Oracle Cloud Support Accreditation : OSC21", org: "Oracle", issued: "Oct 2021" },
    { name: "Foundations: Data, Data, Everywhere", org: "Google (Coursera)", issued: "Sep 2021" },
    { name: "Data Fluency: Exploring and Describing Data", org: "LinkedIn", issued: "Aug 2021" },
    { name: "Learning Data Analytics", org: "LinkedIn", issued: "Aug 2021" },
    { name: "Financial Modeling and Valuation", org: "Internshala", issued: "Jul 2021" },
    { name: "SQL: Data Reporting and Analysis", org: "LinkedIn", issued: "—" },
    { name: "Digital Marketing", org: "Internshala", issued: "—" }
  ],
  contact: {
    email: "jaswanth.reddy060@gmail.com",
    linkedin: "https://www.linkedin.com/in/jaswanth-reddy-lanka/",
    github: "https://github.com/jaswanth343"
  }
};

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
  });
}

document.querySelectorAll("#nav-links a").forEach((a) => {
  a.addEventListener("click", () => {
    links?.classList.remove("active");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 140;
    if (scrollY >= top) current = sec.getAttribute("id");
  });

  navAnchors.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});

// ===============================
// FOOTER YEAR
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();

// ===============================
// CONTACT EMAIL (MAILTO)
// ===============================
const emailText = document.getElementById("email-text");
const emailLink = document.getElementById("email-link");

if (emailText && emailLink) {
  emailText.textContent = PROFILE.contact.email;

  const subject = encodeURIComponent("Portfolio Inquiry");
  const body = encodeURIComponent("Hi Jaswanth,\n\nI’m reaching out after viewing your portfolio.\n\n");

  emailLink.href = `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`;
}

// ===============================
// RENDER ABOUT / EDUCATION / EXPERIENCE / CERTIFICATIONS
// ===============================
function renderAbout() {
  const el = document.getElementById("about-content");
  if (!el) return;
  el.innerHTML = `<p style="margin:0; line-height:1.75; color:rgba(233,238,247,.88)">${PROFILE.about}</p>`;
}

function renderEducation() {
  const el = document.getElementById("education-content");
  if (!el) return;

  el.innerHTML = PROFILE.education.map(ed => `
    <div class="card">
      <h3>${ed.school}</h3>
      <div class="meta">${ed.program} • ${ed.dates}</div>
      <div class="meta" style="margin-top:6px; opacity:.9">${ed.location}</div>
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
        <h3>${ex.role} — ${ex.company}</h3>
        <div class="meta">${ex.dates}</div>
        <ul class="bullets">
          ${ex.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

function renderCertifications() {
  const el = document.getElementById("certifications-content");
  if (!el) return;

  el.innerHTML = PROFILE.certifications.map(c => `
    <div class="card">
      <h3>${c.name}</h3>
      <div class="meta">${c.org}${c.issued && c.issued !== "—" ? ` • Issued ${c.issued}` : ""}</div>
    </div>
  `).join("");
}

renderAbout();
renderEducation();
renderExperience();
renderCertifications();

// ===============================
// CONTACT FORM (DEMO)
// ===============================
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("form-status");
    if (status) status.textContent = "Thanks! Please use the Email button above to contact me.";
    this.reset();
  });
}

// ===============================
// GITHUB PROJECTS AUTO LOAD
// ===============================
const GITHUB_USERNAME = "jaswanth343";
const MAX_PROJECTS = 9;

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
}

function createProjectCard(repo) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${repo.name}</h3>
    <p>${repo.description || "No description yet."}</p>
    <p style="margin-top:10px; font-size:0.9rem; color:rgba(233,238,247,.70);">
      Updated ${formatDate(repo.updated_at)}${repo.language ? " • " + repo.language : ""}
    </p>
    <a href="${repo.html_url}" target="_blank" rel="noreferrer">View on GitHub →</a>
  `;
  return card;
}

async function loadGitHubProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = `<div class="muted">Loading projects…</div>`;

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
    );
    if (!res.ok) throw new Error("GitHub API error: " + res.status);

    const repos = await res.json();
    const selected = repos.filter(r => !r.fork).slice(0, MAX_PROJECTS);

    grid.innerHTML = "";
    selected.forEach(repo => grid.appendChild(createProjectCard(repo)));
  } catch (e) {
    grid.innerHTML = `<div class="muted">Couldn’t load GitHub projects right now.</div>`;
    console.error(e);
  }
}

loadGitHubProjects();

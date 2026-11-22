/* ==========================================================
   app.js – Vanilla JavaScript

   מקרא:
   🟢 [שיעור 2]  פונקציה מ-utils.js שכתבנו לפי שיעור הפונקציות
   🔵 [שלנו]     פונקציה שכתבנו בקובץ הזה
   ⚙️ [מובנה]    פונקציה כללית שמגיעה עם JavaScript או עם הדפדפן
   הרשימה המלאה נמצאת ב-README.md
   ----------------------------------------------------------
   1. Helpers           6. Scroll effects (progress, reveal, nav)
   2. Render sections   7. Mobile menu + theme toggle
   3. Typewriter        8. Card tilt + cursor glow
   4. Count-up stats    9. Contact form validation + submit
   5. Skills filter     10. Init
   ========================================================== */

"use strict";

/* ---------- 1. Helpers ---------- */
/* 🔵 [שלנו] arrow functions עם implicit return | ⚙️ [מובנה] querySelector */
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

/** 🔵 [שלנו] יוצרת אלמנט עם class, מאפיינים וטקסט | ⚙️ [מובנה] createElement, setAttribute, append */
function el(tag, { className, text, attrs = {} } = {}, children = []) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text; // textContent – safe from XSS
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  children.forEach((child) => node.append(child));
  return node;
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* 🔵 [שלנו] default parameter | ⚙️ [מובנה] setTimeout, clearTimeout */
function showToast(message, type = "success") {
  const toast = $("#toast");
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3500);
}

/* ---------- 2. Render sections ---------- */
/* 🔵 [שלנו] | ⚙️ [מובנה] append */
function renderHero() {
  const hero = $("#hero");

  const text = el("div", { className: "hero-text" }, [
    el("p", { className: "eyebrow" }, [el("span", { className: "status-dot" }), ` ${profile.status}`]),
    el("h1", { text: profile.name }),
    el("p", { className: "tagline" }, [
      `${profile.titlePrefix} `,
      el("span", { className: "typer", attrs: { id: "typer", dir: "ltr" } }),
    ]),
    el("p", { className: "lead", text: profile.lead }),
    el("div", { className: "cta" }, [
      el("a", { className: "btn btn-primary", text: "בואו נדבר", attrs: { href: "#contact" } }),
      el("a", { className: "btn btn-ghost", text: "LinkedIn", attrs: { href: profile.links.linkedin, target: "_blank", rel: "noopener" } }),
      el("a", { className: "btn btn-ghost", text: "צפייה בקו״ח", attrs: { href: profile.cv, target: "_blank", rel: "noopener" } }),
      el("a", { className: "btn btn-ghost", text: "הורדת קו״ח ⬇", attrs: { href: profile.cv, download: "Ben Elkayam - CV.pdf" } }),
    ]),
  ]);

  const figure = el("figure", { className: "hero-img" }, [
    el("span", { className: "orbit o1", attrs: { "aria-hidden": "true" } }),
    el("span", { className: "orbit o2", attrs: { "aria-hidden": "true" } }),
    el("img", { attrs: { src: profile.photo, alt: `תמונת פרופיל של ${profile.name}` } }),
    el("figcaption", { text: profile.location }),
  ]);

  hero.append(text, figure);
  $("#navLinkedin").href = profile.links.linkedin;
}

/* 🔵 [שלנו] | ⚙️ [מובנה] forEach */
function renderStats() {
  const container = $("#stats");
  stats.forEach((stat) => {
    const number = el("strong", {
      text: `${stat.prefix}0${stat.suffix}`,
      attrs: { "data-target": stat.value, "data-prefix": stat.prefix, "data-suffix": stat.suffix },
    });
    container.append(el("div", { className: "stat" }, [number, el("span", { text: stat.label })]));
  });
}

/* 🔵 [שלנו] destructuring בפרמטרים | ⚙️ [מובנה] map */
function createCard({ icon, title, text, tags }) {
  const card = el("article", { className: "card tilt" }, [
    el("div", { className: "card-icon", text: icon }),
    el("h3", { text: title }),
  ]);
  if (text) card.append(el("p", { text }));
  if (tags) card.append(el("ul", { className: "tags" }, tags.map((tag) => el("li", { text: tag }))));
  return card;
}

/* 🔵 [שלנו] composition – קוראת ל-createCard | ⚙️ [מובנה] map */
function renderAbout() {
  $("#aboutText").textContent = about.text;
  $("#aboutCards").append(...about.cards.map(createCard));
}

/* 🔵 [שלנו] | ⚙️ [מובנה] map */
function renderExperience() {
  const items = experience.map((job) =>
    el("li", {}, [
      el("time", { text: job.period }),
      el("h3", { text: job.role }),
      el("p", { className: "company", text: job.company }),
      el("ul", { className: "bullets" }, job.bullets.map((b) => el("li", { text: b }))),
    ])
  );
  $("#timeline").append(...items);
}

/* 🔵 [שלנו] composition – קוראת ל-createCard */
function renderEducation() {
  $("#educationCards").append(...education.map(createCard));
}

/* 🔵 [שלנו] | ⚙️ [מובנה] navigator.clipboard.writeText, async/await */
function renderContact() {
  const { email, phone, linkedin } = profile.links;
  const rows = [
    { icon: "📧", text: email, href: `mailto:${email}`, copy: email },
    { icon: "📱", text: phone, href: `tel:${formatPhone(phone)}`  /* 🟢 [שיעור 2] */, copy: phone },
    { icon: "💼", text: linkedin.replace("https://", ""), href: linkedin },
    { icon: "📍", text: profile.location },
  ];

  rows.forEach((row) => {
    const li = el("li", {}, [el("span", { text: row.icon })]);
    li.append(row.href
      ? el("a", { text: row.text, attrs: { href: row.href, dir: "ltr", ...(row.href.startsWith("http") && { target: "_blank", rel: "noopener" }) } })
      : row.text);

    if (row.copy) {
      const copyBtn = el("button", { className: "copy-btn", text: "העתק", attrs: { type: "button", "aria-label": `העתקת ${row.text}` } });
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(row.copy);
          showToast("הועתק ללוח ✓");
        } catch {
          showToast("לא הצלחתי להעתיק", "error");
        }
      });
      li.append(copyBtn);
    }
    $("#contactInfo").append(li);
  });
}

/* ---------- 3. Typewriter – rotating roles ---------- */
/* 🔵 [שלנו] callback – setTimeout(tick) | ⚙️ [מובנה] setTimeout, slice */
function startTypewriter() {
  const target = $("#typer");
  if (prefersReducedMotion) {
    target.textContent = profile.roles.join(" · ");
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = profile.roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    target.textContent = word.slice(0, charIndex);

    let delay = deleting ? 45 : 95;
    if (!deleting && charIndex === word.length) {
      delay = 1600;          // pause on full word
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % profile.roles.length;
      delay = 300;
    }
    setTimeout(tick, delay);
  }
  setTimeout(tick, 1000);
}

/* ---------- 4. Count-up stats (starts when visible) ---------- */
/* 🔵 [שלנו] | ⚙️ [מובנה] requestAnimationFrame, performance.now, Math.min, Math.pow */
function animateCount(node) {
  const target = Number(node.dataset.target);
  const { prefix, suffix } = node.dataset;
  const duration = 1600;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    node.textContent = formatStat(target * eased, prefix, suffix);  // 🟢 [שיעור 2]
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* 🔵 [שלנו] | ⚙️ [מובנה] IntersectionObserver */
function initCounters() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$("strong[data-target]", entry.target).forEach(animateCount);
      obs.unobserve(entry.target); // run once
    });
  }, { threshold: 0.5 });
  observer.observe($("#stats"));
}

/* ---------- 5. Skills – filter + sort ---------- */
const skillsState = { category: "all", sortDesc: null };

/* 🔵 [שלנו] | ⚙️ [מובנה] filter, sort, map, replaceChildren */
function renderSkills() {
  const body = $("#skillsBody");
  let rows = skills.filter((s) => skillsState.category === "all" || s.category === skillsState.category);
  if (skillsState.sortDesc !== null) {
    rows = [...rows].sort((a, b) => (skillsState.sortDesc ? b.level - a.level : a.level - b.level));
  }

  body.replaceChildren(
    ...rows.map((skill, i) => {
      const tr = el("tr", { className: "row-in" }, [
        el("td", { text: skill.area }),
        el("td", { text: skill.tools }),
        el("td", {}, [el("span", { className: `level level-${skill.level}`, text: getLevelName(skill.level)  /* 🟢 [שיעור 2] */ })]),
      ]);
      tr.style.animationDelay = `${i * 60}ms`;
      return tr;
    })
  );
  $("#skillsCaption").textContent = `מוצגים ${rows.length} מתוך ${skills.length} תחומים`;
}

/* 🔵 [שלנו] | ⚙️ [מובנה] addEventListener, closest, classList */
function initSkillFilters() {
  const container = $("#skillFilters");
  skillCategories.forEach((cat) => {
    const btn = el("button", {
      className: `filter-btn${cat.id === "all" ? " active" : ""}`,
      text: cat.label,
      attrs: { type: "button", "data-category": cat.id, "aria-pressed": cat.id === "all" },
    });
    container.append(btn);
  });

  // Event delegation – one listener for all buttons
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", container).forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-pressed", b === btn);
    });
    skillsState.category = btn.dataset.category;
    renderSkills();
  });

  $("#sortLevel").addEventListener("click", () => {
    skillsState.sortDesc = !skillsState.sortDesc;
    $("#sortLevel").textContent = skillsState.sortDesc ? "רמה ↓" : "רמה ↑";
    renderSkills();
  });

  renderSkills();
}

/* ---------- 6. Scroll effects ---------- */
/* 🔵 [שלנו] | ⚙️ [מובנה] IntersectionObserver, requestAnimationFrame, scrollTo */
function initScrollEffects() {
  const progress = $("#scrollProgress");
  const toTop = $("#toTop");
  const header = $(".site-header");

  // rAF throttle – update at most once per frame
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      toTop.classList.toggle("visible", scrollY > 600);
      header.classList.toggle("scrolled", scrollY > 20);
      ticking = false;
    });
  }, { passive: true });

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Reveal sections + their children with stagger
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  $$(".reveal").forEach((section) => {
    $$(".card, .timeline > li, .contact-info li", section).forEach((child, i) => child.style.setProperty("--i", i));
    revealObserver.observe(section);
  });

  // Highlight the active link in the nav
  const links = $$('.nav-links a[href^="#"]');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => navObserver.observe(s));
}

/* ---------- 7. Mobile menu + theme ---------- */
/* 🔵 [שלנו] | ⚙️ [מובנה] addEventListener, classList.toggle */
function initMenu() {
  const toggle = $("#menuToggle");
  const links = $("#navLinks");

  const setOpen = (open) => {
    toggle.classList.toggle("open", open);
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    document.body.classList.toggle("menu-open", open);
  };

  toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));
  links.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

/* 🔵 [שלנו] | ⚙️ [מובנה] localStorage, dataset */
function initTheme() {
  const btn = $("#themeToggle");
  const root = document.documentElement;

  const apply = (theme) => {
    root.dataset.theme = theme;
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", theme === "dark" ? "מעבר למצב בהיר" : "מעבר למצב כהה");
  };

  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch { /* storage blocked */ }
  apply(saved || "dark");

  btn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch { /* ignore */ }
  });
}

/* ---------- 8. Card tilt + cursor glow (desktop only) ---------- */
/* 🔵 [שלנו] | ⚙️ [מובנה] matchMedia, getBoundingClientRect */
function initPointerEffects() {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!finePointer || prefersReducedMotion) return;

  $$(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 → 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${-y * 14}deg) rotateY(${x * 14}deg) translateY(-6px)`;
      card.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });

  const glow = $("#cursorGlow");
  window.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    glow.classList.add("active");
  }, { passive: true });
}

/* ---------- 9. Contact form ---------- */
/* 🔵 [שלנו] פונקציות כערכים בתוך אובייקט (functions as values) */
const validators = {
  name: (v) => (v.trim().length >= 2 ? "" : "נא להזין שם (לפחות 2 תווים)"),
  email: (v) => (isValidEmail(v) ? "" : "כתובת האימייל לא תקינה"),  // 🟢 [שיעור 2]
  message: (v) => (v.trim().length >= 10 ? "" : "ההודעה קצרה מדי (לפחות 10 תווים)"),
};

/* 🔵 [שלנו] early return, Boolean | ⚙️ [מובנה] classList.toggle */
function validateField(input) {
  const check = validators[input.name];
  if (!check) return true;
  const error = check(input.value);
  $(`.error[data-for="${input.name}"]`).textContent = error;
  input.classList.toggle("invalid", Boolean(error));
  input.classList.toggle("valid", !error && input.value.trim() !== "");
  return !error;
}

/* 🔵 [שלנו] | ⚙️ [מובנה] fetch, FormData, URLSearchParams, preventDefault */
function initForm() {
  const form = $("#contactForm");
  const message = $("#message");
  const counter = $("#msgCounter");
  const submitBtn = $("#submitBtn");

  // Live validation after the user leaves a field, then on every keystroke
  Object.keys(validators).forEach((name) => {
    const input = form.elements[name];
    input.addEventListener("blur", () => { input.dataset.touched = "1"; validateField(input); });
    input.addEventListener("input", () => { if (input.dataset.touched) validateField(input); });
  });

  message.addEventListener("input", () => {
    counter.textContent = formatCounter(message.value);                              // 🟢 [שיעור 2]
    counter.classList.toggle("near-limit", isNearLimit(message.value.length));       // 🟢 [שיעור 2]
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fields = Object.keys(validators).map((n) => form.elements[n]);
    const allValid = fields.map(validateField).every(Boolean);
    if (!allValid) {
      fields.find((f) => f.classList.contains("invalid"))?.focus();
      showToast("יש לתקן את השדות המסומנים", "error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "שולח...";
    try {
      // Netlify Forms – AJAX submit
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      fields.forEach((f) => { f.classList.remove("valid"); delete f.dataset.touched; });
      counter.textContent = formatCounter("");  // 🟢 [שיעור 2]
      showToast("ההודעה נשלחה! אחזור אליך בהקדם 🙌");
    } catch {
      showToast("השליחה נכשלה, נסו שוב או שלחו מייל", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "שליחה";
    }
  });
}

/* ---------- 10. Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderStats();
  renderAbout();
  renderExperience();
  renderEducation();
  renderContact();

  startTypewriter();
  initCounters();
  initSkillFilters();
  initScrollEffects();
  initMenu();
  initTheme();
  initPointerEffects();
  initForm();

  $("#year").textContent = new Date().getFullYear();
});

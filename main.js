/* ==========================================================================
   Doctor Portfolio — main script
   Renders all content from data.js, handles navigation, animations and the
   "Ask a Question" form (client-side validation + Formspree delivery).
   ========================================================================== */

(function () {
  "use strict";

  // data.js declares `const DOCTOR_DATA`, which does not attach to window —
  // reference the global identifier directly (with a safe fallback).
  const D = typeof DOCTOR_DATA !== "undefined" ? DOCTOR_DATA : window.DOCTOR_DATA;
  if (!D) {
    console.error("data.js not loaded. Make sure data.js is included before main.js.");
    return;
  }

  /* ---------------- Small helpers ---------------- */

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setText(selector, text) {
    const node = $(selector);
    if (node) node.textContent = text;
  }

  function setHtml(selector, html) {
    const node = $(selector);
    if (node) node.innerHTML = html;
  }

  /* ---------------- Render: document / brand ---------------- */

  document.title = `${D.name}, ${D.credentials} | ${D.title}`;

  $$("[data-brand-name]").forEach((n) => (n.textContent = D.name));
  setText("[data-brand-title]", D.title);

  /* ---------------- Render: hero ---------------- */

  setText("[data-hero-eyebrow]", D.credentials);
  setText("[data-hero-name]", D.name);
  setText("[data-hero-title]", D.title);
  setText("[data-hero-tagline]", D.tagline);

  const heroEmail = $("[data-hero-email]");
  if (heroEmail) heroEmail.textContent = "\u2709\uFE0E " + D.contact.email;



  // Stats strip
  const statsGrid = $("#statsGrid");
  if (statsGrid) {
    statsGrid.innerHTML = (D.stats || [])
      .map(
        (s, i) =>
          '<div class="stat reveal">' +
          '<div class="stat-number" data-count="' + i + '">' + escapeHtml(s.value) + escapeHtml(s.suffix) + "</div>" +
          '<div class="stat-label">' + escapeHtml(s.label) + "</div>" +
          "</div>"
      )
      .join("");
  }

  /* ---------------- Render: about ---------------- */

  setText("[data-about-name]", D.name);
  setHtml(
    "[data-about-paragraphs]",
    (D.aboutParagraphs || []).map((p) => "<p>" + escapeHtml(p) + "</p>").join("")
  );
  setText("[data-fact-languages]", (D.languages || []).join(", "));
  setText("[data-fact-memberships]", (D.memberships || []).join(" \u00B7 "));

  /* ---------------- Render: publications ---------------- */

  setHtml(
    "[data-publications-list]",
    (D.publications || [])
      .map(
        (p) =>
          '<li class="pub-item reveal">' +
          '<span class="pub-year">' + escapeHtml(p.year) + "</span>" +
          "<div>" +
          '<h3 class="pub-title">' +
          (p.link && p.link !== "#" ? '<a href="' + escapeHtml(p.link) + '" target="_blank" rel="noopener">' : "") +
          escapeHtml(p.title) +
          (p.link && p.link !== "#" ? "</a>" : "") +
          "</h3>" +
          (p.authors ? '<p class="pub-authors">' + escapeHtml(p.authors) + "</p>" : "") +
          (p.journal ? '<p class="pub-journal">' + escapeHtml(p.journal) + "</p>" : "") +
          "</div>" +
          "</li>"
      )
      .join("")
  );

  /* ---------------- Render: goals & vision ---------------- */

  setText("[data-vision-quote]", D.visionQuote || "");
  setHtml(
    "[data-goals-list]",
    (D.goals || [])
      .map(
        (g, i) =>
          '<article class="card reveal">' +
          '<div class="card-icon violet" aria-hidden="true">' + ["\u2699\uFE0E", "\u{1F4D6}", "\u{1F4AB}"][i % 3] + "</div>" +
          '<h3 class="card-title">' + escapeHtml(g.title) + "</h3>" +
          '<p class="card-text">' + escapeHtml(g.description) + "</p>" +
          "</article>"
      )
      .join("")
  );

  /* ---------------- Render: referring physicians ---------------- */

  if (D.referral) {
    setText("[data-referral-heading]", D.referral.heading || "For Referring Physicians");
    setText("[data-referral-text]", D.referral.text || "");
    const referralCta = $("[data-referral-cta]");
    if (referralCta) {
      referralCta.textContent = D.referral.cta || "Refer a Patient";
      referralCta.setAttribute("href", "mailto:" + (D.referral.email || ""));
    }
  }

  /* ---------------- Render: footer ---------------- */

  setText("[data-footer-bio]", D.tagline);
  setText("[data-footer-email]", "\u2709\uFE0E " + D.contact.email);
  setHtml(
    "[data-footer-social]",
    (D.social || [])
      .map((s) => '<li><a href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener">' + escapeHtml(s.label) + "</a></li>")
      .join("")
  );
  setText("[data-footer-copy-name]", D.name);
  setText(
    "[data-footer-disclaimer]",
    "Medical disclaimer: The information on this site is for general education and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician with any questions about a medical condition."
  );
  setText("[data-footer-year]", String(new Date().getFullYear()));

  /* ======================================================================
     Interactions
     ====================================================================== */

  /* Header shadow on scroll + back-to-top visibility */
  const header = $("#siteHeader");
  const backToTop = $("#backToTop");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* Mobile menu */
  const navToggle = $("#navToggle");
  const navMenu = $("#navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navMenu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Reveal-on-scroll */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* Animated counters for stats */
  function animateCount(el) {
    const idx = Number(el.dataset.count || 0);
    const stat = (D.stats || [])[idx];
    if (!stat) return;
    const target = Number(stat.value) || 0;
    const duration = 1400;
    const start = performance.now();
    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(target * eased) + stat.suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const counters = $$("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
  }

})();
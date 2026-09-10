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

  /** Turn "Dr. Sameena Tabbasum" into "ST" */
  function initials(name) {
    const words = name.replace(/^Dr\.?\s+/i, "").split(/\s+/).filter(Boolean);
    const first = words[0] ? words[0][0] : "";
    const last = words.length > 1 ? words[words.length - 1][0] : "";
    return (first + last).toUpperCase();
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

  document.title = `${D.name}, ${D.credentials} — ${D.title}`;

  const initialsStr = initials(D.name);

  $$("[data-brand-name]").forEach((n) => (n.textContent = D.name));
  setText("[data-brand-title]", D.title);

  /* ---------------- Render: hero ---------------- */

  setText("[data-hero-eyebrow]", D.credentials);
  setText("[data-hero-name]", D.name);
  setText("[data-hero-title]", D.title);
  setText("[data-hero-tagline]", D.tagline);

  const heroEmail = $("[data-hero-email]");
  const heroPhone = $("[data-hero-phone]");
  const heroLocation = $("[data-hero-location]");
  if (heroEmail) heroEmail.textContent = "\u2709\uFE0E " + D.contact.email;
  if (heroPhone) heroPhone.textContent = "\u2706 " + D.contact.phone;
  if (heroLocation) heroLocation.textContent = "\u25CE " + D.location;

  // Photo: real image if provided, otherwise initials monogram
  const showPhoto = (monogramSel, imgSel) => {
    const monogram = $(monogramSel);
    const img = $(imgSel);
    if (!monogram || !img) return;
    if (D.photo) {
      monogram.hidden = true;
      img.hidden = false;
      img.src = D.photo;
      img.alt = "Portrait of " + D.name;
    } else {
      monogram.textContent = initialsStr;
    }
  };
  showPhoto("[data-photo-monogram]", "[data-photo-img]");
  showPhoto("[data-photo-monogram-lg]", "[data-photo-img-lg]");

  // Floating stat cards + stats strip
  (D.stats || []).forEach((stat, i) => {
    const cardValue = $("[data-stat-value-" + i + "]");
    const cardSuffix = $("[data-stat-suffix-" + i + "]");
    const cardLabel = $("[data-stat-label-" + i + "]");
    if (cardValue) cardValue.textContent = stat.value;
    if (cardSuffix) cardSuffix.textContent = stat.suffix;
    if (cardLabel) cardLabel.textContent = stat.label;
  });

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
  setHtml(
    "[data-credential-chips]",
    (D.credentialChips || []).map((c) => "<li>" + escapeHtml(c) + "</li>").join("")
  );
  setText("[data-fact-languages]", (D.languages || []).join(", "));
  setText("[data-fact-memberships]", (D.memberships || []).join(" \u00B7 "));

  /* ---------------- Render: education (timeline) ---------------- */

  setHtml(
    "[data-education-list]",
    (D.education || [])
      .map(
        (e) =>
          "<li>" +
          '<p class="timeline-period">' + escapeHtml(e.period) + "</p>" +
          '<h3 class="timeline-degree">' + escapeHtml(e.degree) + "</h3>" +
          '<p class="timeline-institution">' + escapeHtml(e.institution) + "</p>" +
          (e.detail ? '<p class="timeline-detail">' + escapeHtml(e.detail) + "</p>" : "") +
          "</li>"
      )
      .join("")
  );

  /* ---------------- Render: experience ---------------- */

  setHtml(
    "[data-experience-list]",
    (D.experience || [])
      .map(
        (x) =>
          '<article class="experience-card reveal">' +
          '<div class="experience-head">' +
          '<div>' +
          '<h3 class="experience-role">' + escapeHtml(x.role) + "</h3>" +
          '<p class="experience-org">' +
          escapeHtml(x.organization) +
          (x.location ? " \u00B7 " + escapeHtml(x.location) : "") +
          "</p>" +
          "</div>" +
          '<span class="experience-period">' + escapeHtml(x.period) + "</span>" +
          "</div>" +
          (x.highlights && x.highlights.length
            ? '<ul class="experience-highlights">' +
              x.highlights.map((h) => "<li>" + escapeHtml(h) + "</li>").join("") +
              "</ul>"
            : "") +
          "</article>"
      )
      .join("")
  );

  /* ---------------- Render: achievements ---------------- */

  setHtml(
    "[data-achievements-list]",
    (D.achievements || [])
      .map(
        (a) =>
          '<article class="card reveal">' +
          '<div class="card-icon gold" aria-hidden="true">\u2B50</div>' +
          '<p class="card-meta">' + escapeHtml(a.year) + (a.organization ? " \u00B7 " + escapeHtml(a.organization) : "") + "</p>" +
          '<h3 class="card-title">' + escapeHtml(a.title) + "</h3>" +
          '<p class="card-text">' + escapeHtml(a.description) + "</p>" +
          "</article>"
      )
      .join("")
  );

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

  /* ---------------- Render: current research ---------------- */

  setHtml(
    "[data-research-list]",
    (D.research || [])
      .map(
        (r) =>
          '<article class="card reveal">' +
          '<div class="card-icon blue" aria-hidden="true">\u{1F52C}</div>' +
          '<h3 class="card-title">' + escapeHtml(r.title) + "</h3>" +
          '<p class="card-text">' + escapeHtml(r.description) + "</p>" +
          (r.status
            ? '<span class="badge badge-' + escapeHtml(r.statusClass || "ongoing") + '">' + escapeHtml(r.status) + "</span>"
            : "") +
          "</article>"
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

  /* ---------------- Render: testimonials ---------------- */

  setHtml(
    "[data-testimonials-list]",
    (D.testimonials || [])
      .map((t) => {
        const tInitials = initials(t.name);
        return (
          '<figure class="testimonial reveal">' +
          '<div class="testimonial-stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>' +
          '<blockquote class="testimonial-quote">' + escapeHtml(t.quote) + "</blockquote>" +
          '<figcaption class="testimonial-author">' +
          '<span class="testimonial-avatar" aria-hidden="true">' + escapeHtml(tInitials) + "</span>" +
          "<span>" +
          '<span class="testimonial-name">' + escapeHtml(t.name) + "</span>" +
          (t.role ? '<br /><span class="testimonial-role">' + escapeHtml(t.role) + "</span>" : "") +
          "</span>" +
          "</figcaption>" +
          "</figure>"
        );
      })
      .join("")
  );

  /* ---------------- Render: services ---------------- */

  setHtml(
    "[data-services-list]",
    (D.services || [])
      .map(
        (s) =>
          '<article class="card service-card reveal">' +
          '<span class="service-tag">' + escapeHtml(s.tag) + "</span>" +
          '<h3 class="card-title">' + escapeHtml(s.title) + "</h3>" +
          '<p class="card-text">' + escapeHtml(s.description) + "</p>" +
          '<a href="#contact" class="service-link">Enquire about this →</a>' +
          "</article>"
      )
      .join("")
  );

  /* ---------------- Render: FAQ ---------------- */

  setHtml(
    "[data-faq-list]",
    (D.faqs || [])
      .map(
        (f) =>
          '<details class="faq-item reveal">' +
          "<summary>" + escapeHtml(f.q) + "</summary>" +
          "<p>" + escapeHtml(f.a) + "</p>" +
          "</details>"
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

  /* ---------------- Render: insurance / directions / emergency ---------------- */

  setText("[data-insurance-list]", (D.insurance || []).join(", "));
  setText("[data-directions-note]", D.directionsNote || "");
  setText("[data-emergency-note]", D.emergencyNote || "");

  /* ---------------- Render: contact ---------------- */

  setText("[data-contact-clinic]", D.contact.clinic);
  setText("[data-contact-address]", D.contact.address);
  setText("[data-contact-email]", D.contact.email);
  setText("[data-contact-phone]", D.contact.phone);
  setText("[data-contact-hours]", D.contact.hours);
  setText("[data-response-note]", D.contact.responseNote || "");

  const emailLink = $(".contact-list a[href^='mailto']");
  if (emailLink) emailLink.setAttribute("href", "mailto:" + D.contact.email);
  const phoneLink = $(".contact-list a[href^='tel']");
  if (phoneLink) phoneLink.setAttribute("href", "tel:" + (D.contact.phoneHref || D.contact.phone.replace(/[^\d+]/g, "")));

  /* Request-type toggle: reveal booking fields when "Book a consultation" is chosen */
  const requestType = $("[data-request-type]");
  const bookingFields = $("#bookingFields");
  const dateInput = $("#f-date");
  if (requestType && bookingFields) {
    const sync = () => {
      bookingFields.hidden = requestType.value !== "Book a consultation";
    };
    requestType.addEventListener("change", sync);
    sync();
  }
  if (dateInput) {
    const today = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    dateInput.min =
      today.getFullYear() + "-" + pad(today.getMonth() + 1) + "-" + pad(today.getDate());
  }

  /* ---------------- Render: footer ---------------- */

  setText("[data-footer-bio]", D.tagline);
  setText("[data-footer-email]", "\u2709\uFE0E " + D.contact.email);
  setText("[data-footer-phone]", "\u2706 " + D.contact.phone);
  setText("[data-footer-address]", "\u25CE " + D.contact.address);
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

  /* ======================================================================
     Ask-a-Question form
     ====================================================================== */

  const form = $("#questionForm");
  if (form) {
    const statusEl = $("#formStatus");
    const submitBtn = $("#formSubmit");

    function showStatus(type, message) {
      statusEl.className = "form-status " + type;
      statusEl.textContent = message;
      statusEl.hidden = false;
      statusEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    function clearStatus() {
      statusEl.hidden = true;
      statusEl.textContent = "";
      statusEl.className = "form-status";
    }

    function markInvalid(input, message) {
      input.classList.add("invalid");
      let err = input.parentElement.querySelector(".field-error");
      if (!err) {
        err = document.createElement("span");
        err.className = "field-error";
        input.parentElement.appendChild(err);
      }
      err.textContent = message;
    }

    function markValid(input) {
      input.classList.remove("invalid");
      const err = input.parentElement.querySelector(".field-error");
      if (err) err.remove();
    }

    form.addEventListener("input", (e) => {
      if (e.target.classList.contains("invalid")) markValid(e.target);
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearStatus();

      // ---- Validate ----
      const name = form.elements["name"];
      const email = form.elements["email"];
      const phone = form.elements["phone"];
      const message = form.elements["message"];

      let firstInvalid = null;
      const setInvalid = (input, msg) => {
        markInvalid(input, msg);
        if (!firstInvalid) firstInvalid = input;
      };

      if (!name.value.trim()) setInvalid(name, "Please enter your name.");
      if (!email.value.trim()) {
        setInvalid(email, "Please enter your email.");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
        setInvalid(email, "Please enter a valid email address.");
      }
      if (phone.value.trim() && !/^[+()\-.\s\d]{7,20}$/.test(phone.value.trim())) {
        setInvalid(phone, "Please enter a valid phone number.");
      }
      if (!message.value.trim()) {
        setInvalid(message, "Please describe your question or concern.");
      } else if (message.value.trim().length < 10) {
        setInvalid(message, "Please provide a little more detail (at least 10 characters).");
      }

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      // ---- Submit ----
      const payload = {
        name: name.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        requestType: form.elements["requestType"] ? form.elements["requestType"].value : "Ask a question",
        preferredDate: form.elements["preferredDate"] ? form.elements["preferredDate"].value : "",
        preferredTime: form.elements["preferredTime"] ? form.elements["preferredTime"].value : "",
        message: message.value.trim()
      };

      const formId = D.form && D.form.formspreeFormId ? D.form.formspreeFormId.trim() : "";

      if (formId) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending\u2026";
        try {
          const res = await fetch("https://formspree.io/f/" + encodeURIComponent(formId), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(payload)
          });
          if (res.ok) {
            form.reset();
            showStatus("success", "Thank you, " + payload.name.split(" ")[0] + "! Your question has been sent. The clinic team will reply to you at " + payload.email + " within 1\u20132 business days.");
          } else {
            showStatus("error", "Something went wrong sending your message. Please try again, or email the clinic directly at " + D.contact.email + ".");
          }
        } catch (err) {
          showStatus("error", "Network error \u2014 please check your connection and try again, or email " + D.contact.email + ".");
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Question";
        }
      } else {
        // Form delivery not configured yet — show a helpful notice
        showStatus(
          "info",
          "This form isn't connected to an inbox yet. To receive submissions by email, create a free form at formspree.io and paste its ID into the form settings in data.js (see README for steps)."
        );
        form.reset();
      }
    });
  }
})();
// Theme Toggle Logic
const themeToggleBtn = document.getElementById("theme-toggle");

const getPreferredTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return "light"; // Clean/white light mode default
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeToggleBtn) {
    const icon = themeToggleBtn.querySelector("i");
    if (icon) {
      if (theme === "dark") {
        icon.className = "fa-solid fa-sun";
        themeToggleBtn.setAttribute("aria-label", "Switch to light theme");
      } else {
        icon.className = "fa-solid fa-moon";
        themeToggleBtn.setAttribute("aria-label", "Switch to dark theme");
      }
    }
  }
};

applyTheme(getPreferredTheme());

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = current === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navbar-links");

hamburger.addEventListener("click", () => {
  const menuIsOpen = navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", String(menuIsOpen));
  hamburger.setAttribute("aria-label", menuIsOpen ? "Close navigation menu" : "Open navigation menu");
});

// Close menu when a link is clicked (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open navigation menu");
  });
});

// Navbar scroll shadow
const navbar = document.querySelector(".custom-navbar");
const updateNavOffset = () => {
  document.documentElement.style.setProperty("--nav-offset", `${navbar.offsetHeight + 16}px`);
};

updateNavOffset();
window.addEventListener("resize", updateNavOffset);



// Let CSS account for the live header height, rather than calculating a fragile page position.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    const targetHref = href === "#main-content" ? "#about" : href;
    document.querySelectorAll('.navbar-links a[href^="#"]').forEach((link) => {
      link.classList.toggle("is-current", link.getAttribute("href") === targetHref);
    });
  });
});

// Fade-in on scroll — only for elements below the initial viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

const viewportHeight = window.innerHeight;

document.querySelectorAll(".timeline-item, .project-card, .section-header, .skill-category, .project-card-modern").forEach((el, i) => {
  const rect = el.getBoundingClientRect();
  // Only animate elements that start below the fold
  if (rect.top > viewportHeight) {
    el.classList.add("fade-up");
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  }
});

// Project filters use the categories already represented by each project's stack and description.
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card-modern[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    projectCards.forEach((card) => {
      const isMatch = filter === "all" || card.dataset.category.split(" ").includes(filter);
      card.classList.toggle("is-filtered-out", !isMatch);
    });
  });
});

// Consolidated high-performance RAF scroll pipeline
const progressBar = document.querySelector(".scroll-progress span");
const sectionLinks = [...document.querySelectorAll('.navbar-links a[href^="#"]')];
const observedSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const sectionTracker = document.querySelector(".section-tracker");
const trackerValue = document.querySelector(".tracker-value");

// Pre-cache section offsets on resize / init to eliminate layout thrashing
let cachedSectionData = [];
const cacheSectionData = () => {
  const threshold = (navbar ? navbar.offsetHeight : 72) + 80;
  cachedSectionData = observedSections.map((sec) => ({
    id: sec.id,
    top: sec.offsetTop - threshold,
    element: sec
  }));
};

window.addEventListener("resize", cacheSectionData);
cacheSectionData();

const getActiveSection = (scrollY) => {
  if (!cachedSectionData.length) return null;

  // Bottom of page check
  if ((window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 60)) {
    return cachedSectionData[cachedSectionData.length - 1];
  }

  // Top of page check
  if (scrollY < 120) {
    return cachedSectionData[0];
  }

  let current = cachedSectionData[0];
  for (const item of cachedSectionData) {
    if (scrollY >= item.top) {
      current = item;
    } else {
      break;
    }
  }
  return current;
};

const updateActiveNav = (scrollY) => {
  const activeItem = getActiveSection(scrollY);
  if (!activeItem) return;

  const activeId = activeItem.id;
  sectionLinks.forEach((link) => {
    link.classList.toggle("is-current", link.getAttribute("href") === `#${activeId}`);
  });

  if (sectionTracker && trackerValue) {
    const headerEl = activeItem.element.querySelector(".section-header h3");
    let label = "About";
    if (headerEl) {
      label = headerEl.textContent.replace(/^0\d\s*\/\s*/, "").trim();
    }
    if (trackerValue.textContent !== label) {
      trackerValue.textContent = label;
      sectionTracker.classList.remove("is-updating");
      void sectionTracker.offsetWidth;
      sectionTracker.classList.add("is-updating");
    }
  }
};

let scrollRafTicking = false;
const handleScroll = () => {
  const scrollY = window.scrollY;

  // 1. Navbar scrolled state
  if (navbar) {
    navbar.classList.toggle("scrolled", scrollY > 40);
  }

  // 2. Progress bar
  if (progressBar) {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (scrollY / scrollableHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  // 3. Active Nav Tracker (using cached offsets - 0 layout thrashing)
  updateActiveNav(scrollY);

  scrollRafTicking = false;
};

window.addEventListener("scroll", () => {
  if (!scrollRafTicking) {
    window.requestAnimationFrame(handleScroll);
    scrollRafTicking = true;
  }
}, { passive: true });

handleScroll();

// Product-like motion: cursor light, magnetic controls, and responsive card depth.
const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (motionAllowed) {
  document.querySelectorAll(".hero-btn, .btn-case-study, .btn-contact, .filter-button").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const bounds = element.getBoundingClientRect();
      const x = (event.clientX - bounds.left - bounds.width / 2) / bounds.width;
      const y = (event.clientY - bounds.top - bounds.height / 2) / bounds.height;
      element.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
    });
    element.addEventListener("pointerleave", () => { element.style.transform = ""; });
  });

  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll(".project-card-modern, .contact-wrapper"), {
      max: 6,
      speed: 450,
      glare: true,
      "max-glare": 0.12,
      perspective: 1200,
      scale: 1.01
    });
  }

  const profile = document.querySelector(".profile-container");
  if (profile) {
    profile.addEventListener("pointermove", (event) => {
      const bounds = profile.getBoundingClientRect();
      profile.style.setProperty("--profile-rotate", `${((event.clientX - bounds.left) / bounds.width - .5) * 10}deg`);
      profile.style.setProperty("--profile-tilt", `${-((event.clientY - bounds.top) / bounds.height - .5) * 8}deg`);
    });
    profile.addEventListener("pointerleave", () => {
      profile.style.setProperty("--profile-rotate", "0deg");
      profile.style.setProperty("--profile-tilt", "0deg");
    });
  }
}

// Dynamic hero role ticker
const heroTicker = document.getElementById("hero-ticker");
if (heroTicker) {
  const roles = [
    "AI & Agentic Systems Engineer",
    "Machine Learning Specialist",
    "Predictive Modeling & NLP",
    "Big Data & PySpark Architect"
  ];
  let roleIndex = 0;

  setInterval(() => {
    heroTicker.style.opacity = "0";
    heroTicker.style.transform = "translateY(5px)";
    heroTicker.style.transition = "opacity 0.25s ease, transform 0.25s ease";

    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      heroTicker.textContent = roles[roleIndex];
      heroTicker.style.opacity = "1";
      heroTicker.style.transform = "translateY(0)";
    }, 250);
  }, 3200);
}



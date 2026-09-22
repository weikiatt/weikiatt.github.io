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

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Let CSS account for the live header height, rather than calculating a fragile page position.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
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

// A small progress signal makes long portfolio pages easier to navigate.
const progressBar = document.querySelector(".scroll-progress span");
const updateProgress = () => {
  if (!progressBar) return;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// Mark the section currently in view in the home-page navigation.
const sectionLinks = [...document.querySelectorAll('.navbar-links a[href^="#"]')];
const observedSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const sectionTracker = document.querySelector(".section-tracker");
const trackerValue = document.querySelector(".tracker-value");

if (observedSections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          link.classList.toggle("is-current", link.getAttribute("href") === `#${entry.target.id}`);
        });

        if (sectionTracker && trackerValue) {
          const label = entry.target.querySelector(".section-header h3")?.textContent.trim() || "About";
          if (trackerValue.textContent !== label) {
            trackerValue.textContent = label;
            sectionTracker.classList.remove("is-updating");
            void sectionTracker.offsetWidth;
            sectionTracker.classList.add("is-updating");
          }
        }
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );

  observedSections.forEach((section) => navObserver.observe(section));
}


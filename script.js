// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navbar-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when a link is clicked (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Navbar scroll shadow
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth scroll with navbar offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const navbarHeight = document.querySelector(".custom-navbar").offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".timeline-item, .project-card, .section-header, .hero-text, .hero-visual").forEach((el, i) => {
  el.classList.add("fade-up");
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

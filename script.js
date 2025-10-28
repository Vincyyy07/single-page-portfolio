
// Form submit alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out, I'll get back to you soon!");
  this.reset();
});

// Highlight nav link based on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Scroll animation for skills
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const scrollInView = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
  );
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (scrollInView(el)) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);

gsap.registerPlugin(ScrollTrigger);

const slides = document.querySelectorAll(".slide");
const links = document.querySelectorAll(".sidebar a");
const sideNumber = document.querySelector(".side-number");

slides.forEach((slide, index) => {
  const title = slide.querySelector("h1");
  const desc = slide.querySelector(".desc");
  const btn = slide.querySelector(".btn");
  const cards = slide.querySelectorAll(".polaroid, .note-card, .journal");
  const brand = slide.querySelector(".brand");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: slide,
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  });

  if (brand) {
    tl.from(brand, {
      opacity: 0,
      y: -25,
      duration: 0.5
    });
  }

  if (title) {
    tl.from(title, {
      opacity: 0,
      y: 70,
      duration: 0.8,
      ease: "power4.out"
    }, "-=0.2");
  }

  if (desc) {
    tl.from(desc, {
      opacity: 0,
      y: 40,
      duration: 0.6
    }, "-=0.35");
  }

  if (btn) {
    tl.from(btn, {
      opacity: 0,
      y: 30,
      duration: 0.5
    }, "-=0.25");
  }

  if (cards.length) {
    tl.from(cards, {
      opacity: 0,
      y: 80,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)"
    }, "-=0.45");
  }

  ScrollTrigger.create({
    trigger: slide,
    start: "top center",
    end: "bottom center",
    onEnter: () => activate(index, slide.id),
    onEnterBack: () => activate(index, slide.id)
  });
});

function activate(index, id) {
  links.forEach(link => link.classList.remove("active"));

  const active = document.querySelector(`.sidebar a[href="#${id}"]`);
  if (active) active.classList.add("active");

  sideNumber.textContent = String(index + 1).padStart(2, "0");
}

const sections = document.querySelectorAll(".slide");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
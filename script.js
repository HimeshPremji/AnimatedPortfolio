// Navbar Script
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbarBg = document.querySelector(".navbar-bg");
let menuOpen = false;

// window width check if bigger than 768 the navlinks will be displayed
function checkWindowSize() {
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
    navLinks.style.height = "auto";
    navLinks.style.opacity = 1;
  }
}

checkWindowSize();

window.addEventListener("resize", checkWindowSize);

// Hamburger Menu Animation
hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    navLinks.classList.add("active");
    gsap.fromTo(
      navLinks,
      { height: 0, opacity: 0, display: "none" },
      {
        height: "auto",
        opacity: 1,
        display: "flex",
        duration: 0.5,
        ease: "power4.inOut",
      }
    );

    document.querySelectorAll(".nav-links li").forEach((link) => {
      link.addEventListener("click", () => {
        gsap.to(navLinks, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power4.inOut",
          onComplete: () => {
            navLinks.classList.remove("active");
            menuOpen = false;
          },
        });
      });
    });
  } else {
    gsap.to(navLinks, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power4.inOut",
      onComplete: () => navLinks.classList.remove("active"),
    });
  }
});
// Timeline
const tl = gsap.timeline();
tl.fromTo(
  ".clips",
  { height: "100%" },
  {
    height: 0,
    transformOrigin: "top",
    stagger: 0.024,
    duration: 1.3,
    ease: "power4.inOut",
  }
)
  .to(
    navbarBg,
    {
      width: "101%",
      background: "white",
      duration: 1,
      ease: "power2.inOut",
    },
    "-=0.8"
  )
  .from(
    ".nav-links li",
    {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power1.inOut",
    },
    "-=1"
  )
  .from(
    ".navbar .resume",
    {
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
    },
    "-=0.8"
  )
  .to(".loader", { autoAlpha: 0 }, "-=0.5");

// Navbar and Loader Animation Ends Here

// Home Section Animation
const homeTl = gsap.timeline({
  defaults: {
    ease: "power4.out",
    duration: 1.2
  }
});

homeTl
  .from(".home-bg", {
    scale: 0.95,
    opacity: 0,
    duration: 1.8
  })
  .from(".hero-heading", {
    y: 60,
    opacity: 0,
    stagger: 0.15,
    duration: 1.4
  }, "-=1.2")
  .from(".highlight", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(3)"
  }, "-=0.8")
  .from(".intro-p", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1
  }, "-=0.5")
  .from(".intro-p a", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8
  }, "-=0.3");
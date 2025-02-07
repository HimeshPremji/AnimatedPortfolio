// Navbar Script
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbarBg = document.querySelector(".navbar-bg");
let menuOpen = false;

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

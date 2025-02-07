// Navbar Script
document.querySelector(".hamburger").addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});

// nav-links and button gsap animation
// create gsap timeline///
const tl = gsap.timeline();
tl.fromTo(
  ".clips",
  {
    height: "100%",
  },
  {
    delay: 0.1,
    height: 0,
    transformOrigin: "top",
    stagger: 0.06,
    duration: 1.4,
    ease: "power4.inOut",
  }
)
  .to(".navbar-bg", {
    width: "101%",
    background: "white",
    duration: 1,
    ease: "power2.inOut",
  }, "-=0.8")
  .from(".nav-links li", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power1.inOut",
  }, "-=1")
  .from(".navbar .resume", {
    opacity: 0,
    duration: .8,
    ease: "power1.inOut",
  }, "-=.8")
  .to(".loader", { autoAlpha: 0 }, "-=.5");

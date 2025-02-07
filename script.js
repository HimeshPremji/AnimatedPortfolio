// Navbar Script 
document.querySelector('.hamburger').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});
// Smooth scrolling when a link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Make the first application's image larger
const images = document.querySelectorAll('.application-image');
if (images.length > 0) {
  images[0].classList.add('larger-image');
}

const galleryImages = document.querySelectorAll('.gallery-item');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-image');
let currentIndex = 0;

galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => openOverlay(index));
});

function openOverlay(index) {
  currentIndex = index;
  navigateOverlay(0); // Load the initial image
  overlay.style.display = 'block';
}

function closeOverlay() {
  overlay.style.display = 'none';
}

function navigateOverlay(direction) {
  const totalImages = galleryImages.length;
  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  overlayImage.src = `images/tom${currentIndex + 1}.jpeg`;
}


function myFunction() { 
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function toggleDropdown() {
  const menu = document.querySelector(".myjdropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

const images = [
    'resourse/g18.png',
    'resourse/IMG3.jpg',
    'resourse/IMG4.png'
];
let currentIndex = 0;
function changeNextImage() {
    const image = document.getElementById('carouselImage');
    image.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];

        image.style.opacity = 1;
    }, 750);
}

function changePreviousImage() {
    const image = document.getElementById('carouselImage');
    image.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        image.src = images[currentIndex];

        image.style.opacity = 1;
    }, 750);
}

const parallaxSection = document.getElementById('head-img');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const sectionHeight = parallaxSection.offsetHeight;
  const blurValue = Math.min(scrollY / sectionHeight * 5, 5);

  if (scrollY < sectionHeight) {
      parallaxSection.style.backgroundPositionY = `${scrollY * 0.5}px`;
      parallaxSection.style.filter = `blur(${blurValue}px)`;  
  } 
  else {
      parallaxSection.style.backgroundPositionY = '50%';
      parallaxSection.style.filter = 'blur(5px)'; 
  }
});
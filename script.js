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
    'resourse/IMG1.jpg',
    'resourse/IMG2.jpg',
    'resourse/IMG3.jpg'
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
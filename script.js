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

const parallaxSection = document.getElementById('head-img');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const sectionHeight = parallaxSection.offsetHeight;
  const blurValue = Math.min(scrollY / sectionHeight * 3, 3);

  if (scrollY < sectionHeight) {
      parallaxSection.style.backgroundPositionY = `${scrollY * 5}px`;
      parallaxSection.style.filter = `blur(${blurValue}px)`;  
  } 
  else {
      parallaxSection.style.backgroundPositionY = '50%';
      parallaxSection.style.filter = 'blur(3px)'; 
  }
});

    function loadComments() {
        const storedComments = JSON.parse(localStorage.getItem('guestBookComments')) || [];
        const commentsContainer = document.getElementById('commentsContainer');

        storedComments.forEach(({ Name, comment, colorPicker, rating }) => {
            const commentCard = document.createElement('div');
            commentCard.classList.add('comment-card');
            commentCard.style.backgroundColor = colorPicker;
                let starIcons = '';
                for (let i = 0; i < 5; i++) {
                  starIcons += `<i class="fa fa-star ${i < rating ? 'active' : ''}"></i>`;
                }
            commentCard.innerHTML = `
                <p><strong>${Name}</strong></p>
                <p>${comment}</p>
                <div class="star-rating">${starIcons}</div>
            `;
            commentsContainer.appendChild(commentCard);
        });
    }

    function saveCommentToLocalStorage(Name, comment, colorPicker, rating) {
        const storedComments = JSON.parse(localStorage.getItem('guestBookComments')) || [];
        storedComments.push({ Name, comment, colorPicker, rating });
        localStorage.setItem('guestBookComments', JSON.stringify(storedComments));
    }

    function Submitfunction() {
        const Name = document.getElementById('Name').value;
        const comment = document.getElementById('Comment').value;
        const colorPicker = document.getElementById('colorPicker').value;
        const commentsContainer = document.getElementById('commentsContainer');

        if (!Name || !comment) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน!');
            return;
        }
        if (userRating === 0) {
          alert('กรุณาให้คะแนนก่อนส่งความคิดเห็น!');
          return;
        }
        const commentCard = document.createElement('div');
        commentCard.classList.add('comment-card');
        commentCard.style.backgroundColor = colorPicker;
        let starIcons = '';
        for (let i = 0; i < 5; i++) {
          starIcons += `<i class="fa fa-star ${i < userRating ? 'active' : ''}"></i>`;
        }
        commentCard.innerHTML = `
            <p><strong>${Name}</strong></p>
            <p>${comment}</p>
            <div class="star-rating">${starIcons}</div>
        `;
        commentsContainer.appendChild(commentCard);

        saveCommentToLocalStorage(Name, comment, colorPicker, userRating);

        document.getElementById('Name').value = '';
        document.getElementById('Comment').value = '';
        document.getElementById('colorPicker').value = '#ffffff';
        userRating = 0;
        stars.forEach((star) => star.classList.remove('active'));
        document.getElementById("rating-value").textContent = '';
    }
    document.addEventListener('DOMContentLoaded', loadComments);
    //localStorage.clear(); //คำสั่งลบคอมเม้นต์
    //alert('All comments have been cleared!');


$(document).ready(function(){
  $('.year').slick({
    prevArrow: $('#prev-arrow'),
    nextArrow: $('#next-arrow'),
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

$(document).ready(function(){
  $('.carouselImage').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

const stars = document.querySelectorAll(".stars i");
let userRating = 0; // Variable to store the user's rating

stars.forEach((star, index1) => {
  // Click to select a rating
  star.addEventListener("click", () => {
    // Update the active class for the stars
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });

    // Store the rating (index1 is 0-based, so add 1 to make it 1-based)
    userRating = index1 + 1;

    // Update the UI
    document.getElementById("rating-value").textContent = `You rated: ${userRating} star(s)`;
  });

  // Hover to temporarily highlight stars
  star.addEventListener("mouseover", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("hover") : star.classList.remove("hover");
    });
  });

  // Remove temporary highlight on mouse out
  star.addEventListener("mouseout", () => {
    stars.forEach((star) => {
      star.classList.remove("hover");
    });
  });
});
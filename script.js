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

function Submitfunction() {
    const Name = document.getElementById('Name').value;
    const comment = document.getElementById('Comment').value;
    const colorPicker = document.getElementById('colorPicker').value;
    const commentsContainer = document.getElementById('commentsContainer');

    if (!Name || !comment) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน!');
        return;
    }

    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');
    commentCard.style.backgroundColor = colorPicker;
    commentCard.innerHTML = `
        <p><strong>${Name}</strong></p>
        <p>${comment}</p>
    `;

    commentsContainer.appendChild(commentCard);

    // รีเซ็ตฟิลด์ข้อมูล
    document.getElementById('Name').value = '';
    document.getElementById('Comment').value = '';
    document.getElementById('colorPicker').value = '#ffffff';
}
const years = [
  { title: "Year 1", description: "ปีแรกในมหาวิทยาลัยถือเป็นจุดเริ่มต้นที่สำคัญในการเรียนรู้ทักษะพื้นฐานที่เราต้องใช้ในสายการพัฒนาซอฟต์แวร์และการออกแบบเว็บไซต์ ในปีนี้ เรามีโอกาสเรียนรู้และฝึกฝนทักษะต่างๆ ที่เป็นพื้นฐานสำคัญ เช่น HTML, CSS, และ JavaScript ที่เป็นภาษาแรกๆ ที่ใช้ในการสร้างเว็บไซต์ รวมถึงการเข้าใจหลักการออกแบบที่ดี เช่น การทำให้เว็บไซต์ดูดีและใช้งานง่าย นอกจากเรียนในห้องแล้ว เรายังได้เริ่มทำโปรเจคเล็กๆ ที่ใช้ทักษะที่เรียนมาในการสร้างเว็บไซต์ที่มีความเป็นระเบียบเรียบร้อยและตอบสนองการใช้งานได้ดี  การทำโปรเจคแรกในปีแรกเป็นประสบการณ์ที่สำคัญ เพราะมันทำให้เราเข้าใจถึงการทำงานในโลกของการพัฒนาเว็บและแอปพลิเคชันได้ดีขึ้น  ปีแรกยังเป็นปีที่เราต้องเรียนรู้วิธีการทำงานร่วมกับเพื่อนในกลุ่ม การแบ่งงาน และการทำงานร่วมกันผ่านเครื่องมือ เช่น Git และ GitHub เพื่อจัดการเวอร์ชันของโปรเจคและทำให้การทำงานในกลุ่มเป็นไปได้อย่างราบรื่น โดยรวมแล้ว ปีแรกคือการวางรากฐานที่มั่นคงและการเรียนรู้ทักษะใหม่ๆ ที่สำคัญสำหรับการพัฒนาตนเองในด้านการเขียนโค้ดการออกแบบ และการทำงานเป็นทีม ในปีนี้เราได้เรียนรู้สิ่งต่างๆ ที่จะนำไปใช้ในการพัฒนาทักษะในปีต่อๆ ไปได้อย่างมั่นคง “ปีแรกคือการตั้งหลักและเตรียมพร้อมสำหรับอนาคตที่เต็มไปด้วยความท้าทายและโอกาสใหม่ๆ”" },
  { title: "Year 2", description: "ในปีที่ 2 เราจะเริ่มเรียนรู้เกี่ยวกับการวางแผนและการบริหารโปรเจคอย่างจริงจัง ซึ่งเป็นทักษะที่สำคัญไม่เพียงแต่ในโลกการพัฒนาเว็บ แต่ยังเป็นทักษะที่สามารถใช้ในงานอื่นๆ ได้ในอนาคต เราจะได้เรียนรู้วิธีการตั้งเป้าหมายในแต่ละขั้นตอนของโปรเจค การแบ่งงานให้เหมาะสมกับสมาชิกในทีม และการติดตามความคืบหน้าของงานเพื่อให้โปรเจคสำเร็จตามกำหนดเวลาการบริหารโปรเจคไม่เพียงแต่เกี่ยวกับการจัดการเวลา แต่ยังต้องคิดถึงการแบ่งทรัพยากร การจัดการปัญหาที่อาจเกิดขึ้น และการปรับแผนเมื่อจำเป็น ซึ่งการเรียนรู้วิธีการทำงานร่วมกันอย่างมีประสิทธิภาพในโปรเจคต่างๆ จะช่วยให้เราเติบโตเป็นผู้ที่สามารถทำงานได้ดีในทีมในอนาคตในปีที่ 2 นี้ และ เรียนรู้วิธีการสื่อสารในทีมให้มีประสิทธิภาพเพื่อให้ทุกคนทำงานได้ตรงตามเป้าหมายที่กำหนด  <br> “การบริหารโปรเจคที่ดี คือกุญแจสำคัญสู่ความสำเร็จของทุกการทำงาน”" } ,
  { title: "Year 3", description: "ฝึกงานและพัฒนาทักษะ..." },
  { title: "Year 4", description: "ก้าวสู่อนาคต..." }
];

let currentYear = 0;

function changeYear(direction) {
  currentYear += direction;

  if (currentYear < 0) {
     currentYear = years.length - 1; // Goes to the last year
  } else if (currentYear >= years.length) {
     currentYear = 0; // Goes back to the first year
  }

  // Fade out the current year
  const yearContainer = document.getElementById('yearContainer');
  yearContainer.style.opacity = 0;

  // Wait for fade out animation to complete
  setTimeout(() => {
     // Change the year
     document.getElementById('yearTitle').innerText = years[currentYear].title;
     document.getElementById('yearDescription').innerHTML = years[currentYear].description;

     // Fade in the new year
     yearContainer.style.opacity = 1;
  }, 1000); // Matches the duration of the fade-out
}

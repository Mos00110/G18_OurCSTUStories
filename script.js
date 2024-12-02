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

    document.getElementById('Name').value = '';
    document.getElementById('Comment').value = '';
    document.getElementById('colorPicker').value = '#ffffff';
}
const years = [
  { title: "Year 1", description: "<b>เริ่มต้นเรียนรู้สิ่งใหม่</b><br>ปีแรกในมหาวิทยาลัยถือเป็นจุดเริ่มต้นที่สำคัญในการเรียนรู้ทักษะพื้นฐานที่เราต้องใช้ในสายการพัฒนาซอฟต์แวร์และการออกแบบเว็บไซต์ ในปีนี้ เรามีโอกาสเรียนรู้และฝึกฝนทักษะต่างๆ ที่เป็นพื้นฐานสำคัญ เช่น HTML, CSS, และ JavaScript ที่เป็นภาษาแรกๆ ที่ใช้ในการสร้างเว็บไซต์ รวมถึงการเข้าใจหลักการออกแบบที่ดี เช่น การทำให้เว็บไซต์ดูดีและใช้งานง่าย นอกจากเรียนในห้องแล้ว เรายังได้เริ่มทำโปรเจคเล็กๆ ที่ใช้ทักษะที่เรียนมาในการสร้างเว็บไซต์ที่มีความเป็นระเบียบเรียบร้อยและตอบสนองการใช้งานได้ดี  การทำโปรเจคแรกในปีแรกเป็นประสบการณ์ที่สำคัญ เพราะมันทำให้เราเข้าใจถึงการทำงานในโลกของการพัฒนาเว็บและแอปพลิเคชันได้ดีขึ้น  ปีแรกยังเป็นปีที่เราต้องเรียนรู้วิธีการทำงานร่วมกับเพื่อนในกลุ่ม การแบ่งงาน และการทำงานร่วมกันผ่านเครื่องมือ เช่น Git และ GitHub เพื่อจัดการเวอร์ชันของโปรเจคและทำให้การทำงานในกลุ่มเป็นไปได้อย่างราบรื่น โดยรวมแล้ว ปีแรกคือการวางรากฐานที่มั่นคงและการเรียนรู้ทักษะใหม่ๆ ที่สำคัญสำหรับการพัฒนาตนเองในด้านการเขียนโค้ดการออกแบบ และการทำงานเป็นทีม ในปีนี้เราได้เรียนรู้สิ่งต่างๆ ที่จะนำไปใช้ในการพัฒนาทักษะในปีต่อๆ ไปได้อย่างมั่นคง <br><b>“ปีแรกคือการตั้งหลักและเตรียมพร้อมสำหรับอนาคตที่เต็มไปด้วยความท้าทายและโอกาสใหม่ๆ”</b>" },
  { title: "Year 2", description: "<b>การวางแผนและการบริหารโปรเจค</b><br>ในปีที่ 2 เราจะเริ่มเรียนรู้เกี่ยวกับการวางแผนและการบริหารโปรเจคอย่างจริงจัง ซึ่งเป็นทักษะที่สำคัญไม่เพียงแต่ในโลกการพัฒนาเว็บ แต่ยังเป็นทักษะที่สามารถใช้ในงานอื่นๆ ได้ในอนาคต เราจะได้เรียนรู้วิธีการตั้งเป้าหมายในแต่ละขั้นตอนของโปรเจค การแบ่งงานให้เหมาะสมกับสมาชิกในทีม และการติดตามความคืบหน้าของงานเพื่อให้โปรเจคสำเร็จตามกำหนดเวลาการบริหารโปรเจคไม่เพียงแต่เกี่ยวกับการจัดการเวลา แต่ยังต้องคิดถึงการแบ่งทรัพยากร การจัดการปัญหาที่อาจเกิดขึ้น และการปรับแผนเมื่อจำเป็น ซึ่งการเรียนรู้วิธีการทำงานร่วมกันอย่างมีประสิทธิภาพในโปรเจคต่างๆ จะช่วยให้เราเติบโตเป็นผู้ที่สามารถทำงานได้ดีในทีมในอนาคตในปีที่ 2 นี้ และ เรียนรู้วิธีการสื่อสารในทีมให้มีประสิทธิภาพเพื่อให้ทุกคนทำงานได้ตรงตามเป้าหมายที่กำหนด  <br><b> “การบริหารโปรเจคที่ดี คือกุญแจสำคัญสู่ความสำเร็จของทุกการทำงาน”</b>" } ,
  { title: "Year 3", description: "<b>ฝึกงานและพัฒนาทักษะ</b><br>เส้นทางที่ชัดเจนในปี 3 เมื่อถึงปี 3 เรามองเห็นภาพอนาคตของตัวเองชัดเจนขึ้นจากประสบการณ์ที่ผ่านมาทั้งในห้องเรียนและการทำโปรเจคร่วมกับเพื่อนๆ เราวางแผนที่จะก้าวไปอีกขั้นด้วยการฝึกงานในบริษัทที่เกี่ยวข้องกับสายเทคโนโลยี เพื่อสัมผัสกับการทำงานจริงและเรียนรู้จากมืออาชีพ      การทำงานกับฐานข้อมูลขนาดใหญ่ หรือการปรับปรุง UX/UIให้ตอบโจทย์ผู้ใช้งานสิ่งเหล่านี้จะทำให้เรามีความพร้อมและมั่นใจมากขึ้นสำหรับโปรเจคจบในปีถัดไป ปี 3 ไม่ใช่แค่ช่วงเวลาของการฝึกงาน แต่ยังเป็นโอกาสที่เราจะได้พิสูจน์ตัวเอง ได้แสดงศักยภาพ และสร้างเครือข่ายในสายงานสิ่งที่เราเรียนรู้ในช่วงนี้จะกลายเป็นกุญแจสำคัญที่พาเราไปสู่อนาคตที่เราฝันไว้<br><b>“ปี 3 คือช่วงเวลาที่เราจะเปลี่ยนความฝันให้ใกล้ความจริงมากขึ้น”</b>" },
  { title: "Year 4", description: "<b>ก้าวสู่อนาคต</b><br> พวกเราตั้งเป้าหมายที่จะพัฒนาตัวเองให้กลายเป็นนักพัฒนาเว็บไซต์ที่เชี่ยวชาญและพร้อมสำหรับการทำงานจริง นอกจากการเรียนในห้องเรียน พวกเรายังหวังว่าจะได้เข้าร่วมกิจกรรมการแข่งขัน เช่น Hackathon และฝึกงานกับบริษัทเทคโนโลยี เพื่อเก็บเกี่ยวประสบการณ์จริงและเรียนรู้การทำงานในทีม เราตั้งใจสนับสนุนกันในทุกโปรเจค โดยแบ่งหน้าที่ตามความถนัดเพื่อให้ได้ผลงานที่ดีที่สุดเป้าหมายของเราคือการสร้างเว็บไซต์ที่มีคุณค่า เช่น  ระบบช่วยเหลือผู้ประกอบการรายย่อย หรือการจัดการข้อมูลที่เป็นประโยชน์ต่อชุมชน ทั้งหมดนี้เพื่อเตรียมความพร้อมสำหรับอนาคตและสร้างผลงานที่ตอบแทนสังคมทุกก้าวของเราคือการเรียนรู้และเติบโต เราเชื่อว่าความตั้งใจและความร่วมมือในกลุ่มจะพาเราไปสู่ความสำเร็จในอนาคตที่สดใส<br> <b>“ความฝันในวันนี้ คือพลังที่สร้างอนาคตในวันพรุ่งนี้”</b>" }
];

let currentYear = 0;

function changeYear(direction) {
  currentYear += direction;

  if (currentYear < 0) {
     currentYear = years.length - 1; 
  } else if (currentYear >= years.length) {
     currentYear = 0; 
  }

  const yearContainer = document.getElementById('yearContainer');
  yearContainer.style.opacity = 0;

  
  setTimeout(() => {
  
     document.getElementById('yearTitle').innerText = years[currentYear].title;
     document.getElementById('yearDescription').innerHTML = years[currentYear].description;

     
     yearContainer.style.opacity = 1;
  }, 300);
}
document.addEventListener("DOMContentLoaded", () => {

  const yearTitle = document.getElementById('yearTitle');
  const yearDescription = document.getElementById('yearDescription');

  yearTitle.innerText = years[0].title;
  yearDescription.innerHTML = years[0].description;
});

/* ---------------    carrousel    ---------------*/
let slidePosition = 0;
SlideShow();

function SlideShow() {
  let i;
  let slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 3000); // Change image every 3 seconds
}

/* ---------------    menu burger    ---------------*/

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */

function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

/* ---- agrandissement images au click */

let upsizeImg = document.querySelectorAll(".imgtobig");
for( let i = 0; i < upsizeImg.length; i++) {
  let srcImg = upsizeImg[i].src;
  upsizeImg[i].addEventListener("click", function() {
    const imgBigger = document.createElement("img");
    const body = document.querySelector('body');
    const main = document.querySelector("main")
    main.classList.add("imgOpacity")
    imgBigger.src = srcImg;
    imgBigger.classList.add("imgBig");
    body.appendChild(imgBigger);
    imgBigger.onclick = imgRemove;
    function imgRemove () {
      imgBigger.remove("imgBig");
      main.classList.remove("imgOpacity")
    }
  });
}

/* ---------------    scroll menu    ---------------*/

const header = document.querySelector("header");
let lastScrollTop = 0;
window.addEventListener("scroll", function(){
   let st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
    header.classList.add("scrollmenu");
   } else {
    header.classList.remove("scrollmenu");
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
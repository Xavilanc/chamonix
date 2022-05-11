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
const main = document.querySelector("main");
let lastScrollTop = 0;
window.addEventListener("scroll", function(){
   let st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
    header.classList.remove("scrollmenu");
    header.classList.remove("mainscroll");
   } else {
    header.classList.add("scrollmenu");
    main.classList.add("mainscroll");
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
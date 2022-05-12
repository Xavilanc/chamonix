/* ------------------------------------------------- */
/* ---------------    menu burger    --------------- */
/* ------------------------------------------------- */

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* ---- fait apparaitre le menu au click ---- */
function openNav() {
  sidenav.classList.add("active");
}

/* ---- fait disparaitre le menu au click ---- */
function closeNav() {
  sidenav.classList.remove("active");
}

/* -------------------------------------------------------------- */
/* --------------- agrandissement images au click --------------- */
/* -------------------------------------------------------------- */

let upsizeImg = document.querySelectorAll(".imgtobig"); // Images avec la classe imgtoBig 
for( let i = 0; i < upsizeImg.length; i++) {
  let srcImg = upsizeImg[i].src; // recupère l'url des images imgtoBig
  upsizeImg[i].addEventListener("click", function() {
    const imgBigger = document.createElement("img"); // Crée une image imgBigger
    const body = document.querySelector('body'); // Balise body
    const main = document.querySelector("main") // Balise main
    main.classList.add("imgOpacity") // Ajoute de l'opacité au main
    imgBigger.src = srcImg; // Ajoute l'url récuperée précédement à l'image crée précédement
    imgBigger.classList.add("imgBig"); // Ajout d'une class à la nouvelle image
    body.appendChild(imgBigger); // Ajoute l'image au body
    imgBigger.onclick = imgRemove; // Au clic sur l'image fonction imgRemove
    function imgRemove () {
      imgBigger.remove("imgBig"); // Supprime l'image imgBig
      main.classList.remove("imgOpacity") // Supprime l'opacité au main
    }
  });
}

/* ------------------------------------------------- */
/* ---------------    scroll menu    --------------- */
/* ------------------------------------------------- */

const header = document.querySelector("header");
const main = document.querySelector("main");
let lastScrollTop = 0;
window.addEventListener("scroll", function(){
   let st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
    /* ---- scroll vers le bas ---- */
    header.classList.remove("scrollmenu");
    header.classList.remove("mainscroll");
   } else {
    /* ---- scroll vers le haut ---- */
    header.classList.add("scrollmenu");
    main.classList.add("mainscroll");
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
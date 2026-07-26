/* ==========================================================
   ELDRYN Official Website
   Version 1.0
   Part 1
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:0.15
});

sections.forEach(section=>{

observer.observe(section);

});

const hero=document.querySelector(".hero");

const glow=document.querySelector(".hero-background");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*40;

const y=(e.clientY/window.innerHeight-.5)*30;

glow.style.transform=
`translate(${x}px,${y}px) scale(1.08)`;

});
/* ==========================================================
   Release Artwork Float
========================================================== */

const artwork = document.querySelector(".release-image img");

if (artwork) {

    let direction = 1;

    setInterval(() => {

        direction *= -1;

        artwork.style.transform =
            direction > 0
                ? "translateY(-8px)"
                : "translateY(8px)";

    }, 3000);

}

/* ==========================================================
   Button Hover Animation
========================================================== */

const buttons = document.querySelectorAll(".primary-button, .secondary-button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/* ==========================================================
   Header Background
========================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(4,10,18,.92)";
        header.style.backdropFilter = "blur(22px)";

    } else {

        header.style.background = "rgba(4,10,18,.78)";
        header.style.backdropFilter = "blur(18px)";

    }

});

/* ==========================================================
   Smooth Navigation
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});
/* ==========================================================
   Gentle Hero Glow Animation
========================================================== */

let glowScale = 1;
let growing = true;

setInterval(() => {

    if (growing) {
        glowScale += 0.003;
    } else {
        glowScale -= 0.003;
    }

    if (glowScale >= 1.08) growing = false;
    if (glowScale <= 1.00) growing = true;

    glow.style.filter =
        `blur(70px) brightness(${glowScale})`;

}, 40);

/* ==========================================================
   Fade in Hero Content
========================================================== */

const heroContent = document.querySelector(".hero-content");

if (heroContent) {

    heroContent.animate(

        [
            {
                opacity: 0,
                transform: "translateY(30px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],

        {
            duration: 1400,
            easing: "ease-out",
            fill: "forwards"
        }

    );

}

/* ==========================================================
   Console Signature
========================================================== */

console.log("ELDRYN Official Website Loaded");

/* ==========================================================
   End of File
========================================================== */

});


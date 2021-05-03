const intro = document.querySelector(".intro");

const controller = new ScrollMagic.Controller();

// set desired animation time long enough so that it doesn't skip frames when scrolling fast.
const animationTime = 10000;

// initialise scrollmagic scene
  let scene = new ScrollMagic.Scene({
    duration: animationTime,
    triggerElement: intro,
    triggerHook: 0,
  })
    .setPin(intro)
    .addTo(controller);

// initalise bodymovin

const elem = document.getElementById("lottie");
let anim;

let delay = 0;
let heightPerFrame = 0;
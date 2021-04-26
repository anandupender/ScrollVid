const intro = document.querySelector(".intro");

  const controller = new ScrollMagic.Controller();

// set desired animation time long enough so that it doesn't skip frames when scrolling fast.
  const animationTime = 2427;

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

scene.on("update", (e) => {
  heightPerFrame = anim.totalFrames / animationTime; // if total animation duration === total frames, then 1px height scroll = 1 frame moved
  delay = Math.round(e.scrollPos * heightPerFrame);
  anim.goToAndStop(delay, true);
});

const animateData = {
  container: elem, //
  renderer: "svg",
  loop: false,
  autoplay: false,
  rendererSettings: { progressiveLoad: false },
  path: "data/drink1080m4v.json", // path to json file
};

anim = lottie.loadAnimation(animateData);
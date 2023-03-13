import "../style/main.scss";

import { gsap } from "gsap";

function init() {
  gsap.set(".circle", { xPercent: -50, yPercent: -50 });

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  Math.getDistance = function (x1, y1, x2, y2) {
    var xs = x2 - x1,
      ys = y2 - y1;
    xs *= xs;
    ys *= ys;
    return Math.sqrt(xs + ys);
  };

  let radius = Math.getDistance(0, 0, centerX, centerY);
  let fullWidth = radius * 2;
  let percentIncrease = fullWidth / 100;

  let tl = gsap
    .timeline()
    .to(".circle", { x: "90vw" })
    .to(".circle", {
      x: "50vw",
      scale: percentIncrease,
      duration: 1,
      ease: "power1.in",
    })
    .set(".animationWrapper", { opacity: 1 }, "<+=0.5")
    .from(".headings h1", { xPercent: -100, opacity: 0, duration: 1 }, "<")
    .from(".headings h2", { xPercent: 100, opacity: 0, duration: 1 }, "<+0.25")
    .from(".logo", { scale: 0.3, opacity: 0, duration: 0.5 }, "<+0.5")

    .to(".headings h1", { y: -100, opacity: 0 })
    .to(".headings h2", { y: 100, opacity: 0 }, "<")
    .from(".rotator h1", { opacity: 0, scale: 0, stagger: 1 }, "<")
    .to(".rotator h1", { opacity: 0, scale: 2, stagger: 1 }, "<+1");
}

window.addEventListener("load", () => {
  init();
});

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed"
    });

    gsap.to("#nav-part1 svg", {
        y: "-100%",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    })
        gsap.to("#nav-part2 #links", {
        y: "-100%",
        opacity:0,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    })


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

});

function videoconAnimation() {

    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        });
    });

    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        });
    });

    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 50,
            top: dets.y - 80
        });
    });

}
videoconAnimation();


function loadinganimation() {

    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    });

    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1,
        duration: 0.9
    });

}
loadinganimation();

document.addEventListener("mousemove", function (e) {
    gsap.to("#cursor", {
        left: e.x,
        top: e.y,
        duration: 0.2
    });
});


document.querySelectorAll(".child").forEach(function (box) {

    box.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    box.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            scale: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });

});

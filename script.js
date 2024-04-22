function homepageAnimation() {
    gsap.set(".slidesm", {
        scale: 5
    });

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        }
    })

    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: Power2
    }, 'a')
        .to(".slidesm", {
            scale: 1,
            ease: Power2
        }, 'a')
        .to('.lft', {
            xPercent: -10,
            stagger: .05,
            ease: Power4
        }, 'b')
        .to('.rgt', {
            xPercent: 10,
            stagger: .05,
            ease: Power4
        }, 'b')
}

function slidesAnimation() {

    gsap.to(".slides", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        xPercent: -320,
        ease: Power4
    })

}

function teamAnimation() {
    document.querySelectorAll(".listelem")
        .forEach(function (el) {
            el.addEventListener("mousemove", function (dets) {
                gsap.to(this.querySelector('.picture'), { opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX), ease: Power2, duration: .5 })
                gsap.to(this.querySelector('.bluelayer'), { opacity: 1, duration: 0.5 })

            })
            el.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector('.picture'), { opacity: 0, ease: Power4, duration: .5 })
                gsap.to(this.querySelector('.bluelayer'), { opacity: 0 })
            })
        })
}

function paraAnimation() {

    var clutter = "";
    document.querySelector(".textpara")
        .textContent.split("  ")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector('.textpara').innerHTML = clutter;

    gsap.set(".textpara span", { opacity: .1 });
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 40%",
            end: "bottom 70%",
            scrub: 1
        },
        duration: 4,
        opacity: 1,
        stagger: 0.1,
        ease: Power4
    });
}

(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

function capsuleAnimation() {
    gsap.to('.capsule', {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 2
        },
        y: 0,
        ease: Power4
    })
}

function sectionAnimation() {

    document.querySelectorAll(".section")
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: function () {
                    document.body.setAttribute("theme", e.dataset.color);
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", e.dataset.color);
                }
            })
        })
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the About button
    var aboutBtn = document.getElementById('about');
    // Get the About section
    var aboutSection = document.getElementById('para');

    // Add click event listener to the About button
    aboutBtn.addEventListener('click', function () {
        // Scroll to the About section smoothly
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {

    // Get the About button
    var team = document.getElementById('team');
    // Get the About section
    var teamSection = document.getElementById('team');

    // Add click event listener to the About button
    team.addEventListener('click', function () {
        // Scroll to the About section smoothly
        teamSection.scrollIntoView({ behavior: 'smooth' });
    });
})
sectionAnimation();
teamAnimation();
slidesAnimation();
homepageAnimation();
paraAnimation();
capsuleAnimation();
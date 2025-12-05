/* =================================================
   DARK MODE TOGGLE
================================================= */
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


/* =================================================
   RTL (Arabic Layout) Toggle
================================================= */
function toggleRTL() {
    const rtlFile = document.getElementById("rtlLink");

    if (rtlFile.disabled) {
        rtlFile.disabled = false;
        document.body.dir = "rtl";
    } else {
        rtlFile.disabled = true;
        document.body.dir = "ltr";
    }
}


/* =================================================
   SCROLL REVEAL ANIMATION
================================================= */
function revealOnScroll() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        let windowHeight = window.innerHeight;
        let elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


/* =================================================
   SMOOTH SCROLL NAVIGATION
================================================= */
document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const targetID = this.getAttribute("href");
        document.querySelector(targetID).scrollIntoView({
            behavior: "smooth"
        });
    });
});


/* =================================================
   MODAL OPEN/CLOSE
================================================= */
function openModal() {
    document.getElementById("modalBg").style.display = "flex";
}

function closeModal() {
    document.getElementById("modalBg").style.display = "none";
}


/* =================================================
   SUBMIT FORM ACTION
================================================= */
function submitForm() {
    alert("Thank You! Our property consultant will contact you shortly.");
    closeModal();
}


/* =================================================
   TRIGGER REVEAL WHEN PAGE LOADS
================================================= */
revealOnScroll();

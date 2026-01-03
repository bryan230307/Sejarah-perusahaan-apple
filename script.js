// index
// ===== ULTRA SMOOTH TEXT OPENING =====
document.addEventListener("DOMContentLoaded", () => {
    smoothText(".hero-title", 120);
    setTimeout(() => {
        smoothText(".hero-desc", 80);
    }, 700);
});

function smoothText(selector, delay) {
    const el = document.querySelector(selector);
    const text = el.textContent;
    el.textContent = "";

    text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        span.style.transform = "translateY(6px)";
        span.style.transition =
            "opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), " +
            "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)";

        el.appendChild(span);

        setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
        }, i * delay);
    });
}



// modern
window.addEventListener("load", () => {
    const title = document.getElementById("heroTitle");
    const text = title.innerText;
    title.innerHTML = "";


    [...text].forEach((char, index) => {
        const span = document.createElement("span");
        span.innerText = char === " " ? "\u00A0" : char;
        span.style.transitionDelay = `${index * 0.05}s`;
        title.appendChild(span);
    });

    const hero = document.querySelector(".hero");

    
    setTimeout(() => {
        hero.classList.add("animate");
        hero.classList.remove("hero-start");
    }, 300);
});

// masa awal
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");

    hero.classList.add("show");

    setTimeout(() => {
        title.classList.add("show");
    }, 600);

    setTimeout(() => {
        subtitle.classList.add("show");
    }, 1000);
});
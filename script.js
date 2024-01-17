
const ratingContainer = document.querySelector(".rating");
let currentValue = 0;
const limit = 5;

const html = Array.from(Array(limit)).map((_, i) => {
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

ratingContainer.innerHTML = html.join("");      //transform to string

document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        const pos = item.getAttribute("data-pos");

        for (let i = 0; i <= pos; i++) {
            const square = document.querySelector(`.item-${i}`);
            if (!square.classList.contains("item-full")) {
                square.classList.add("item-full");
            }
        }
    });
});
let width = window.innerWidth;

const del = (cards, navbar) => {
  cards.classList.remove("row-cols-3");
  cards.classList.remove("row-cols-2");
  cards.classList.remove("row-cols-1");
  navbar.classList.remove("justify-content-end");
  navbar.classList.remove("justify-content-center");
};

const projectWidth = (cards, navbar) => {
  if (width <= 1000 && width >= 768) {
    del(cards, navbar);
    cards.classList.add("row-cols-2");
    navbar.classList.add("justify-content-end");
  } else if (width <= 768) {
    del(cards, navbar);
    cards.classList.add("row-cols-1");
    navbar.classList.add("justify-content-center");
  } else {
    del(cards, navbar);
    cards.classList.add("row-cols-3");
    navbar.classList.add("justify-content-end");
  }
};

const cards = document.querySelector("#projects").children[0];
const navbar = document.querySelector(".menu").children[0];
console.log(navbar);
projectWidth(cards, navbar);

window.addEventListener("resize", function () {
  width = window.innerWidth;

  projectWidth(cards, navbar);
});

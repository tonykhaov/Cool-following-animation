const links = document.querySelectorAll("a");
const ul = document.querySelector("ul");
const highlight = document.querySelector(".highlight");
const firstLink = document.querySelector("a");

let lastElement;
function handleEnter() {
  if (lastElement) {
    lastElement.classList.remove("active");
  } else {
    firstLink.classList.remove("active");
  }

  linkCoords = this.getBoundingClientRect();
  highlight.style.opacity = 1;
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.bottom = `${linkCoords.top}`;
  highlight.style.left = `${linkCoords.left}`;

  lastElement = this;
}

function handleLeave() {
  highlight.style.width = 0;
  highlight.style.opacity = 0;
  lastElement.classList.add("active");
}

links.forEach((link) => link.addEventListener("mouseenter", handleEnter));
ul.addEventListener("mouseleave", handleLeave);

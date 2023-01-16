"use strict";

// remove Arrow on Scroll

const aboutUsID = document.getElementById("aboutUs");
const cheveronArrow = document.querySelector(".bi-chevron-down");

const observer = new IntersectionObserver(
  (e) => {
    if (e[0].isIntersecting) {
      remove(cheveronArrow);
      observer.unobserve(aboutUsID);
    }
  },
  {
    rootMargin: "-50px",
  }
);

observer.observe(aboutUsID);

function remove(element) {
  element.classList.add("remove");
}

// Add date:
const date = new Date().getFullYear();

document.getElementById("curYr").innerHTML = date;

// Adjusted Scroll Event Listeners
const navBarLinks = document.querySelectorAll(".navBarLinks");

navBarLinks.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e.dataset.link);

    const element = document.getElementById(`${e.dataset.link}`);
    console.log(element);

    const yOffset = -100;

    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

// Modal

const modalSection = document.querySelector(".modal-section");
const overlay = document.querySelector(".overlay");
const CloseModalBtns = document.querySelectorAll(".close-modal-click");
const btnsShowModal = document.querySelector(".navbar-toggler");

function openModal() {
  modalSection.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

function closeModal() {
  modalSection.classList.add("hidden");
  overlay.classList.add("hidden");
}

//Add Open modal on click
btnsShowModal.addEventListener("click", openModal);

// Add close modal event listner
CloseModalBtns.forEach((e) => e.addEventListener("click", closeModal));

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  e.key === "Escape" && !modalSection.classList.contains("hidden")
    ? closeModal()
    : "";
});

//Animate Up on scoll :

const animatedSections = document.querySelectorAll(".section--animated");

function removeHidden(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
}

const observeSections = new IntersectionObserver(removeHidden, {
  root: null,
  threshold: 0.15,
});

animatedSections.forEach(function (section) {
  observeSections.observe(section);
  section.classList.add("section--hidden");
});

// Add fade to orange!

const underlinedElements = document.querySelectorAll(".underlined");

const underlinedObserver = new IntersectionObserver(
  (e) => {
    const [entry] = e;
    const target = entry.target;
    if (!entry.isIntersecting) return;
    addOpacity(target);
  },
  {
    root: null,
    threshold: 1,
    rootmargin: "-200px",
  }
);

underlinedElements.forEach((element) => {
  underlinedObserver.observe(element);
});

function addOpacity(target) {
  target.classList.add("fadeOrange");
}

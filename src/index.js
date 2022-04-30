import "./js/common.js";
import "./assets/css/main.css";
import "./assets/scss/main.scss";

// Slider canendar

const list = document.querySelector(".calendar__list");
const widthContainer = document.querySelector(".calendar").clientWidth;
const controls = document.querySelector(".calendar__pages");
var pos = 0;

function calcWidthList() {
  const itemsCount = list.children.length;
  const widthList = itemsCount * widthContainer;

  list.style.width = `${widthList}px`;
}

function handlerClick(event) {
  if (event.target.tagName === "A") {
    slide(event.target);
    event.preventDefault();
  }
}

function slide(target) {
  const vector = target.dataset.vector;

  switch (vector) {
    case "next":
      slideTo(vector);
      break;
    case "prev":
      slideTo(vector);
      break;
  }
}

function slideTo(vector) {
  const active = document.querySelector(".vision");

  if (vector === "next") {
    var nextElement = active.nextElementSibling;
  } else {
    var prevElement = active.previousElementSibling;
  }

  if (nextElement) {
    pos -= widthContainer;
    active.classList.remove("vision");
    nextElement.classList.add("vision");
    translate(pos);
  } else if (prevElement) {
    pos += widthContainer;
    active.classList.remove("vision");
    prevElement.classList.add("vision");
    translate(pos);
  }
}

function translate(pos) {
  list.style.transform = `translateX(${pos}px)`;
}

controls.addEventListener("click", handlerClick);

window.addEventListener("load", calcWidthList);

// hour logic

const listHours = document.querySelectorAll(".choice-time__item");
const hourOne = document.getElementById("1hour");
const hourOneSecond = document.getElementById("1.5hour");
const hourTwo = document.getElementById("2hour");
const activeElem = document.querySelector("#active-elem");
const timeStart = document.querySelector(".time__start");
const timeFinish = document.querySelector(".time__finish");

let start = 15;
let time = 1.5;

hourOne.addEventListener("click", () => {
  time = 1;
  activeElem.style.width = "50px";
  timeFinish.textContent = `${start + 1}:00`;
});
hourOneSecond.addEventListener("click", () => {
  time = 1.5;
  activeElem.style.width = "75px";
  timeFinish.textContent = `${start + 1}:30`;
});
hourTwo.addEventListener("click", () => {
  time = 2;
  activeElem.style.width = "100px";
  timeFinish.textContent = `${start + 2}:00`;
});

listHours.forEach((el, i) => {
  el.addEventListener("click", () => {
    if (i !== 24) {
      start = i + 1;
      activeElem.style.left = `${i * 50}px`;
      timeStart.textContent = `${start}:00`;
      if (time === 1) timeFinish.textContent = `${start + 1}:00`;
      else if (time === 1.5) timeFinish.textContent = `${start + 1}:30`;
      else if (time === 2) timeFinish.textContent = `${start + 2}:00`;
    }
  });
});

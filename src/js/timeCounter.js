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
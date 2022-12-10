"use strict";
function slidEvnt() {
  const btnNext = document.querySelector(".btn_next");
  const btnPrev = document.querySelector(".btn_prv");
  const slide = document.querySelectorAll(".slide");
  const slideRoll = document.querySelectorAll(".slide_roll>ul button");
  const btnPlay = document.querySelector("button.btn_play");

  let bnnNum = 0;
  let lastNum = slide.length - 1;
  btnNext.addEventListener("click", () => {
    bnnNum++;
    if (bnnNum > lastNum) {
      bnnNum = 0;
    }
    slide.forEach((item) => {
      item.classList.remove("active");
    });
    slide[bnnNum].classList.add("active");

    slideRoll.forEach((idx) => {
      idx.classList.remove("on");
    });
    slideRoll[bnnNum].classList.add("on");
  });

  btnPrev.addEventListener("click", () => {
    bnnNum--;
    if (bnnNum < 0) {
      bnnNum = lastNum;
    }
    slide.forEach((item) => {
      item.classList.add("active");
    });
    slide[bnnNum].classList.remove("active");

    slideRoll.forEach((idx) => {
      idx.classList.remove("on");
    });
    slideRoll[bnnNum].classList.add("on");
  });

  //오토배너
  function autoBanner() {
    bnnNum++;
    if (bnnNum > lastNum) {
      bnnNum = 0;
    }
    slide.forEach((item) => {
      item.classList.remove("active");
    });
    slide[bnnNum].classList.add("active");

    slideRoll.forEach((idx) => {
      idx.classList.remove("on");
    });
    slideRoll[bnnNum].classList.add("on");
  }

  let autoBnn = setInterval(autoBanner, 6000);

  //배너재생 멈춤버튼
  let flag = true;
  btnPlay.addEventListener("click", function () {
    if (this == btnPlay) {
      if (flag) {
        this.classList.remove("stop");
        clearInterval(autoBnn);
        flag = false;
      } else {
        autoBnn = setInterval(autoBanner, 6000);
        this.classList.add("stop");
        flag = true;
      }
    }
  });

  slideRoll.forEach((item) => {
    item.addEventListener("click", rollAction);
  });

  function rollAction() {
    for (let i = 0; i < slide.length && slideRoll.length; i++) {
      slide[bnnNum].classList.toggle("active");
      slideRoll[bnnNum].classList.toggle("on");
      if (this != slide[bnnNum] && this != slideRoll[bnnNum]) {
        slide[bnnNum].classList.remove("active");
        slideRoll[bnnNum].classList.remove("on");
      }
      bnnNum = i;
    }
  }
}

window.addEventListener("load", slidEvnt);

//top버튼
function goTop() {
  const btnTop = document.querySelector(".btn_top");

  window.addEventListener("scroll", () => {
    // let scroll = this.scrollTop;
    let scroll = document.querySelector("html").scrollTop;
    console.log(scroll);

    if (scroll <= 0) {
      btnTop.classList.remove("on", "ab");
    } else if (scroll > 0 && scroll < 2700) {
      btnTop.classList.remove("ab");
      btnTop.classList.add("on");
    } else {
      btnTop.classList.add("ab");
    }
  });

  btnTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}

window.addEventListener("load", goTop);

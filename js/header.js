function headEvnt() {
  const gnbMenu = document.querySelectorAll(".gnb>ul>li");
  const headerWrap = document.querySelector(".header_wrap");

  gnbMenu.forEach((item) => {
    item.addEventListener("mouseover", () => {
      // this.className += "on";
      item.classList.add("on");
      let ht = item.children[1].scrollHeight;
      item.children[1].style.transition = "all 0.1s ease-in-out";
      headerWrap.style.height = `${70 + ht}px`;
      headerWrap.style.transition = "all 0.3s ease-in-out";
    });

    item.addEventListener("mouseout", () => {
      item.classList.remove("on");
      // headerWrap.getElementsByClassName.height = 70 + "px";
      headerWrap.style.height = `${70}px`;
    });
  });
}
window.addEventListener("load", headEvnt);

function srchEvnt() {
  const srchBtn = document.querySelector("button.btn_srch");
  const srchCloseBtn = document.querySelector("button.btn_srch_close");
  const srchWrap = document.querySelector("div.srch_wrap");
  console.log(srchBtn);
  srchBtn.addEventListener("click", function (e) {
    e.preventDefault;
    srchWrap.classList.add("on");
    document.body.style.overflow = "hidden";
  });

  srchCloseBtn.addEventListener("click", function (e) {
    e.preventDefault;
    srchWrap.classList.remove("on");
    document.body.style.overflowY= "auto";
  });
}

window.addEventListener("load", srchEvnt);
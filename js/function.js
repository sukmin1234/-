let mainText = document.querySelector("h1");
let skill1 = document.querySelector(".gauge1");
let skill2 = document.querySelector(".gauge2");
let skill3 = document.querySelector(".gauge3");
let skill4 = document.querySelector(".gauge4");
let skill5 = document.querySelector(".gauge5");
let skill6 = document.querySelector(".gauge6");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  console.log(value);
  if (value > 300) {
    mainText.style.animation = "disappear 1s ease-out forwards";
  } else {
    mainText.style.animation = "move 1s ease-out";
  }
  if (value > 2300) {
    skill1.style.animation = "gauge1 5s ease-out";
    skill2.style.animation = "gauge2 5s ease-out";
    skill3.style.animation = "gauge3 5s ease-out";
    skill4.style.animation = "gauge4 5s ease-out";
    skill5.style.animation = "gauge5 5s ease-out";
    skill6.style.animation = "gauge6 5s ease-out";
  }
});
window.addEventListener("scroll", function () {
  let $header = document.querySelector("header");
  const headerH = $header.innerHeight;
  const $aboutme = this.document.querySelector("#About");
  let scrollY = this.window.scrollY;
  if (scrollY >= this.innerHeight) {
    $header.classList.add("fiexd");
    // $aboutme.style.marginTop = headerH;
  } else {
    $header.classList.remove("fiexd");
    $aboutme.style.marginTop = 0;
  }
});

window.addEventListener("load", function () {
  new WOW().init();
});

// 화면이 로드되었을 때 실행되는 함수
window.onload = function () {
  // 내비게이션에 대한 변수 선언 및 초기화
  let navLinks = document.querySelectorAll(".gnb a");
  let sections = document.querySelectorAll("section");
  let sectionOffsets = [];

  // 모든 section에 대한 offsetTop 값을 배열에 저장
  for (let i = 0; i < sections.length; i++) {
    sectionOffsets.push(sections[i].offsetTop);
  }

  // 스크롤 이벤트 핸들러 함수
  window.onscroll = function () {
    // 현재 스크롤 위치에 가장 가까운 section의 인덱스 계산
    let scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    let closestIndex = 0;
    for (let i = 0; i < sectionOffsets.length; i++) {
      if (
        Math.abs(sectionOffsets[i] - scrollPosition) <
        Math.abs(sectionOffsets[closestIndex] - scrollPosition)
      ) {
        closestIndex = i;
      }
    }

    // 내비게이션 활성화
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("on");
    }
    navLinks[closestIndex].classList.add("on");
  };
};

document.querySelector(".searchBbox").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#search").value = "";
});
document.querySelector(".writeNumber").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#tel").value = "";
});
window.onscroll = function scrolFunction() {
  // обработка события - появление кнопки при скролле
  if (document.documentElement.scrollTop > 280) {
    btntop.style.opacity = "10";
  } else {
    btntop.style.opacity = "0";
  }
};
var btntop = document.querySelector(".btnsrolltop");
btntop.addEventListener("click", function () {
  document
    .querySelector(".hiddenbox")
    .scrollIntoView({ block: "center", behavior: "smooth" });
});
var mySwiper = new Swiper(".swiper-container.styleswiperFirst", {
  loop: true,
  speed: 700,
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
var mySwiper = new Swiper(".swiper-container.styleswiperSecond", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
});
document.addEventListener("DOMContentLoaded", () => {
  const navLine = document.querySelector(".nav_line");
  const navItem = document.querySelectorAll(".itemsMenu");
  navLine.style.width = `${navItem[0].offsetWidth}px`;
  navItem.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      navLine.style.width = `${e.currentTarget.offsetWidth}px`;
      navLine.style.left = `${e.currentTarget.offsetLeft}px`;
    });
    el.addEventListener("mouseleave", () => {
      navLine.style.width = `${navItem[0].offsetWidth}px`;
      navLine.style.left = `0px`;
    });
  });
});

document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector(".burgerMenu").classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
});
document.querySelector(".burgerMenu").addEventListener("click", () => {
  document.querySelector(".burger").classList.remove("active");
  document.querySelector(".burgerMenu").classList.remove("active");
  document.querySelector("body").classList.remove("lock");
});

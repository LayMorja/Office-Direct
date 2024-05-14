import { removeClasses } from "./functions.js";

$(document).ready(function () {
  $(".slider__slider").each(function (slider) {
    $(this).slick({
      prevArrow: this.closest(".slider").querySelector(".slider__button_prev"),
      nextArrow: this.closest(".slider").querySelector(".slider__button_next"),
      speed: 800,
      lazyLoad: "progressive",
    });
  });
  $(".overflow-slider").each(function (slider) {
    $(this)
      .find(".overflow-slider__slider")
      .slick({
        prevArrow: this.closest(".overflow-slider").querySelector(".slider__button_prev"),
        nextArrow: this.closest(".overflow-slider").querySelector(".slider__button_next"),
        speed: 800,
        lazyLoad: "progressive",
      });
  });
  $(".linked-slider").each(function (slider) {
    $(this)
      .find(".linked-slider__text-slider")
      .slick({
        prevArrow: this.querySelector(".slider__button_prev"),
        nextArrow: this.querySelector(".slider__button_next"),
        speed: 800,
        asNavFor: $(this).find(".linked-slider__slider-block"),
      });
    $(this).find(".linked-slider__slider-block").slick({
      speed: 800,
      fade: true,
      arrows: false,
    });
  });
  $(".row-slider").each(function (slider) {
    $(this)
      .find(".row-slider__slider")
      .slick({
        infinite: false,
        slidesToShow: 4,
        prevArrow: this.closest(".row-slider").querySelector(".row-slider__button_prev"),
        nextArrow: this.closest(".row-slider").querySelector(".row-slider__button_next"),
        speed: 800,
        lazyLoad: "progressive",
      });
  });
  $(".cases-slider").each(function (slider) {
    $(this).slick({
      variableWidth: true,
      arrows: false,
      speed: 800,
    });
  });
});

// Tabs with colors
if (document.querySelector(".tabs-card__colors")) {
  const buttonBlocks = document.querySelectorAll(".tabs-card__colors");
  buttonBlocks.forEach((block) => {
    const buttons = block.querySelectorAll(".tabs-card__color");
    block.addEventListener("click", function (e) {
      if (e.target.closest(".tabs-card__color")) {
        removeClasses(buttons, "_active-button");
        e.target.closest(".tabs-card__color").classList.add("_active-button");
      }
    });
  });
}

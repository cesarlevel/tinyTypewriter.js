(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.tinyTypewriter = factory());
}(this, (function () { 'use strict';

  function tinyTypewriter(el, {
    items = [],
    typeSpeed = 100,
    deleteSpeed = 50,
    delayBetweenItems = 2000,
    loop = true,
    startDelay = 0,
    startsAtIndex = 0,
    cursor = true,
    cursorChar = "|",
    cursorCharBlinkSpeed = 500,
    cursorCharBlinkTransitionSpeed = 0.15,
    startOnView = true,
    startOnViewOffset = 0
  } = {}) {
    if (!items.length) {
      throw new Error("tinyTypewriter: No items option was provided");
    }

    let isDeleting = false;
    let index = startsAtIndex;
    let text = items[index];
    let speed;
    let startDelayTimeout;
    let ttwTimeout;
    let cursorInterval;
    let elPosition = el.getBoundingClientRect();
    const char = document.createElement("span");
    char.textContent = cursorChar;

    if (cursor) {
      el.insertAdjacentElement("afterend", char);
      char.style.transition = `opacity ${cursorCharBlinkTransitionSpeed}s`;
      cursorInterval = setInterval(() => {
        char.style.opacity = char.style.opacity === "0" ? "1" : "0";
      }, cursorCharBlinkSpeed);
    }

    el.textContent = items[0];

    function type(arr) {
      const arrLength = arr.length;
      const word = items[index % arrLength];

      if (isDeleting) {
        speed = deleteSpeed;
        text = word.substring(0, text.length - 1);
      } else {
        text = word.substring(0, text.length + 1);
      }

      el.textContent = `${text}`;

      if (!loop && text === arr[arrLength - 1]) {
        clearTimeout(ttwTimeout);
        clearTimeout(startDelayTimeout);
        clearInterval(cursorInterval);
        return;
      } else if (!isDeleting && text === word) {
        isDeleting = true;
        speed = delayBetweenItems;
      } else if (isDeleting && text === "") {
        isDeleting = false;
        index++;
        speed = typeSpeed;
      }

      ttwTimeout = setTimeout(function () {
        type(items);
      }, speed);
    }

    function checkElPos() {
      elPosition = el.getBoundingClientRect();

      if (elPosition.bottom <= window.innerHeight - startOnViewOffset && elPosition.top >= 0 + startOnViewOffset) {
        startDelayTimeout = setTimeout(function () {
          type(items);
        }, startDelay - delayBetweenItems);
        window.removeEventListener("scroll", checkElPos);
      }
    }

    if (startOnView && !(elPosition.bottom <= window.innerHeight && elPosition.top >= 0)) {
      window.addEventListener("scroll", checkElPos, false);
    } else {
      startDelayTimeout = setTimeout(function () {
        type(items);
      }, startDelay - delayBetweenItems);
    }
  }

  return tinyTypewriter;

})));

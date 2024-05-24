const newstickers = document.querySelectorAll('.formo-newsticker');

let resizeTimer;

document.addEventListener('DOMContentLoaded', () => {
  newstickers.forEach((newsticker) => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      newstickers.forEach((newsticker) => {
        init(newsticker);
      })
    }, 250)
  })
});

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    newstickers.forEach((newsticker) => {
      init(newsticker);
    })
  }, 250)
});

function init(newsticker) {
  const seconds = newsticker.getAttribute('data-scrollspeed');
  const duration = seconds * 1000;
  let contents = newsticker.querySelectorAll('.formo-newsticker_content');
  const contentWidth = contents[0].offsetWidth;

  if ( contents.length < 2 && windowFraction(contentWidth) > 0.45) { 
    const factor = Math.floor(windowFraction(contentWidth));
    for (let i = 0; i < factor; i++) {
      const clone = contents[0].cloneNode(true);
      newsticker.appendChild(clone);
    }  
  }
  contents = newsticker.querySelectorAll('.formo-newsticker_content');
  animate(contents, contentWidth, duration);
}

function animate(elements, elementWidth, duration) {
  elements.forEach((element) => {
    element.animate([
      {transform: `translateX(0px)`},
      {transform: `translateX(-${elementWidth}px)`}
    ], {
      duration: duration,
      iterations: Infinity
    });
  })
}

function windowFraction(contentWidth) {
  return window.innerWidth / contentWidth * 2;
}

function throttle(fn, wait) {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}
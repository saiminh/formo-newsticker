(()=>{const e=document.querySelectorAll(".formo-newsticker");let t;document.addEventListener("DOMContentLoaded",(()=>{e.forEach((n=>{clearTimeout(t),t=setTimeout((function(){e.forEach((e=>{o(e)}))}),250)}))}));let n=window.innerWidth;function o(e){const t=1e3*e.getAttribute("data-scrollspeed");let n=e.querySelectorAll(".formo-newsticker_content");const o=n[0].offsetWidth;if(n.length<2&&r(o)>.45){const t=Math.floor(r(o));for(let o=0;o<t;o++){const t=n[0].cloneNode(!0);e.appendChild(t)}}n=e.querySelectorAll(".formo-newsticker_content"),function(e,t,n){e.forEach((e=>{e.animate([{transform:"translateX(0px)"},{transform:`translateX(-${t}px)`}],{duration:n,iterations:1/0})}))}(n,o,t)}function r(e){return window.innerWidth/e*2}window.addEventListener("resize",(()=>{window.innerWidth!==n&&(clearTimeout(t),t=setTimeout((function(){newsTickers.forEach((e=>{o(e)}))}),250),n=window.innerWidth)}))})();
let mijnDiv = document.querySelector(".menu");

window.addEventListener("scroll", function() {
      mijnDiv.style.top = window.pageYOffset + "px";
let maxToBottom = window.innerHeight + window.pageYOffset;
//console.log(maxToBottom)
//console.log(window.innerHeight)
     if (window.pageYOffset> 3000) {
            mijnDiv.style.top = maxToBottom ;
      }
      else {
           let variabele = window.innerHeight;
           mijnDiv.style.bottom = "";
           mijnDiv.style.backgroundColor = "";
           mijnDiv.style.top = (window.pageYOffset/7.9) + "rem";
          }
});

let mijnMenu = document.querySelector(".grootMenu");

function menuweergeven(){
    mijnDiv.classList.add("onzichtbaar");
    mijnMenu.classList.remove("onzichtbaar");
}


mijnDiv.addEventListener("click", menuweergeven)

let mijnKruis = document.querySelector(".kruis");

function menuWeg(){
    mijnMenu.classList.add("onzichtbaar");
    mijnDiv.classList.remove("onzichtbaar");
}
mijnKruis.addEventListener("click", menuWeg)

let mijnLijnEen = document.querySelector(".lijn_01");
let mijnLijnTwee = document.querySelector(".lijn_02");

window.addEventListener("scroll", function() {
      scrollPositiePx = window.pageYOffset;
      console.log(scrollPositiePx);
      if (scrollPositiePx > 370) {
          mijnLijnEen.classList.add("play");
      }
      if (scrollPositiePx > 1000) {
          mijnLijnTwee.classList.add("play");
      }
});

let lijn3 = document.querySelector(".lijn_03")
let lijn4 = document.querySelector(".lijn_04")
let lijn5 = document.querySelector(".lijn_05")
let lijn6 = document.querySelector(".lijn_06")
let lijn7 = document.querySelector(".lijn_07")
let lijn8 = document.querySelector(".lijn_08")
let mijnLijntjes = [lijn3, lijn4, lijn5, lijn6, lijn7, lijn8]
 let i = 0;
     while(i<mijnLijntjes.length){
     mijnLijntjes[i].classList.add("onzichtbaar");
     i++;
    }

window.addEventListener("scroll", function() {
if(window.pageYOffset>5){
      function allesOpnieuw(){
        /*i = 0;
           while(i<mijnLijntjes.length){
           mijnLijntjes[i].classList.add("onzichtbaar");
           i++;
          } */
      }
      setInterval(allesOpnieuw, 30000)

          function eersteZichtbaar(){
              lijn3.classList.remove("onzichtbaar");
          }
          setTimeout(eersteZichtbaar, 1000)
          function tweedeZichtbaar(){
              lijn4.classList.remove("onzichtbaar");
              lijn5.classList.remove("onzichtbaar");
          }
          setTimeout(tweedeZichtbaar, 3000)
          function derdeZichtbaar(){
              lijn6.classList.remove("onzichtbaar");
              lijn7.classList.remove("onzichtbaar");
              lijn8.classList.remove("onzichtbaar");
          }
          setTimeout(derdeZichtbaar, 6000)
}
});

function resize(){
 let i = 0;
     while(i<mijnLijntjes.length){
     mijnLijntjes[i].classList.add("onzichtbaar");
     i++;
    }

window.addEventListener("scroll", function() {
if(window.pageYOffset>5){
      function allesOpnieuw(){
        /*i = 0;
           while(i<mijnLijntjes.length){
           mijnLijntjes[i].classList.add("onzichtbaar");
           i++;
          } */
      }
      setInterval(allesOpnieuw, 30000)

          function eersteZichtbaar(){
              lijn3.classList.remove("onzichtbaar");
          }
          setTimeout(eersteZichtbaar, 1000)
          function tweedeZichtbaar(){
              lijn4.classList.remove("onzichtbaar");
              lijn5.classList.remove("onzichtbaar");
          }
          setTimeout(tweedeZichtbaar, 3000)
          function derdeZichtbaar(){
              lijn6.classList.remove("onzichtbaar");
              lijn7.classList.remove("onzichtbaar");
              lijn8.classList.remove("onzichtbaar");
          }
          setTimeout(derdeZichtbaar, 6000)
}
});
}
window.onresize = resize;
/* let mijnParagraaf = document.querySelector("p");
window.addEventListener("scroll", function() {
mijnParagraaf.innerHTML = "pageXOffset: " + window.pageXOffset +
"px, pageYOffset: " + window.pageYOffset + "px";

}); */

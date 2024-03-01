<div id="circle-loader">
    <div class="word" id="love">to love</div>
    <div class="word" id="devour">to devour</div>
    <div class="word" id="change">to change</div>
    <div class="word" id="become">to become</div>
</div>
  
<style>
  #circle-loader {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 100px auto;
}

.word {
  position: absolute;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  animation: rotateWord 6s linear infinite;
  /* You will need to add overflow: visible if you want the arrows to be visible outside of the loader's bounds */
  overflow: visible; 
}

@keyframes rotateWord {
  0% {
    transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(150px) rotate(-360deg);
  }
}

#love {
  top: 0;
  left: 50%;
  transform-origin: bottom center;
}

#devour {
  right: 0;
  top: 50%;
  transform-origin: left center;
}

#change {
  bottom: 0;
  left: 50%;
  transform-origin: top center;
}

#become {
  left: 0;
  top: 50%;
  transform-origin: right center;
}

/* Adding pseudo-elements for curved arrows */
.word::before {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  border: 3px solid black;
  border-color: transparent transparent transparent black;
  border-radius: 50%;
  z-index: -1;
}

.word::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: black;
  clip-path: polygon(100% 0, 0 50%, 100% 100%);
  z-index: 1;
}

#love::before {
  top: -75px;
  left: 50px;
  transform: rotate(-45deg);
}

#love::after {
  top: -8px;
  left: 192px;
  transform: rotate(23deg);
}

#devour::before {
  top: 50px;
  right: -75px;
  transform: rotate(45deg);
}

#devour::after {
  top: 192px;
  right: -8px;
  transform: rotate(-67deg);
}

#change::before {
  bottom: -75px;
  left: 50px;
  transform: rotate(135deg);
}

#change::after {
  bottom: -8px;
  left: 192px;
  transform: rotate(113deg);
}

#become::before {
  top: 50px;
  left: -75px;
  transform: rotate(-135deg);
}

#become::after {
  top: 192px;
  left: -8px;
  transform: rotate(157deg);
}


</style>

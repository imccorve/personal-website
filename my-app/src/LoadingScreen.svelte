<script>
  import LoadingCircle from "./components/LoadingCircle.svelte";
</script>

  <div class="loading-screen">FIGURE 1: Loading...</div>
  <!-- <LoadingCircle /> -->
  <div id="circle-loader">
    <!-- Inline SVG for curved arrows -->
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Define arrows -->
      <path id="arrow-love-devour" d="M100,20 A80,80 0 0,1 180,100" fill="none" stroke="black"/>
      <path id="arrow-devour-change" d="M180,100 A80,80 0 0,1 100,180" fill="none" stroke="black"/>
      <path id="arrow-change-become" d="M100,180 A80,80 0 0,1 20,100" fill="none" stroke="black"/>
      <path id="arrow-become-love" d="M20,100 A80,80 0 0,1 100,20" fill="none" stroke="black"/>
      
      <!-- Define arrowheads -->
      <!-- Other elements for the words and arrowheads will be added here -->
    </svg>
  
    <!-- Text elements positioned with CSS -->
    <div class="word" id="love">to love</div>
    <div class="word" id="devour">to devour</div>
    <div class="word" id="change">to change</div>
    <div class="word" id="become">to become</div>
  </div>
  

<style>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #edeaea;
    color: black;
    font-size: 2rem;
  }
  
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
  /* animation: rotateWord 6s linear infinite; */
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
  top: -20px;
  left: 50%;
  transform-origin: bottom center;
  transform: translateX(-50%) translateY(0%);
}

#devour {
  right: -20px;
  top: 50%;
  transform-origin: left center;
  transform: translateY(-50%) translateX(0%);
}

#change {
  bottom: -20px;
  left: 50%;
  transform-origin: top center;
  transform: translateX(-50%) translateY(0%);
}

#become {
  left: -20px;
  top: 50%;
  transform-origin: right center;
  transform: translateY(-50%) translateX(0%);
}

/* SVG Arrow Styling */
svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Arrow Animation */
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

path {
  stroke: black;
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: draw 6s linear infinite;
}

</style>
